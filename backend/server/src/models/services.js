import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const ServiceSchema = new Schema({
    id_campus: {
        type: String,
        required: 'Service id_campus is required'
    },
    sname: {
        type: String,
        required: 'Service name is required',
        unique: true,
        minlength: [3, 'Service name must be longer that 3 characters'],
        maxlength: [100, 'Service name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    spersonmanager: {
        type: String,
        required: 'Service person manager is required'
    },
    sisenabled: {
        type: Boolean,
        required: 'Service isenabled is required',
        default: false
    },
    sregisteredbyuser: {
        type: String,
        required: 'Service registeredbyuser is required'
    },
    supdatedbyuser: {
        type: String,
    },
    sdeletedbyuser: {
        type: String,
    },
    sdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Service', ServiceSchema);