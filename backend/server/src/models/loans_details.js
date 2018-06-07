import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const LoanDetailSchema = new Schema({
    id_loan: {
        type: String,
        required: 'Loan detail id_loan is required'
    },
    id_book: {
        type: String,
        required: 'Loan detail id_book is required'
    },
    ldquantitybooks: {
        type: Number,
        required: 'Loan detail quantity books is required',
        default: 1,
        min: [1, 'Loan detail quantity books must be longer that 1 characters'],
        max: [50, 'Loan detail quantity books is very longer'],
        validate: [validators.isLength(1, 50), validators.isNumeric()]
    },
    ldisenabled: {
        type: Boolean,
        required: 'Loan detail isenabled is required',
        default: false
    },
    ldregisteredbyuser: {
        type: String,
        required: 'Loan detail registeredbyuser is required'
    },
    ldupdatedbyuser: {
        type: String,
    },
    lddeletedbyuser: {
        type: String,
    },
    lddatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('LoanDetail', LoanDetailSchema);