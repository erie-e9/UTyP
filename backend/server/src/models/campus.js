import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CampusSchema = new Schema({
    camname: {
        type: String,
        required: 'Campus name is required',
        unique: true,
        minlength: [3, 'Campus name must be longer that 3 characters'],
        maxlength: [50, 'Campus name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    camabbreviation: {
        type: String,
        required: 'Campus abbreviation is required',
        unique: true,
        minlength: [2, 'Campus abbreviation must be longer that 2 characters'],
        maxlength: [10, 'Campus abbreviation is very longer'],
        validate: [validators.isLength(2, 10)]
    },
    camcode: {
        type: String,
        required: 'Campus code is required',
        unique: true,
        minlength: [3, 'Campus code must be longer that 3 characters'],
        maxlength: [50, 'Campus code is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    camslogan: {
        type: String,
        required: 'Campus slogan is required',
        minlength: [3, 'Campus slogan must be longer that 3 characters'],
        maxlength: [100, 'Campus slogan is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    cammascot: {
        type: String,
        required: 'Campus mascot is required',
        minlength: [3, 'Campus mascot must be longer that 3 characters'],
        maxlength: [250, 'Campus mascot is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    camlogo: {
        type: String,
        required: 'Campus logo is required',
        minlength: [3, 'Campus logo must be longer that 3 characters'],
        maxlength: [250, 'Campus logo is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    camemail: {
        type: String,
        required: 'Campus email is required',
        unique: true,
        minlength: [3, 'Campus email must be longer that 3 characters'],
        maxlength: [100, 'Campus email is very longer'],
        validate: [validators.isLength(3, 100), validators.isEmail('Campus email is incorrect type of email')]
        // match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Campus email is incorrect type of email']
    },
    camwebpage: {
        type: String,
        required: 'Campus webpage is required',
        minlength: [3, 'Campus webpage must be longer that 3 characters'],
        maxlength: [100, 'Campus webpage is very longer'],
        validate: [validators.isLength(3, 100), validators.isURL()]
    },
    camdatestart: {
        type: Date,
        required: 'Campus date start is required',
        validate: [validators.isDate()]
    },
    camisenabled: {
        type: Boolean,
        required: 'Campus isenabled is required',
        default: false
    },
    camregisteredbyuser: {
        type: String,
        required: 'Campus registeredbyuser is required'
    },
    camupdatedbyuser: {
        type: String
    },
    camdeletedbyuser: {
        type: String
    },
    camdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    }
}, { timestamps: true });

export default mongoose.model('Campus', CampusSchema);