import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const StudenttypeSchema = new Schema({
    sttype: {
        type: String,
        required: 'Studenttype type is required',
        minlength: [3, 'Studenttype type must be longer that 3 characters'],
        maxlength: [100, 'Studenttype type is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    stisenabled: {
        type: Boolean,
        required: 'Studenttype isenabled is required',
        default: false
    },
    stregisteredbyuser: {
        type: String,
        required: 'Studenttype registeredbyuser is required'
    },
    stupdatedbyuser: {
        type: String,
    },
    stdeletedbyuser: {
        type: String,
    },
    stdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Studenttype', StudenttypeSchema);