import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const TeacherTypeSchema = new Schema({
    tttype: {
        type: String,
        required: 'TeacherType type is required',
        minlength: [3, 'TeacherType type must be longer that 5 characters'],
        maxlength: [100, 'TeacherType type is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    ttisenabled: {
        type: Boolean,
        required: 'TeacherType isenabled is required',
        default: false
    },
    ttregisteredbyuser: {
        type: String,
        required: 'TeacherType registeredbyuser is required'
    },
    ttupdatedbyuser: {
        type: String,
    },
    ttdeletedbyuser: {
        type: String,
    },
    ttdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('TeacherType', TeacherTypeSchema);