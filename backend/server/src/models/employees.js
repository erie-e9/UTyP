import mongoose, { Schema } from 'mongoose';

const EmployeeSchema = new Schema({
    efirstname: {
        type: String,
        required: 'Employee firstname is required',
        minlength: [3, 'Employee firstname must to be longer that 3 characters'],
        maxlength: [50, 'Employee firstname is very longer']
    },
    elastname: {
        type: String,
        minlength: [3, 'Employee lastname must to be longer that 3 characters'],
        maxlength: [50, 'Employee lastname is very longer']
    },
    eavatar: {
        type: String,
        required: 'Employee avatar is required'
    },
    egender: {
        type: String,
        required: 'Employee gender is required',
        enum: ['male', 'female']
    },
    ephone: {
        type: String,
        required: 'Employee phone is required',
        minlength: [9, 'Employee phone must to be longer that 9 characters'],
        maxlength: [13, 'Employee phone is very longer']
    },
    ecellphone: {
        type: String,
        unique: true,
        minlength: [9, 'Employee cellphone must to be longer that 9 characters'],
        maxlength: [13, 'Employee cellphone is very longer']
    },
    eemail: {
        type: String,
        required: 'Employee email is required',
        unique: true,
        maxlength: [100, 'Employee email is very longer'],
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Employee email is incorrect type of email']
    },
    // eaddress: {
    //     type: String,
    //     required: 'Employee address is required',
    //     minlength: [20, 'Employee address must to be longer that 20 characters'],
    //     maxlength: [250, 'Employee address is very longer']
    // },
    ecountrybirth: {
        type: String,
        required: 'Employee countrybirth is required',
        minlength: [3, 'Employee countrybirth must to be longer that 3 characters'],
        maxlength: [25, 'Employee countrybirth too long']
    },
    estate: {
        type: String,
        required: 'Employee state is required',
        minlength: [3, 'Employee state must to be longer that 3 characters'],
        maxlength: [25, 'Employee state too long']
    },
    ecity: {
        type: String,
        required: 'Employee city is required',
        minlength: [3, 'Employee city must to be longer that 3 characters'],
        maxlength: [25, 'Employee city too long']
    },
    estreet: {
        type: String,
        required: 'Employee street is required',
        minlength: [3, 'Employee street must to be longer that 3 characters'],
        maxlength: [25, 'Employee street too long']
    },
    ezip: {
        type: Number,
        required: 'Employee zip is required',
        min: [5, 'Employee zip must to be 5 characters']
    },
    egeolocation: {
        type: String,
        required: 'Employee geolocation is required',
    },
    ebirthdate: {
        type: String,
        // required: 'Employee birthdate is required',
    },
    ecurp: {
        type: String,
        required: 'Employee curp is required',
        unique: true,
        minlength: [18, 'Employee curp must to be 18 characters'],
        maxlength: [18, 'Employee curp is very longer']
    },
    erfc: {
        type: String,
        required: 'Employee rfc is required',
        unique: true,
        minlength: [13, 'Employee rfc must to be 13 characters'],
        maxlength: [13, 'Employee rfc is very longer']
    },
    eimss: {//! Pendiente longitud
        type: String,
        required: 'Employee imss is required',
        unique: true,
        minlength: [5, 'Employee imss must to be longer that 5 characters'],
        maxlength: [45, 'Employee imss is very longer']
    },
    eemailverified: {
        type: String,
        required: 'Employee emailverified is required',
        enum: ['verified', 'waiting']
    },
    eactiveaccount: {
        type: String,
        required: 'Employee active account is required',
        enum: ['active', 'disabled']
    }
}, { timestamps: true });

export default mongoose.model('Employee', EmployeeSchema);