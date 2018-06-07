import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CycleSchema = new Schema({
    id_carrer: {
        type: String,
        required: 'Cycle id_carrer is required'
    },
    cyname: {
        type: String,
        required: 'Cycle name is required',
        minlength: [3, 'Cycle name must be longer that 3 characters'],
        maxlength: [50, 'Cycle name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    cyperiod: {
        type: String,
        required: 'Cycle period is required',
        minlength: [3, 'Cycle period must be longer that 3 characters'],
        maxlength: [50, 'Cycle period is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    cyisenabled: {
        type: Boolean,
        required: 'Cycle isenabled is required',
        default: false
    },
    cyregisteredbyuser: {
        type: String,
        required: 'Cycle registeredbyuser is required'
    },
    cyupdatedbyuser: {
        type: String,
    },
    cydeletedbyuser: {
        type: String,
    },
    cydatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Cycle', CycleSchema);