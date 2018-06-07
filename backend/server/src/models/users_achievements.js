import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const UserAchievementSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    id_achievement: {
        type: String,
        required: 'User achievement id_achievement is required',
    },
    uacisenabled: {
        type: Boolean,
        required: 'User achievement isenabled is required',
        default: false
    },
    uacregisteredbyuser: {
        type: String,
        required: 'User achievement registeredbyuser is required'
    },
    uacupdatedbyuser: {
        type: String,
    },
    uacdeletedbyuser: {
        type: String,
    },
    uacdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('UserAchievement', UserAchievementSchema);