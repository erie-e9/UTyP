import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const HomeworkSchema = new Schema({
    id_topic: {
        type: String,
        required: 'Homework id_topic is required'
    },
    hname: {
        type: String,
        required: 'Homework name is required',
        minlength: [3, 'Homework name must be longer that 3 characters'],
        maxlength: [75, 'Homework name is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    hdatepublish: {
        type: Date,
        required: 'Homework date publish is required',
        validate: [validators.isDate()]
    },
    hdatedeliver: {
        type: Date,
        required: 'Homework date deliver is required',
        validate: [validators.isDate()]
    },
    hisenabled: {
        type: Boolean,
        required: 'Homework isenabled is required',
        default: false
    },
    hregisteredbyuser: {
        type: String,
        required: 'Homework registeredbyuser is required'
    },
    hupdatedbyuser: {
        type: String,
    },
    hdeletedbyuser: {
        type: String,
    },
    hdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Homework', HomeworkSchema);