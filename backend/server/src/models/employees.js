import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const EmployeeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    esalary: {
        type: Number,
        required: 'Employee salary is required',        
        min: [3, 'Employee salary must be longer that 3 characters'],
        max: [10, 'Employee salary is very longer'],
        validate: [validators.isLength(1, 10), validators.isNumeric()]
    },
    // eemail: {
    //     type: String,
    //     unique: true,
    //     maxlength: [100, 'Employee email is very longer'],
    //     validate: validators.isEmail()
    //     // match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Employee email is incorrect type of email']
    
    // },
    emedicalinsurance: {//! Pendiente longitud
        type: String,
        required: 'Employee medicalinsurance is required',
        // unique: true, //! pendiente descomentar
        minlength: [5, 'Employee medicalinsurance must be longer that 5 characters'],
        maxlength: [50, 'Employee medicalinsurance is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    // eemailverified: {
    //     type: Boolean,
    //     required: 'Employee emailverified is required'
    // },
    eregisteredbyuser: {
        type: String,
        required: 'Employee registeredbyuser is required'
    },
    eupdatedbyuser: {
        type: String,
    },
    edeletedbyuser: {
        type: String,
    },
    edatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Employee', EmployeeSchema);