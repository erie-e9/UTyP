import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const VacancySchema = new Schema({
    id_ally: {
        type: String,
        required: 'Vacancy id_ally is required'
    },
    vaname: {
        type: String,
        required: 'Vacancy name is required',
        minlength: [3, 'Vacancy name must be longer that 3 characters'],
        maxlength: [50, 'Vacancy name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    vadescription: {
        type: String,
        required: 'Vacancy description is required',
        minlength: [3, 'Vacancy description must be longer that 3 characters'],
        maxlength: [500, 'Vacancy description is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    vatype: {
        type: String,
        required: 'Vacancy type is required',
        enum: ['work', 'stays']
    },
    vaisenabled: {
        type: Boolean,
        required: 'Vacancy isenabled is required',
        default: false
    },
    varegisteredbyuser: {
        type: String,
        required: 'Vacancy registeredbyuser is required'
    },
    vaupdatedbyuser: {
        type: String,
    },
    vadeletedbyuser: {
        type: String,
    },
    vadatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Vacancy', VacancySchema);