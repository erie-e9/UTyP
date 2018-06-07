import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const MedicineSchema = new Schema({
    mname: {
        type: String,
        required: 'Medicine name is required',
        unique: true,
        minlength: [3, 'Medicine name must be longer that 3 characters'],
        maxlength: [250, 'Medicine name is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    mdescription: {
        type: String,
        minlength: [3, 'Medicine description must be longer that 3 characters'],
        maxlength: [500, 'Medicine description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    mquantitystock: {
        type: Number,
        required: 'Medicine quantity stock is required',
        min: [1, 'Medicine quantity stock must be longer that 1 characters'],
        max: [5, 'Medicine quantity stock is very longer'],
        validate: [validators.isLength(1, 5), validators.isNumeric()]
    },
    mprice: {
        type: Number,
        required: 'Medicine price is required',
        min: [1, 'Medicine price must be longer that 1 character'],
        max: [3, 'Medicine price is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]
    },
    misenabled: {
        type: Boolean,
        required: 'Medicine isenabled is required',
        default: false
    },
    mregisteredbyuser: {
        type: String,
        required: 'Medicine registeredbyuser is required'
    },
    mupdatedbyuser: {
        type: String,
    },
    mdeletedbyuser: {
        type: String,
    },
    mdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Medicine', MedicineSchema);