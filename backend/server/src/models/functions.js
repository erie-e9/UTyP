import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const FunctionSchema = new Schema({
    id_department: {
        type: String,
        required: 'Function id_department is required'
    },
    funame: {
        type: String,
        required: 'Function name is required',
        minlength: [3, 'Function name must be longer that 3 characters'],
        maxlength: [100, 'Function name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    fudescription: {
        type: String,
        required: 'Function description is required',
        minlength: [3, 'Function description must be longer that 3 characters'],
        maxlength: [500, 'Function description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    fuisenabled: {
        type: Boolean,
        required: 'Function isenabled is required',
        default: false
    },
    furegisteredbyuser: {
        type: String,
        required: 'Function registeredbyuser is required'
    },
    fuupdatedbyuser: {
        type: String,
    },
    fudeletedbyuser: {
        type: String,
    },
    fudatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Function', FunctionSchema);