import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const AllySchema = new Schema({
    allname: {
        type: String,
        required: 'Ally name is required',
        unique: true,
        minlength: [3, 'Ally name must be longer that 3 characters'],
        maxlength: [75, 'Ally name is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    allmanagerfirstname: {
        type: String,
        required: 'Ally manager firstname is required',
        minlength: [3, 'Ally manager firstname must be longer that 3 characters'],
        maxlength: [50, 'Ally manager firstname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Ally manager firstname allows only letters')]
    },
    allmanagerfatherlastname: {
        type: String,
        required: 'Ally manager father lastname is required',
        minlength: [3, 'Ally manager father lastname must be longer that 3 characters'],
        maxlength: [50, 'Ally manager father lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Ally manager father lastname allows only letters')]
    },
    allmanagermotherlastname: {
        type: String,
        minlength: [3, 'Ally manager mother lastname must be longer that 3 characters'],
        maxlength: [50, 'Ally manager mother lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Ally manager mother lastname allows only letters')]
    },
    allisenabled: {
        type: Boolean,
        required: 'Ally isenabled is required',
        default: false
    },
    allregisteredbyuser: {
        type: String,
        required: 'Ally registeredbyuser is required'
    },
    allupdatedbyuser: {
        type: String,
    },
    alldeletedbyuser: {
        type: String,
    },
    alldatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Ally', AllySchema);