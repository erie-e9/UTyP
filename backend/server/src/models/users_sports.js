import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const UserSportSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    id_sport: {
        type: String,
        required: 'User sport id_sport is required'
    },
    ushowoften: {
        type: String,
        required: 'User sport how often is required',
        minlength: [3, 'User sport how often must be longer that 3 characters'],
        maxlength: [75, 'User sport how often is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    usisenabled: {
        type: Boolean,
        required: 'User sport isenabled is required',
        default: false
    },
    usregisteredbyuser: {
        type: String,
        required: 'User sport registeredbyuser is required'
    },
    usupdatedbyuser: {
        type: String,
    },
    usdeletedbyuser: {
        type: String,
    },
    usdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('UserSport', UserSportSchema);