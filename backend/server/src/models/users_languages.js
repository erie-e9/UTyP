import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const UserLanguageSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    id_language: {
        type: String,
        required: 'User language id_user is required'
    },
    ulpronunciation: {
        type: Number,
        required: 'User language pronunciation is required',
        min: [1, 'User language must be longer that 1 character'],
        max: [3, 'User language is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]

    },
    ulwriting: {
        type: Number,
        required: 'User language writing is required',
        min: [1, 'User language must be longer that 1 character'],
        max: [3, 'User language is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]

    },
    ullistening: {
        type: Number,
        required: 'User language listening is required',
        min: [1, 'User language must be longer that 1 character'],
        max: [3, 'User language is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]

    },
    ulreading: {
        type: Number,
        required: 'User language reading is required',
        min: [1, 'User language must be longer that 1 character'],
        max: [3, 'User language is very longer'],
        validate: [validators.isLength(1, 3), validators.isFloat()]

    },
    ulisenabled: {
        type: Boolean,
        required: 'User language isenabled is required',
        default: false
    },
    ulregisteredbyuser: {
        type: String,
        required: 'User language registeredbyuser is required'
    },
    ulupdatedbyuser: {
        type: String,
    },
    uldeletedbyuser: {
        type: String,
    },
    uldatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('UserLanguage', UserLanguageSchema);