import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const ProviderSchema = new Schema({
    prname: {
        type: String,
        required: 'Provider name is required',
        unique: true,
        minlength: [3, 'Provider name must be longer that 3 characters'],
        maxlength: [100, 'Provider name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    prisenabled: {
        type: Boolean,
        required: 'Provider isenabled is required',
        default: false
    },
    prregisteredbyuser: {
        type: String,
        required: 'Provider registeredbyuser is required'
    },
    prupdatedbyuser: {
        type: String,
    },
    prdeletedbyuser: {
        type: String,
    },
    prdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Provider', ProviderSchema);