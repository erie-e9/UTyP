import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const LibrarySchema = new Schema({
    id_campus: {
        type: String,
        required: 'Library id_campus is required'
    },
    id_employee: {
        type: String,
        required: 'Library id_employee is required'
    },
    lisenabled: {
        type: Boolean,
        required: 'Library isenabled is required',
        default: false
    },
    lregisteredbyuser: {
        type: String,
        required: 'Library registeredbyuser is required'
    },
    lupdatedbyuser: {
        type: String,
    },
    ldeletedbyuser: {
        type: String,
    },
    ldatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Library', LibrarySchema);