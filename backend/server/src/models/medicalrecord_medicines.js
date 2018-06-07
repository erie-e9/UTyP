import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const MedicalrecordMedicineSchema = new Schema({
    id_medicine: {
        type: String,
        required: 'Medical record medicine id_medicine is required'
    },
    id_medicalrecord: {
        type: String,
        required: 'Medical record medicine id_medicalrecord is required'
    },
    mmlastapplication: {
        type: Date,
        validate: [validators.isDate()]
    },
    mmnextapplication: {
        type: Date,
        validate: [validators.isDate()]
    },
    mmisenabled: {
        type: Boolean,
        required: 'Medical record medicine isenabled is required',
        default: false
    },
    mmregisteredbyuser: {
        type: String,
        required: 'Medical record medicine registeredbyuser is required'
    },
    mmupdatedbyuser: {
        type: String,
    },
    mmdeletedbyuser: {
        type: String,
    },
    mmdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('MedicalrecordMedicine', MedicalrecordMedicineSchema);