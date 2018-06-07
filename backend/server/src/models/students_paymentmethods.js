import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const StudentPaymentmethodSchema = new Schema({
    id_student: {
        type: String,
        required: 'Student payment method id_student is required'
    },
    id_paymentmethod: {
        type: String,
        required: 'Student payment method id_paymentmethod is required'
    },
    spisenabled: {
        type: Boolean,
        required: 'Student payment method isenabled is required',
        default: false
    },
    spregisteredbyuser: {
        type: String,
        required: 'Student payment method registeredbyuser is required'
    },
    spupdatedbyuser: {
        type: String,
    },
    spdeletedbyuser: {
        type: String,
    },
    spdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('StudentPaymentmethod', StudentPaymentmethodSchema);