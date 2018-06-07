import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const FileSchema = new Schema({
    ffilename: {
        type: String,
        required: 'File name is required',
        minlength: [3, 'File name must be longer that 3 characters'],
        maxlength: [250, 'File name is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    fdescription: {
        type: String,
        minlength: [3, 'File description must be longer that 3 characters'],
        maxlength: [500, 'File description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    fextension: {
        type: String,
        minlength: [2, 'File extension must be longer that 3 characters'],
        maxlength: [10, 'File extension is very longer'],
        validate: [validators.isLength(2, 10)]
    },
    fidtable: {
        type: String,
        required: 'File idtable is required',
        minlength: [3, 'File idtable must be longer that 3 characters'],
        maxlength: [75, 'File idtable is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    ftableonwer: {
        type: String,
        required: 'File tableowner is required',
        enum: ['users', 'books', 'homeworks', 'allies']
    },
    fisenabled: {
        type: Boolean,
        required: 'File isenabled is required',
        default: false
    },
    fregisteredbyuser: {
        type: String,
        required: 'File registeredbyuser is required'
    },
    fupdatedbyuser: {
        type: String,
    },
    fdeletedbyuser: {
        type: String,
    },
    fdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('File', FileSchema);