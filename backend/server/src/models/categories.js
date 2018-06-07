import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CategorySchema = new Schema({
    cname: {
        type: String,
        required: 'Category name is required',
        unique: true,
        minlength: [3, 'Category name must be longer that 3 characters'],
        maxlength: [75, 'Category name is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    cisenabled: {
        type: Boolean,
        required: 'Category isenabled is required',
        default: false
    },
    cregisteredbyuser: {
        type: String,
        required: 'Category registeredbyuser is required'
    },
    cupdatedbyuser: {
        type: String,
    },
    cdeletedbyuser: {
        type: String,
    },
    cdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Category', CategorySchema);