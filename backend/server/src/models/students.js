import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';

const StudentSchema = new Schema({
    sfirstname: {
        type: String,
        required: 'Student firstname is required',
        minlength: [3, 'Student firstname must be longer that 3 characters'],
        maxlength: [50, 'Student firstname is very longer']
    },
    slastname: {
        type: String,
        minlength: [3, 'Student lastname must be longer that 3 characters'],
        maxlength: [50, 'Student lastname is very longer']
    },
    savatar: {
        type: String,
        required: 'Student avatar is required',
    },
    sgender: {
        type: String,
        required: 'Student gender is required',
        enum: ['male', 'female']
    },
    sphone: {
        type: String,
        required: 'Student phone is required',
        minlength: [9, 'Student phone must to be longer that 9 characters'],
        maxlength: [13, 'Student phone is very longer']
    },
    scellphone: {
        type: String,
        // unique: true, //! pendiente descomentar
        minlength: [9, 'Student cellphone must to be longer that 9 characters'],
        maxlength: [13, 'Student is very longer']
    },
    semail: {
        type: String,
        required: 'Student email is required',
        // unique: true, //! pendiente descomentar
        maxlength: [100, 'Student email is very longer'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Student email is incorrect type of email']
    },
    spassword: {
        type:String,
        required:'Student password is required',
        minlength:[3, 'Student password must be longer that 3 characters'],
    },
    scountrybirth: {
        type: String,
        required: 'Student countrybirth is required',
        minlength: [3, 'Student countrybirth must to be longer that 3 characters'],
        maxlength: [50, 'Student countrybirth is very longer']
    },
    sstate: {
        type: String,
        required: 'Student state is required',
        minlength: [3, 'Student state must to be longer that 3 characters'],
        maxlength: [50, 'Student state too long']
    },
    scity: {
        type: String,
        required: 'Student city is required',
        minlength: [3, 'Student city must to be longer that 3 characters'],
        maxlength: [50, 'Student city too long']
    },
    sstreet: {
        type: String,
        required: 'Student street is required',
        minlength: [3, 'Student street must to be longer that 3 characters'],
        maxlength: [50, 'Student street too long']
    },
    szip: {
        type: Number,
        required: 'Student zip is required',
        min: [5, 'Student zip must to be 5 characters']
    },
    sgeolocation: {
        type: String,
        required: 'Student geolocation is required',
    },
    sbirthdate: {
        type: String,
        required: 'Student birthdate is required',
    },
    slasthighschool: {
        type: String,
        required: 'Student last highschool is required',
        maxlength: [45, 'Student last highschool is very longer']
    },
    senrollment: {
        type: String,
        required: 'Student enrollment is required',
        // unique: true, //! pendiente descomentar
        minlength: [10, 'Student enrollment must to be 10 characters'],
        maxlength: [10, 'Student enrollment is very longer']
    },
    scurrentoccupation: {
        type: String,
        required: 'Student occupation is required',
        enum: ['student', 'worker', 'student-worker', 'graduated']
    },
    sranking: {
        type: Number, //! pediente el tipo de estrellitas
        required: 'Student ranking is required',
        min: [1, 'Student only can be evaluated 1 to 10'],
        max: [10, 'Student only can be evaluated 1 to 10']
    },
    sresume: { //! pendiente si va a ser archivo o datos
        type: String,
        // unique: true, //! pendiente descomentar
    },
    sdateadmission: {
        type: String,
        required: 'Student date admission is required',
    },
    sdateegress: {
        type: String,
    },
    scurp: {
        type: String,
        required: 'Student curp is required',
        // unique: true, //! pendiente descomentar
        minlength: [18, 'Student curp must to be 18 characters'],
        maxlength: [18, 'Student curp is very longer']
    },
    srfc: {
        type: String,
        required: 'Student rfc is required',
        // unique: true, //! pendiente descomentar
        minlength: [13, 'Student rfc must be longer that 13 characters'],
        maxlength: [13, 'Student rfc is very longer']
    },
    simss: {//! Pendiente longitud
        type: String,
        required: 'Student imss is required',
        // unique: true, //! pendiente descomentar
        minlength: [5, 'Student imss must be longer that 5 characters'],
        maxlength: [45, 'Student imss is very longer']
    },
    semailverified: {
        type: String,
        required: 'Student emailverified is required',
        enum: ['verified', 'waiting']
    },
    sactiveaccount: {
        type: String,
        required: 'Student active account is required',
        enum: ['active', 'disabled']
    }
}, { timestamps: true });

StudentSchema.pre('save', function(next) {
    if (this.isModified('spassword')) {
        this.spassword = this._hashPassword(this.spassword);
        return next();
    }
    return next();
});

StudentSchema.methods = {
    _hashPassword(spassword) {
        return hashSync(spassword);
    },
    _authenticate(spassword) {
        return compareSync(spassword, this.spassword);
    }
};

export default mongoose.model('Student', StudentSchema);