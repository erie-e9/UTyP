import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const PhoneSchema = new Schema({
    phnumber: {
        type: String,
        required: 'Phone number is required',
        validate: {
            validator(v) {
              return /\d{3}-\d{3}-\d{4}/.test(v);
            },
            message: '{VALUE} is not a valid phone number'
          },
        minlength: [10, 'Phone number must be longer that 10 characters'],
        maxlength: [14, 'Phone number is very longer']
    },
    phtype: {
        type: String,
        required: 'Phone type is required',
        enum: ['phone', 'cellphone']
    },
    phidtable: {
        type: String,
        required: 'Phone idtable is required'
    },
    phtableonwer: {
        type: String,
        required: 'Phone tableonwer is required',
        enum: ['familiars', 'allies', 'campus']
    },
    phisenabled: {
        type: Boolean,
        required: 'Phone isenabled is required',
        default: false
    },
    phregisteredbyuser: {
        type: String,
        required: 'Phone registeredbyuser is required'
    },
    phupdatedbyuser: {
        type: String,
    },
    phdeletedbyuser: {
        type: String,
    },
    phdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Phone', PhoneSchema);