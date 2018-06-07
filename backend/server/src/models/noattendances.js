import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const NoAttendanceSchema = new Schema({
    id_student: {
        type: String,
        required: 'No attendance id_student is required'
    },
    id_subject: {
        type: String,
        required: 'No attendance id_subject is required'
    },
    nadate: {
        type: Date,
        required: 'No attendance date is required',
        validate: [validators.isDate()]
    },
    najustification: {
        type: Boolean,
        required: 'No attendance justification is required',
        default: false
    },
    naisenabled: {
        type: Boolean,
        required: 'No attendance isenabled is required',
        default: false
    },
    naregisteredbyuser: {
        type: String,
        required: 'No attendance registeredbyuser is required'
    },
    naupdatedbyuser: {
        type: String,
    },
    nadeletedbyuser: {
        type: String,
    },
    nadatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('NoAttendance', NoAttendanceSchema);