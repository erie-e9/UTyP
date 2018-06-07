import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const ScholarshipSchema = new Schema({
    scname: {
        type: String,
        required: 'Scholarship name is required',
        minlength: [3, 'Scholarship name must be longer that 3 characters'],
        maxlength: [250, 'Scholarship name is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    scisenabled: {
        type: Boolean,
        required: 'Scholarship isenabled is required',
        default: false
    },
    scregisteredbyuser: {
        type: String,
        required: 'Scholarship registeredbyuser is required'
    },
    scupdatedbyuser: {
        type: String,
    },
    scdeletedbyuser: {
        type: String,
    },
    scdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Scholarship', ScholarshipSchema);