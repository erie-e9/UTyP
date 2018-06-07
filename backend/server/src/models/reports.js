import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const ReportSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    remotive: {
        type: String,
        required: 'Report motive is required',
        minlength: [3, 'Report motive must be longer that 3 characters'],
        maxlength: [500, 'Report motive is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    redate: {
        type: Date,
        required: 'Report date is required',
        validate: [validators.isDate()]
    },
    reisenabled: {
        type: Boolean,
        required: 'Report isenabled is required',
        default: false
    },
    reregisteredbyuser: {
        type: String,
        required: 'Report registeredbyuser is required'
    },
    reupdatedbyuser: {
        type: String,
    },
    redeletedbyuser: {
        type: String,
    },
    redatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Report', ReportSchema);