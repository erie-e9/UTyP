import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const TeacherSchema = new Schema({
    // temail: {
    //     type: String,
    //     required: 'Teacher email is required',
        // unique: true, //! pendiente descomentar
    //     minlength: [3, 'Teacher email must to be 3 characters'],
    //     maxlength: [100, 'Teacher email is very longer'],
    //     validate: [validators.isLength(3, 100), validators.isEmail()]
    //     // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Teacher email is incorrect type of email']
    // },
    teducation: {
        type: String,
        required: 'Teacher education is required',
        minlength: [3, 'Teacher email must to be 3 characters'],
        maxlength: [100, 'Teacher education is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    tprofessionallicense: {
        type: String,
        required: 'Teacher professional license is required',
        // unique: true, //! pendiente descomentar
        minlength: [5, 'Teacher professional license must to be 5 characters'],
        maxlength: [50, 'Teacher professional license is very longer'],
        validate: [validators.isLength(5, 50)]
    },
    toriginuniversity: {
        type: String,
        required: 'Teacher origin university is required',
        minlength: [10, 'Teacher origin university must be longer that 10 characters'],
        maxlength: [250, 'Teacher origin university is very longer'],
        validate: [validators.isLength(10, 250)]
    },
    tdegreestudy: {
        type: String,
        required: 'Teacher degree study is required',
        enum: ['licentiate', 'master', 'doctoral']
    },
    tresume: { //! pendiente si va a ser archivo o datos
        type: String,
        required: 'Teacher resume is required',
        minlength: [10, 'Teacher resume must be longer that 10 characters'],
        maxlength: [250, 'Teacher resume is very longer'],
        validate: [validators.isLength(10, 250)]
    },
    tmedicalinsurance: {//! Pendiente longitud
        type: String,
        required: 'Teacher medical insurance is required',
        // unique: true, //! pendiente descomentar
        minlength: [5, 'Teacher medical insurance must be longer that 5 characters'],
        maxlength: [50, 'Teacher medical insurance is very longer'],
        validate: [validators.isLength(5, 50)]
    },
    // temailverified: {
    //     type: Boolean,
    //     required: 'Teacher email verified is required',
    // },
    tranking: {
        type: Number, //! pediente el tipo de estrellitas
        required: 'Teacher ranking is required',
        min: [1, 'Teacher only can be evaluated 1 to 10'],
        max: [10, 'Teacher only can be evaluated 1 to 10'],
        validate: [validators.isLength(1, 10), validators.isFloat()]
    },
    tsalary: {
        type: Number,
        required: 'Teacher salary is required',        
        min: [2, 'Teacher salary must be longer that 2 characters'],
        max: [10, 'Teacher salary is very longer'],
        validate: [validators.isLength(2, 10), validators.isNumeric()]
    },
    tregisteredbyuser: {
        type: String,
        required: 'Teacher registeredbyuser is required'
    },
    tupdatedbyuser: {
        type: String,
    },
    tdeletedbyuser: {
        type: String,
    },
    tdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Teacher', TeacherSchema);