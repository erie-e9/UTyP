import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const DepartmentSchema = new Schema({
    depname: {
        type: String,
        required: 'Department name is required',
        unique: true,
        minlength: [3, 'Department name must be longer that 3 characters'],
        maxlength: [100, 'Department name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    depisenabled: {
        type: Boolean,
        required: 'Department isenabled is required',
        default: false
    },
    depregisteredbyuser: {
        type: String,
        required: 'Department registeredbyuser is required'
    },
    depupdatedbyuser: {
        type: String,
    },
    depdeletedbyuser: {
        type: String,
    },
    depdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Department', DepartmentSchema);