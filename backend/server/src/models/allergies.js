import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const AllergySchema = new Schema({
    id_medicalrecord: {
        type: String,
        required: 'Allergy id_medicalrecord is required'
    },
    alname: {
        type: String,
        required: 'Allergy name is required',
        unique: true,
        minlength: [3, 'Allergy name must be longer that 3 characters'],
        maxlength: [50, 'Allergy name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    almedicine: {
        type: String,
        required: 'Allergy medicine is required',
        minlength: [3, 'Allergy medicine must be longer that 3 characters'],
        maxlength: [50, 'Allergy medicine is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    alisenabled: {
        type: Boolean,
        required: 'Allergy isenabled is required',
        default: false
    },
    alregisteredbyuser: {
        type: String,
        required: 'Allergy registeredbyuser is required'
    },
    alupdatedbyuser: {
        type: String,
    },
    aldeletedbyuser: {
        type: String,
    },
    aldatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Allergy', AllergySchema);