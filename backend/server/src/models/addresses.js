import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const AddressSchema = new Schema({
    id_city: {
        type: String,
        required: 'Address id_city is required'
    },
    astreet: {
        type: String,
        required: 'Address street is required',
        minlength: [3, 'Address street must be longer that 3 characters'],
        maxlength: [50, 'Address street is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    aexternalnumber: {
        type: String,
        required: 'Address external number is required',
        minlength: [3, 'Address external number must be longer that 3 characters'],
        maxlength: [50, 'Address external number is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    ainternalnumber: {
        type: String,
        minlength: [3, 'Address internal number must be longer that 3 characters'],
        maxlength: [50, 'Address internal number is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    azip: {
        type: Number,
        required: 'Address zip is required',
        min: [5, 'Address zip must to be 5 characters'],
        max: [5, 'Address zip is very longer'],
        validate: [validators.isLength(5, 5), validators.isNumeric()]
    },
    ageolocation: {
        type: String,
        required: 'Address geolocation is required',
    },
    aidtable: {
        type: String,
        required: 'Address idtable is required'
    },
    atableowner: {
        type: String,
        required: 'Address tableowner is required',
        enum: ['users', 'campus', 'familiars', 'allies']
    },
    aisenabled: {
        type: Boolean,
        required: 'Address isenabled is required',
        default: false
    },
    aregisteredbyuser: {
        type: String,
        required: 'Address registeredbyuser is required'
    },
    aupdatedbyuser: {
        type: String,
    },
    adeletedbyuser: {
        type: String,
    },
    adatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Address', AddressSchema);