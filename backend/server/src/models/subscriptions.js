import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const SubscriptionSchema = new Schema({
    id_student: {
        type: String,
        required: 'Subscription id_student is required'
    },
    id_cycle: {
        type: String,
        required: 'Subscription id_cycle is required'
    },
    id_paymentmethod: {
        type: String,
        required: 'Subscription id_paymentmethod is required'
    },
    subisenabled: {
        type: Boolean,
        required: 'Subscription isenabled is required',
        default: false
    },
    subregisteredbyuser: {
        type: String,
        required: 'Subscription registeredbyuser is required'
    },
    subupdatedbyuser: {
        type: String,
    },
    subdeletedbyuser: {
        type: String,
    },
    subdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Subscription', SubscriptionSchema);