import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const AccesshistoryDeviceSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    id_device: {
        type: String,
        required: 'Access history device id_device is required'
    },
    adstartconnection: {
        type: Date,
        required: 'Access history device startconnection is required',
        validate: [validators.isDate()]
    },
    adendconnection: {
        type: Date,
        required: 'Access history device endconnection is required',
        validate: [validators.isDate()]
    },
    adisenabled: {
        type: Boolean,
        required: 'Access history device isenabled is required',
        default: false
    },
    adregisteredbyuser: {
        type: String,
        required: 'Access history device registeredbyuser is required'
    },
    adupdatedbyuser: {
        type: String,
    },
    addeletedbyuser: {
        type: String,
    },
    addatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('AccesshistoryDevice', AccesshistoryDeviceSchema);