import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const StudentHomeworkSchema = new Schema({
    id_student: {
        type: String,
        required: 'Student homework id_student is required'
    },
    id_homework: {
        type: String,
        required: 'Student homework id_homework is required'
    },
    shisenabled: {
        type: Boolean,
        required: 'Student homework isenabled is required',
        default: false
    },
    shregisteredbyuser: {
        type: String,
        required: 'Student homework registeredbyuser is required'
    },
    shupdatedbyuser: {
        type: String,
    },
    shdeletedbyuser: {
        type: String,
    },
    shdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('StudentHomework', StudentHomeworkSchema);