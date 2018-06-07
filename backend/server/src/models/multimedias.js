import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const MultimediaSchema = new Schema({
    mufilename: {
        type: String,
        required: 'Multimedia filename is required',
        minlength: [3, 'Multimedia filename must be longer that 3 characters'],
        maxlength: [250, 'Multimedia filename is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    mudescription: {
        type: String,
        minlength: [3, 'Multimedia description must be longer that 3 characters'],
        maxlength: [500, 'Multimedia description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    mutype: {
        type: String,
        required: 'Multimedia type is required',
        minlength: [3, 'Multimedia type must be longer that 3 characters'],
        maxlength: [75, 'Multimedia type is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    muidtable: {
        type: String,
        required: 'Multimedia idtable is required',
    },
    mutableowner: {
        type: String,
        required: 'Multimedia tableowner is required',
        enum: ['books', 'users', 'vehicles', 'posts', 'comments']
    },
    muisenabled: {
        type: Boolean,
        required: 'Multimedia isenabled is required',
        default: false
    },
    muregisteredbyuser: {
        type: String,
        required: 'Multimedia registeredbyuser is required'
    },
    muupdatedbyuser: {
        type: String,
    },
    mudeletedbyuser: {
        type: String,
    },
    mudatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Multimedia', MultimediaSchema);