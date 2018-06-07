import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const EmployeesDeparmentSchema = new Schema({
    id_employee: {
        type: String,
        required: 'Employee department id_employee is required',
    },
    id_department: {
        type: String,
        required: 'Employee department id_department is required',
    },
    edisenabled: {
        type: Boolean,
        required: 'Employee department isenabled is required',
        default: false
    },
    edregisteredbyuser: {
        type: String,
        required: 'Employee department registeredbyuser is required'
    },
    edupdatedbyuser: {
        type: String,
    },
    eddeletedbyuser: {
        type: String,
    },
    eddatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('EmployeeDepartment', EmployeesDeparmentSchema);