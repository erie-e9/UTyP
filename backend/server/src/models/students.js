import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const StudentSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    id_carrer: {
        type: String,
        required: 'Student id_carrer is required',
    },
    id_studenttype: {
        type: String,
        required: 'Student id_studenttype is required',
    },
    id_group: {
        type: String,
        required: 'Student id_group is required',
    },
    susername: {
        type: String,
        required: 'Student name is required',
        unique: true,
        minlength: [3, 'Student name must be longer that 3 characters'],
        maxlength: [100, 'Student name is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    // semail: {
    //     type: String,
    //     required: 'Student email is required',
    //     unique: true, //! pendiente descomentar
    //     minlength: [3, 'Student email must to be 3 characters'],
    //     maxlength: [100, 'Student email is very longer'],
    //     validate: [validators.isLength(3, 100), validators.isEmail()]
    //     // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Student email is incorrect type of email']
    // },
    senrollment: {
        type: String,
        required: 'Student enrollment is required',
        minlength: [5, 'Student enrollment must to be 5 characters'],
        maxlength: [100, 'Student enrollment is very longer'],
        validate: [validators.isLength(5, 100)]
    },
    sprofessionallicense: {
        type: String,
        required: 'Student professional license is required',
        // unique: true,
        minlength: [5, 'Student professional license must to be 5 characters'],
        maxlength: [50, 'Student professional license is very longer'],
        validate: [validators.isLength(5, 50)]
    },
    shighschoolname: {
        type: String,
        required: 'Student highschool name is required',
        minlength: [5, 'Student highschool name must to be 5 characters'],
        maxlength: [150, 'Student highschool name is very longer'],
        validate: [validators.isLength(5, 150)]
    },
    shighschoolgrade: {
        type: Number,
        required: 'Student highschool grade is required',
        min: [1, 'Student highschool grade must be longer that 1 character'],
        max: [5, 'Student highschool grade is very longer'], //! Checar longitud
        validate: [validators.isLength(1, 5), validators.isFloat()]
    },
    shighschoolcertificate: {
        type: String,
        required: 'Student highschool certificate is required',
        minlength: [10, 'Student highschool certificate must be longer that 10 characters'],
        maxlength: [250, 'Student highschool certificate is very longer'],
        validate: [validators.isLength(10, 250)]
    },
    // semailverified: {
    //     type: Boolean,
    //     required: 'Student email verified is required', 
    // },
    scurrentoccupation: {
        type: String,
        required: 'Student current occupation is required',
        enum: ['student', 'worker', 'student-worker', 'graduated']
    },
    smedicalinsurance: { //! pendiente saber length
        type: String,
        required: 'Student medical insurance is required',
        minlength: [5, 'Student medical insurance must to be 5 characters'],
        maxlength: [50, 'Student medical insurance is very longer'],
        validate: [validators.isLength(5, 50)]
    },
    sresume: { //! pendiente si va a ser archivo o datos
        type: String,
        required: 'Student resume is required',
        minlength: [10, 'Student resume must to be 10 characters'],
        maxlength: [250, 'Student resume is very longer'],
        validate: [validators.isLength(10, 250)]
    },
    sranking: {
        type: Number, //! pediente el tipo de estrellitas
        required: 'Student ranking is required',
        min: [1, 'Student only can be evaluated 1 to 10'],
        max: [10, 'Student only can be evaluated 1 to 10'],
        validate: [validators.isLength(1, 10), validators.isFloat()]
    },
    sregisteredbyuser: {
        type: String,
        required: 'Student registeredbyuser is required'
    },
    supdatedbyuser: {
        type: String,
    },
    sdeletedbyuser: {
        type: String,
    },
    sdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Student', StudentSchema);