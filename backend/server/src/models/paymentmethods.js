import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const PaymentMethodSchema = new Schema({
    paname: {
        type: String,
        required: 'Payment method name is required',
        unique: true,
        minlength: [3, 'Payment method name must be longer that 3 characters'],
        maxlength: [250, 'Payment method name is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    paisenabled: {
        type: Boolean,
        required: 'Payment method isenabled is required',
        default: false
    },
    paregisteredbyuser: {
        type: String,
        required: 'Payment method registeredbyuser is required'
    },
    paupdatedbyuser: {
        type: String,
    },
    padeletedbyuser: {
        type: String,
    },
    padatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('PaymentMethod', PaymentMethodSchema);