import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const CountrySchema = new Schema({
    coname: {
        type: String,
        required: 'Country name is required',
        unique: true,
        minlength: [2, 'Country name must be longer that 2 characters'],
        maxlength: [100, 'Country name is very longer'],
        validate: [validators.isLength(2, 100)]
    },
    coabbreviation: {
        type: String,
        required: 'Country abbreviation is required',
        unique: true,
        minlength: [2, 'Country abbreviation must be longer that 2 characters'],
        maxlength: [10, 'Country abbreviation is very longer'],
        validate: [validators.isLength(2, 10)]
    },
    cocodephone: {
        type: Number,
        required: 'Country code phone is required',
        unique: true,
        min: [2, 'Country code phone must be longer that 2 characters'],
        max: [10, 'Country code phone is very longer'],
        validate: [validators.isLength(2, 10), validators.isNumeric()]
    },
    coisenabled: {
        type: Boolean,
        required: 'Country isenabled is required',
        default: false
    },
    coregisteredbyuser: {
        type: String,
        required: 'Country registeredbyuser is required',
    },
    coupdatedbyuser: {
        type: String,
    },
    codeletedbyuser: {
        type: String,
    },
    codatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    }
}, { timestamps: true });

export default mongoose.model('Country', CountrySchema);