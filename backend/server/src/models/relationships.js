import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const RelationshipSchema = new Schema({
    rname: {
        type: String,
        required: 'Relationship name is required',
        unique: true,
        minlength: [3, 'Relationship name must be longer that 3 characters'],
        maxlength: [100, 'Relationship name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    risenabled: {
        type: Boolean,
        required: 'Relationship isenabled is required',
        default: false
    },
    rregisteredbyuser: {
        type: String,
        required: 'Relationship registeredbyuser is required'
    },
    rupdatedbyuser: {
        type: String,
    },
    rdeletedbyuser: {
        type: String,
    },
    rdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Relationship', RelationshipSchema);