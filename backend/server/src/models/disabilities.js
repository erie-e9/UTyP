import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const DisabilitySchema = new Schema({ 
    dname: {
        type: String,
        required: 'Disability name is required',
        unique: true,
        minlength: [3, 'Disability name must be longer that 3 characters'],
        maxlength: [150, 'Disability name is very longer'],
        validate: [validators.isLength(3, 150)]
    },
    ddatestart: {
        type: Date,
        required: 'Disability date start is required',
        validate: [validators.isDate()]
    },
    disenabled: {
        type: Boolean,
        required: 'Disability isenabled is required',
        default: false
    },
    dregisteredbyuser: {
        type: String,
        required: 'Disability registeredbyuser is required'
    },
    dupdatedbyuser: {
        type: String,
    },
    ddeletedbyuser: {
        type: String,
    },
    ddatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Disability', DisabilitySchema);