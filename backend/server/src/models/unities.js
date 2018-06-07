import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const UnitySchema = new Schema({
    id_subject: {
        type: String,
        required: 'Unity id_subject is required'
    },
    unname: {
        type: String,
        required: 'Unity name is required',
        minlength: [3, 'Unity name must be longer that 3 characters'],
        maxlength: [75, 'Unity name is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    undescription: {
        type: String,
        required: 'Unity description is required',
        minlength: [3, 'Unity description must be longer that 3 characters'],
        maxlength: [500, 'Unity description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    ungrade: {
        type: String,
        required: 'Unity grade is required',
        min: [1, 'Unity grade must be longer that 1 character'],
        max: [5, 'Unity grade is very longer'], //! Checar longitud
        validate: [validators.isFloat()]
    },
    unisenabled: {
        type: Boolean,
        required: 'Unity isenabled is required',
        default: false
    },
    unregisteredbyuser: {
        type: String,
        required: 'Unity registeredbyuser is required'
    },
    unupdatedbyuser: {
        type: String,
    },
    undeletedbyuser: {
        type: String,
    },
    undatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Unity', UnitySchema);