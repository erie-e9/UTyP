import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CitySchema = new Schema({
    id_state: {
        type: String,
        required: 'City id_state is required'
    },
    ciname: {
        type: String,
        required: 'City name is required',
        unique: true,
        minlength: [3, 'City name must be longer that 3 characters'],
        maxlength: [50, 'City name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    ciabbreviation: {
        type: String,
        required: 'City abbreviation is required',
        unique: true,
        minlength: [2, 'City abbreviation must be longer that 2 characters'],
        maxlength: [10, 'City abbreviation is very longer'],
        validate: [validators.isLength(2, 10)]
    },
    ciisenabled: {
        type: Boolean,
        required: 'City isenabled is required',
        default: false
    },
    ciregisteredbyuser: {
        type: String,
        required: 'City registeredbyuser is required'
    },
    ciupdatedbyuser: {
        type: String,
    },
    cideletedbyuser: {
        type: String,
    },
    cidatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('City', CitySchema);