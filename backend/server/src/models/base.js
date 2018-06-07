import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const BaseSchema = new Schema({
    isenabled: {
        type: Boolean,
        required: 'Base isenabled is required',
        default: false
    },
    registeredbyuser: {
        type: String,
        required: 'Base registeredbyuser is required'
    },
    updatedbyuser: {
        type: String,
    },
    deletedbyuser: {
        type: String,
    },
    datedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Base', BaseSchema);