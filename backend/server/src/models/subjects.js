import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const SubjectSchema = new Schema({
    id_cycle: {
        type: String,
        required: 'Subject id_cycle is required'
    },
    suname: {
        type: String,
        required: 'Subject name is required',
        minlength: [3, 'Subject name must be longer that 3 characters'],
        maxlength: [100, 'Subject name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    suabbreviation: {
        type: String,
        required: 'Subject abbreviation is required',
        minlength: [3, 'Subject abbreviation must be longer that 3 characters'],
        maxlength: [10, 'Subject abbreviation is very longer'],
        validate: [validators.isLength(3, 10)]
    },
    sucode: {
        type: String,
        required: 'Subject code is required',
        minlength: [3, 'Subject code must be longer that 3 characters'],
        maxlength: [50, 'Subject code is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    suisenabled: {
        type: Boolean,
        required: 'Subject isenabled is required',
        default: false
    },
    suregisteredbyuser: {
        type: String,
        required: 'Subject registeredbyuser is required'
    },
    suupdatedbyuser: {
        type: String,
    },
    sudeletedbyuser: {
        type: String,
    },
    sudatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Subject', SubjectSchema);