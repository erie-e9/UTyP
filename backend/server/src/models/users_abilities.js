import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const UserAbilitySchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    id_ability: {
        type: String,
        required: 'User ability id_ability is required'
    },
    uahowoften: {
        type: String,
        required: 'User ability how often is required',
        minlength: [3, 'User ability how often must be longer that 3 characters'],
        maxlength: [75, 'User ability how often is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    uaisenabled: {
        type: Boolean,
        required: 'User ability isenabled is required',
        default: false
    },
    uaregisteredbyuser: {
        type: String,
        required: 'User ability registeredbyuser is required'
    },
    uaupdatedbyuser: {
        type: String,
    },
    uadeletedbyuser: {
        type: String,
    },
    uadatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('UserAbility', UserAbilitySchema);