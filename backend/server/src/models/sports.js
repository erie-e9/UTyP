import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const SportSchema = new Schema({
    spname: {
        type: String,
        required: 'Sport name is required',
        minlength: [3, 'Sport name must be longer that 3 characters'],
        maxlength: [250, 'Sport name is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    spisenabled: {
        type: Boolean,
        required: 'Sport isenabled is required',
        default: false
    },
    spregisteredbyuser: {
        type: String,
        required: 'Sport registeredbyuser is required'
    },
    spupdatedbyuser: {
        type: String,
    },
    spdeletedbyuser: {
        type: String,
    },
    spdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Sport', SportSchema);