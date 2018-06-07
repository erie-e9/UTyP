import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const SocialNetworkSchema = new Schema({
    snusername: {
        type: String,
        required: 'Social Network username is required',
        // unique: true,
        minlength: [3, 'Social network username must be longer that 3 characters'],
        maxlength: [50, 'Social network username is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    snurl: {
        type: String,
        required: 'Social network url is required',
        unique: true,
        minlength: [3, 'Social network url must be longer that 3 characters'],
        maxlength: [250, 'Social network url is very longer'],
        validate: [validators.isLength(3, 250), validators.isURL()]

    },
    snidtable: {
        type: String,
        required: 'Social network idtable is required',
    },
    sntableowner: {
        type: String,
        required: 'Social network tableowner is required',
        enum: ['users', 'campus', 'familiars', 'allies']
    },
    snisenabled: {
        type: Boolean,
        required: 'Social network isenabled is required',
        default: false
    },
    snregisteredbyuser: {
        type: String,
        required: 'Social network registeredbyuser is required'
    },
    snupdatedbyuser: {
        type: String,
    },
    sndeletedbyuser: {
        type: String,
    },
    sndatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('SocialNetwork', SocialNetworkSchema);