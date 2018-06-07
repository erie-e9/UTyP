import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const LanguageSchema = new Schema({
    laname: {
        type: String,
        required: 'Language name is required',
        minlength: [3, 'Language name must be longer that 3 characters'],
        maxlength: [50, 'Language name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    laisenabled: {
        type: Boolean,
        required: 'Language isenabled is required',
        default: false
    },
    laregisteredbyuser: {
        type: String,
        required: 'Language registeredbyuser is required'
    },
    laupdatedbyuser: {
        type: String,
    },
    ladeletedbyuser: {
        type: String,
    },
    ladatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Language', LanguageSchema);