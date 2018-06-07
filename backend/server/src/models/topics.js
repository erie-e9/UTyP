import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const TopicSchema = new Schema({
    id_unity: {
        type: String,
        required: 'Topic id_unity is required'
    },
    toname: {
        type: String,
        required: 'Topic name is required',
        minlength: [3, 'Topic name must be longer that 3 characters'],
        maxlength: [75, 'Topic name is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    toisenabled: {
        type: Boolean,
        required: 'Topic isenabled is required',
        default: false
    },
    toregisteredbyuser: {
        type: String,
        required: 'Topic registeredbyuser is required'
    },
    toupdatedbyuser: {
        type: String,
    },
    todeletedbyuser: {
        type: String,
    },
    todatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Topic', TopicSchema);