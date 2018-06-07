import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const PersonaldataSchema = new Schema({
    id_medicalrecord: {
        type: String,
        required: 'Personal data id_medicalrecord is required'
    },
    pdheight: {
        type: Number,
        required: 'Personal data height is required',
        min: [1, 'Personal data height must be longer that 1 character'],
        max: [3, 'Personal data height is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]
    },
    pdwidth: {
        type: Number,
        required: 'Personal data width is required',
        min: [1, 'Personal data width must be longer that 1 character'],
        max: [3, 'Personal data width is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]
    },
    pdweight: {
        type: Number,
        required: 'Personal data weight is required',
        min: [1, 'Personal data weight must be longer that 1 character'],
        max: [3, 'Personal data weight is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]
    },
    pdimc: {
        type: Number,
        required: 'Personal data imc is required',
        min: [1, 'Personal data imc must be longer that 1 character'],
        max: [3, 'Personal data imc is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]
    },
    pdisenabled: {
        type: Boolean,
        required: 'Personal data isenabled is required',
        default: false
    },
    pdregisteredbyuser: {
        type: String,
        required: 'Personal data registeredbyuser is required'
    },
    pdupdatedbyuser: {
        type: String,
    },
    pddeletedbyuser: {
        type: String,
    },
    pddatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Personaldata', PersonaldataSchema);