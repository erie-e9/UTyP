import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const AbilitySchema = new Schema({
    abname: {
        type: String,
        required: 'Ability name is required',
        unique: true,
        minlength: [3, 'Ability name must be longer that 3 characters'],
        maxlength: [250, 'Ability name is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    abisenabled: {
        type: Boolean,
        required: 'Ability isenabled is required',
        default: false
    },
    abregisteredbyuser: {
        type: String,
        required: 'Ability registeredbyuser is required'
    },
    abupdatedbyuser: {
        type: String,
    },
    abdeletedbyuser: {
        type: String,
    },
    abdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Ability', AbilitySchema);