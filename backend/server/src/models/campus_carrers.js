import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CampusCarrerSchema = new Schema({
    id_campus: {
        type: String,
        required: 'Campus carrer id_campus is required'
    },
    id_carrer: {
        type: String,
        required: 'Campus carrer id_carrer is required'
    },
    ccisenabled: {
        type: Boolean,
        required: 'Campus carrer isenabled is required',
        default: false
    },
    ccregisteredbyuser: {
        type: String,
        required: 'Campus carrer registeredbyuser is required'
    },
    ccupdatedbyuser: {
        type: String,
    },
    ccdeletedbyuser: {
        type: String,
    },
    ccdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('CampusCarrer', CampusCarrerSchema);