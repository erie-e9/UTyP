import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const MedicalrecordDisabilitySchema = new Schema({
    id_medicalrecord: {
        type: String,
        required: 'Medicalrecord disability id_medicalrecord is required'
    },
    id_disability: {
        type: String,
        required: 'Medicalrecord disability id_disability is required'
    },
    mdisenabled: {
        type: Boolean,
        required: 'Medicalrecord disability isenabled is required',
        default: false
    },
    mdregisteredbyuser: {
        type: String,
        required: 'Medicalrecord disability registeredbyuser is required'
    },
    mdupdatedbyuser: {
        type: String,
    },
    mddeletedbyuser: {
        type: String,
    },
    mddatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('MedicalrecordDisability', MedicalrecordDisabilitySchema);