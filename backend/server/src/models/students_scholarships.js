import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const StudentScholarshipSchema = new Schema({
    id_student: {
        type: String,
        required: 'Student scholarship id_student is required'
    },
    id_scholarship: {
        type: String,
        required: 'Student scholarship id_scholarship is required'
    },
    ssdatestart: {
        type: Date,
        required: 'Student scholarship datestart is required',
        validate: [validators.isDate()]
    },
    ssdateend: {
        type: Date,
        required: 'Student scholarship dateend is required',
        validate: [validators.isDate()]
    },
    ssisenabled: {
        type: Boolean,
        required: 'Student scholarship isenabled is required',
        default: false
    },
    ssregisteredbyuser: {
        type: String,
        required: 'Student scholarship registeredbyuser is required'
    },
    ssupdatedbyuser: {
        type: String,
    },
    ssdeletedbyuser: {
        type: String,
    },
    ssdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('StudentScholarship', StudentScholarshipSchema);