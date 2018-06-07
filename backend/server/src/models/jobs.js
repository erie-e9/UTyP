import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const JobSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    jname: {
        type: String,
        required: 'Job name is required',
        minlength: [3, 'Job name must be longer that 3 characters'],
        maxlength: [100, 'Job name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    jbossfirstname: {
        type: String,
        required: 'Job boss firstname is required',
        minlength: [3, 'Job boss firstname must be longer that 3 characters'],
        maxlength: [50, 'Job boss firstname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Job boss firstname allows only letters')]
    },
    jbossfatherlastname: {
        type: String,
        required: 'Job boss father lastname is required',
        minlength: [3, 'Job boss father lastname must be longer that 3 characters'],
        maxlength: [50, 'Job boss father lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Job boss father lastname allows only letters')]
    },
    jbossmotherlastname: {
        type: String,
        minlength: [3, 'Job boss mother lastname must be longer that 3 characters'],
        maxlength: [50, 'Job boss mother lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('Job boss mother lastname allows only letters')]
    },
    jworking: {
        type: Boolean,
        required: 'Job working is required',
        default: false
    },
    jdatestart: {
        type: Date,
        required: 'Job date start is required',
        validate: [validators.isDate()]
    },
    jdateend: {
        type: Date,
        validate: [validators.isDate()]
    },
    jendreason: {
        type: String,
        minlength: [3, 'Job end reason must be longer that 3 characters'],
        maxlength: [500, 'job end reason is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    jisenabled: {
        type: Boolean,
        required: 'Job isenabled is required',
        default: false
    },
    jregisteredbyuser: {
        type: String,
        required: 'Job registeredbyuser is required'
    },
    jupdatedbyuser: {
        type: String,
    },
    jdeletedbyuser: {
        type: String,
    },
    jdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Job', JobSchema);