import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CarrerSchema = new Schema({
    caname: {
        type: String,
        required: 'Carrer name is required',
        unique: true,
        minlength: [3, 'Carrer name must be longer that 3 characters'],
        maxlength: [50, 'Carrer name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    caabbreviation: {
        type: String,
        required: 'Carrer abbreviation is required',
        unique: true,
        minlength: [2, 'Carrer abbreviation must be longer that 2 characters'],
        maxlength: [10, 'Carrer abbreviation is very longer'],
        validate: [validators.isLength(2, 10)]
    },
    cacode: {
        type: String,
        required: 'Carrer code is required',
        unique: true,
        minlength: [3, 'Carrer code must be longer that 3 characters'],
        maxlength: [50, 'Carrer code is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    calogo: {
        type: String,
        required: 'Carrer logo is required',
        minlength: [3, 'Carrer logo must be longer that 3 characters'],
        maxlength: [250, 'Carrer logo is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    cadatestart: {
        type: Date,
        required: 'Carrer date start is required',
        validate: [validators.isDate()]
    },
    caisenabled: {
        type: Boolean,
        required: 'Carrer isenabled is required',
        default: false
    },
    caregisteredbyuser: {
        type: String,
        required: 'Carrer registeredbyuser is required'
    },
    caupdatedbyuser: {
        type: String,
    },
    cadeletedbyuser: {
        type: String,
    },
    cadatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Carrer', CarrerSchema);