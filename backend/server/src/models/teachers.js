import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';

const TeacherSchema = new Schema({
    tfirstname: {
        type: String,
        required: 'Teacher firstname is required',
        minlength: [3, 'Teacher firstname must to be longer that 3 characters'],
        maxlength: [50, 'Teacher firstname is very longer']
    },
    tlastname: {
        type: String,
        minlength: [3, 'Teacher lastname must to be longer that 3 characters'],
        maxlength: [50, 'Teacher lastname is very longer']
    },
    tavatar: {
        type: String,
        required: 'Teacher avatar is required'
    },
    tgender: {
        type: String,
        required: 'Teacher gender is required',
        enum: ['male', 'female']
    },
    tphone: {
        type: String,
        required: 'Teacher phone is required',
        minlength: [9, 'Teacher phone must to be longer that 9 characters'],
        maxlength: [13, 'Teacher phone is very longer'],
        
    },
    tcellphone: {
        type: String,
        // unique: true, //! pendiente descomentar
        minlength: [9, 'Teacher cellphone must to be longer that 9 characters'],
        maxlength: [13, 'Teacher cellphone is very longer']
    },
    temail: {
        type: String,
        required: 'Teacher email is required',
        // unique: true, //! pendiente descomentar
        maxlength: [100, 'Teacher email is very longer'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Teacher email is incorrect type of email']
    },
    tpassword: {
        type:String,
        required:'Teacher password is required',
        minlength:[3, 'Teacher password must be longer that 3 characters'],
    },
    tsubjets: {
        type: String,
        required: 'Teacher subjets is required',
        maxlength: [45, 'Teacher subjets is very longer']
    },
    tcountrybirth: {
        type: String,
        required: 'Teacher countrybirth is required',
        minlength: [3, 'Teacher countrybirth must to be longer that 3 characters'],
        maxlength: [50, 'Teacher countrybirth is very longer']
    },
    tstate: {
        type: String,
        required: 'Teacher state is required',
        minlength: [3, 'Teacher state must to be longer that 3 characters'],
        maxlength: [50, 'Teacher state too long']
    },
    tcity: {
        type: String,
        required: 'Teacher city is required',
        minlength: [3, 'Teacher city must to be longer that 3 characters'],
        maxlength: [50, 'Teacher city too long']
    },
    tstreet: {
        type: String,
        required: 'Teacher street is required',
        minlength: [3, 'Teacher street must to be longer that 3 characters'],
        maxlength: [50, 'Teacher street too long']
    },
    tzip: {
        type: Number,
        required: 'Teacher zip is required',
        min: [5, 'Teacher zip must to be 5 characters']
    },
    tgeolocation: {
        type: String,
        required: 'Teacher geolocation is required',
    },
    tbirthdate: {
        type: String,
        // required: 'Teacher birthdate is required',
    },
    teducation: {
        type: String,
        required: 'Teacher education is required',
        maxlength: [100, 'Teacher education is very longer']
    },
    tprofessionallicense: {
        type: Number,
        required: 'Teacher professional license is required',
        min: [8, 'Teacher professional license must to be 8 characters'],
        // max: [9, 'Teacher professional license is very longer']
    },
    toriginuniversity: {
        type: String,
        required: 'Teacher origin university is required',
        minlength: [10, 'Teacher origin university must to be longer that 10 characters'],
        maxlength: [250, 'Teacher origin university is very longer']
    },
    tdegreestudy: {
        type: String,
        required: 'Teacher degree is required',
        enum: ['licentiate', 'master', 'doctoral']
    },
    tresume: { //! pendiente si va a ser archivo o datos
        type: String,
    },
    tranking: {
        type: Number, //! pediente el tipo de estrellitas
        required: 'Teacher ranking is required',
        min: [1, 'Teacher only can be evaluated (min) 1 to 10'],
        max: [10, 'Teacher only can be evaluated (max) 1 to 10']
    },
    tsalary: {
        type: Number, //! pendiente cambiar a flaot
        required: 'Teacher salary is required',
        // min: [4, 'Teacher salary must to be longer that 4 characters'],
        // max: [5, 'Teacher salary is very longer'] //! pendiente checar el maximo de salario
    },
    tdateadmission: {
        type: String,
        required: 'Teacher date admission is required',
    },
    tdateegress: {
        type: String,
    },
    tcurp: {
        type: String,
        required: 'Teacher curp is required',
        // unique: true, //! pendiente descomentar
        minlength: [18, 'Teacher curp must to be 18 characters'],
        maxlength: [18, 'Teacher curp is very longer']
    },
    trfc: {
        type: String,
        required: 'Teacher rfc is required',
        // unique: true, //! pendiente descomentar
        minlength: [13, 'Teacher rfc must to be 13 characters'],
        maxlength: [13, 'Teacher rfc is very longer']
    },
    timss: {//! Pendiente longitud
        type: String,
        required: 'Teacher imss is required',
        // unique: true, //! pendiente descomentar
        minlength: [5, 'Teacher imss must to be longer that 5 characters'],
        maxlength: [45, 'Teacher imss is very longer']
    },  
    temailverified: {
        type: String,
        required: 'Teacher emailverified is required',
        enum: ['verified', 'waiting']
    },
    tactiveaccount: {
        type: String,
        required: 'Teacher active account is required',
        enum: ['active', 'disabled']
    }
}, { timestamps: true });

TeacherSchema.pre('save', function(next) {
    if (this.isModified('tpassword')) {
        this.tpassword = this._hashPassword(this.tpassword);
        return next();
    }
    return next();
});

TeacherSchema.methods = {
    _hashPassword(tpassword) {
        return hashSync(tpassword);
    },
    _authenticate(tpassword) {
        return compareSync(tpassword, this.tpassword);
    }
};

export default mongoose.model('Teacher', TeacherSchema);