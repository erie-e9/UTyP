import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const FamiliarSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    id_relationship: {
        type: String,
        required: 'Familiar id_relationship is required'
    },
    fafirstname: {
        type: String,
        required: 'Familiar firstname is required',
        minlength: [3, 'Familiar firstname must be longer that 3 characters'],
        maxlength: [50, 'Familiar firstname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Familiar firstname allows only letters')]
    },
    fafatherlastname: {
        type: String,
        required: 'Familiar father lastname is required',
        minlength: [3, 'Familiar father lastname must be longer that 3 characters'],
        maxlength: [50, 'Familiar father lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Familiar father lastname allows only letters')]
    },
    famotherlastname: {
        type: String,
        required: 'Familiar mother lastname is required',
        minlength: [3, 'Familiar mother lastname must be longer that 3 characters'],
        maxlength: [50, 'Familiar mother lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Familiar mother lastname allows only letters')]
    },
    fagender: {
        type: String,
        required: 'Familiar gender is required',
        enum: ['male', 'female']
    },
    faisenabled: {
        type: Boolean,
        required: 'Familiar isenabled is required',
        default: false
    },
    faregisteredbyuser: {
        type: String,
        required: 'Familiar registeredbyuser is required'
    },
    faupdatedbyuser: {
        type: String,
    },
    fadeletedbyuser: {
        type: String,
    },
    fadatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Familiar', FamiliarSchema);