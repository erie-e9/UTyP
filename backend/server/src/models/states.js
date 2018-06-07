import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const StateSchema = new Schema({
    id_country: {
        type: String,
        required: 'State id_country is required'
    },
    stname: {
        type: String,
        required: 'State name is required',
        unique: true,
        minlength: [2, 'State name must be longer that 2 characters'],
        maxlength: [50, 'State name is very longer'],
        validate: [validators.isLength(2, 50)]
    },
    stabbreviation: {
        type: String,
        required: 'State abbreviation is required',
        unique: true,
        minlength: [2, 'State abbreviation must be longer that 2 characters'],
        maxlength: [10, 'State abbreviation is very longer'],
        validate: [validators.isLength(2, 10)]
    },
    stisenabled: {
        type: Boolean,
        required: 'State isenabled is required',
        default: false
    },
    stregisteredbyuser: {
        type: String,
        required: 'State registeredbyuser is required'
    },
    stupdatedbyuser: {
        type: String
    },
    stdeletedbyuser: {
        type: String
    },
    stdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    }
}, { timestamps: true });

export default mongoose.model('State', StateSchema);