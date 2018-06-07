import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const LoanSchema = new Schema({
    id_library: {
        type: String,
        required: 'Loan id_library is required'
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    lodateloan: {
        type: Date,
        required: 'Loan date loan is required',
        validate: [validators.isDate()]
    },
    lodatereturn: {
        type: Date,
        validate: [validators.isDate()]
    },
    loisenabled: {
        type: Boolean,
        required: 'Loan isenabled is required',
        default: false
    },
    loregisteredbyuser: {
        type: String,
        required: 'Loan registeredbyuser is required'
    },
    loupdatedbyuser: {
        type: String,
    },
    lodeletedbyuser: {
        type: String,
    },
    lodatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Loan', LoanSchema);