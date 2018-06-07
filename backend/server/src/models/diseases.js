import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const DiseaseSchema = new Schema({
    id_medicalrecord: {
        type: String,
        required: 'Disease id_library is required',
    },
    diname: {
        type: String,
        required: 'Disease name is required',
        unique: true,
        minlength: [3, 'Disease name must be longer that 3 characters'],
        maxlength: [150, 'Disease name is very longer'],
        validate: [validators.isLength(3, 150)]
    },
    didatestart: {
        type: Date,
        required: 'Disease date start is required',
        validate: [validators.isDate()]
    },
    diisenabled: {
        type: Boolean,
        required: 'Disease isenabled is required',
        default: false
    },
    diregisteredbyuser: {
        type: String,
        required: 'Disease registeredbyuser is required'
    },
    diupdatedbyuser: {
        type: String,
    },
    dideletedbyuser: {
        type: String,
    },
    didatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Disease', DiseaseSchema);