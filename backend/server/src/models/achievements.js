import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const AchievementSchema = new Schema({
    acname: {
        type: String,
        required: 'Achievement name is required',
        unique: true,
        minlength: [2, 'Achievement name must be longer that 2 characters'],
        maxlength: [50, 'Achievement name is very longer'],
        validate: [validators.isLength(2, 50)]
    },
    acdate: {
        type: Date,
        required: 'Achievement date is required',
        validate: [validators.isDate()]
    },
    acisenabled: {
        type: Boolean,
        required: 'Achievement isenabled is required',
        default: false
    },
    acregisteredbyuser: {
        type: String,
        required: 'Achievement registeredbyuser is required',
    },
    acupdatedbyuser: {
        type: String
    },
    acdeletedbyuser: {
        type: String
    },
    acdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    }
}, { timestamps: true });

export default mongoose.model('Achievement', AchievementSchema);