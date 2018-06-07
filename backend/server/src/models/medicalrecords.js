import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const MedicalrecordSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    mrbloodgroup: {
        type: String,
        required: 'Medical record blood group is required',
        minlength: [1, 'Medical record blood group must be longer that 1 character'],
        maxlength: [25, 'Medical record blood group is very longer'],
        validate: [validators.isLength(1, 25)]
    },
    mrvegetarian: {
        type: Boolean,
        required: 'Medical record vegetarian is required',
        default: false
    },
    mrisenabled: {
        type: Boolean,
        required: 'Medicalrecord isenabled is required',
        default: false
    },
    mrregisteredbyuser: {
        type: String,
        required: 'Medicalrecord registeredbyuser is required'
    },
    mrupdatedbyuser: {
        type: String,
    },
    mrdeletedbyuser: {
        type: String,
    },
    mrdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Medicalrecord', MedicalrecordSchema);