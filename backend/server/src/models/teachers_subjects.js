import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const TeacherSubjectSchema = new Schema({
    id_teacher: {
        type: String,
        required: 'Teacher subject id_teacher is required',
    },
    id_subject: {
        type: String,
        required: 'Teacher subject id_subject is required',
    },
    tsperiod: {
        type: String,
        required: 'Teacher subject period is required',
        minlength: [3, 'Teacher subject period must be longer that 3 characters'],
        maxlength: [50, 'Teacher subject period is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    tsisenabled: {
        type: Boolean,
        required: 'Teacher subject isenabled is required',
        default: false
    },
    tsregisteredbyuser: {
        type: String,
        required: 'Teacher subject registeredbyuser is required'
    },
    tsupdatedbyuser: {
        type: String,
    },
    tsdeletedbyuser: {
        type: String,
    },
    tsdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('TeacherSubject', TeacherSubjectSchema);