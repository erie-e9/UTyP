import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CommentSchema = new Schema({
    id_post: {
        type: String,
        required: 'Comment id_post is required',
    },
    comtext: {
        type: String,
        minlength: [1, 'Comment text must be longer that 1 character'],
        maxlength: [500, 'Comment text is very longer'],
        validate: [validators.isLength(1, 500)]
    },
    comisenabled: {
        type: Boolean,
        required: 'Comment isenabled is required',
        default: false
    },
    comregisteredbyuser: {
        type: String,
        required: 'Comment registeredbyuser is required'
    },
    comupdatedbyuser: {
        type: String,
    },
    comdeletedbyuser: {
        type: String,
    },
    comdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Comment', CommentSchema);