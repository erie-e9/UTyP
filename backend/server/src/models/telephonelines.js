import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const TelephonelineSchema = new Schema({
    id_state: {
        type: String,
        required: 'Telephone line id_state is required'
    },
    teline: {
        type: String,
        unique: true,
        required: 'Telephone line line is required'
    },
    teisenabled: {
        type: Boolean,
        required: 'Telephone line isenabled is required',
        default: false
    },
    teregisteredbyuser: {
        type: String,
        required: 'Telephone line registeredbyuser is required'
    },
    teupdatedbyuser: {
        type: String,
    },
    tedeletedbyuser: {
        type: String,
    },
    tedatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Telephoneline', TelephonelineSchema);