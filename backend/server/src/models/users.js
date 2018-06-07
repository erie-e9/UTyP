import mongoose, { Schema } from 'mongoose';
import { hashSync, compareSync } from 'bcrypt-nodejs';
import jwt from 'jsonwebtoken';
import constants from '../config/constants';
const validators = require('mongoose-validators');

const UserSchema = new Schema({
    id_campus: {
        type: String,
        required: 'User id_campus is required'
    },
    ufirstname: {
        type: String,
        required: 'User firstname is required',
        minlength:[3, 'User firstname must be longer that 3 characters'],
        maxlength: [50, 'User firstname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('User firstname allows only letters')]
    },
    ufatherlastname: {
        type: String,
        required: 'User father lastname is required',
        minlength:[3, 'User password must be longer that 3 characters'],        
        maxlength: [50, 'User father lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('User father lastname allows only letters')]
    },
    umotherlastname: {
        type: String,
        minlength:[3, 'User mother must be longer that 3 characters'],
        maxlength: [50, 'User mother lastname is very longer'],
        validate: [validators.isLength(3, 50), validators.isAlpha('User mother lastname allows only letters')]
    },
    uavatar: {
        type: String,
        required: 'User avatar is required',
        minlength: [3, 'User avatar must be longer that 3 characters'],
        maxlength: [250,'User avatar is very longer'],
        validate: [validators.isLength(3, 250)]
    },
     uemail: {
        type: String,
        required: 'User email is required',
        unique: true, //! pendiente descomentar
        minlength: [3, 'User email must to be 3 characters'],
        maxlength: [100, 'User email is very longer'],
        validate: [validators.isLength(3, 100), validators.isEmail('User email is incorrect type of email')]
        // match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'User email is incorrect type of email']
    },
    uphone: {
        type: String,
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number'
        },
        minlength: [10, 'User phone number must be longer that 10 characters'],
        maxlength: [14, 'User phone number is very longer']
    },
    ucellphone: {
        type: String,
        required: 'User cellphone is required',
        validate: {
          validator(v) {
            return /\d{3}-\d{3}-\d{4}/.test(v);
          },
          message: '{VALUE} is not a valid phone number'
        },
        minlength: [10, 'User cellphone number must be longer that 10 characters'],
        maxlength: [14, 'User cellphone number is very longer']
    },
    upassword: {
        type: String,
        required: 'User password is required',
        minlength:[3, 'User password must be longer that 3 characters'],
        maxlength: [50, 'User password is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    ubirthdate: {
        type: Date,
        required: 'User birthdate is required',
        validate: [validators.isDate()]
    },
    ugender: {
        type: String,
        required: 'User gender is required',
        enum: ['male', 'female']
    },
    usexualorientation: {
        type: String,
        required: 'User sexual orientation is required',
        enum: ['asexual', 'heterosexual', 'homosexual', 'bisexual', 'transexual', 'pansexual', 'demisexual']
    },
    ueyescolor: {
        type: String,
        required: 'User eyes color is required',
        minlength:[3, 'User eyes color must be longer that 3 characters'],
        maxlength: [50,'User eyes color is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    uskincomplexion: {
        type: String,
        required: 'User skin complexion is required',
        minlength:[3, 'User skin complexion must be longer that 3 characters'],
        maxlength: [50, 'User skin complexion is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    ulocation: {
        type: String,
        required: 'User location is required',
        minlength:[3, 'User location must be longer that 3 characters'],
        maxlength: [50, 'User location is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    ucurp: {
        type: String,
        required: 'User curp is required',
        // unique: true, //! pendiente descomentar
        minlength: [18, 'User curp must to be 18 characters'],
        maxlength: [18, 'User curp is very longer'],
        validate: [validators.isLength(18, 18)]
    },
    urfc: {
        type: String,
        // unique: true, //! pendiente descomentar
        minlength: [13, 'User rfc must be longer that 13 characters'],
        maxlength: [13, 'User rfc is very longer'],
        validate: [validators.isLength(13, 13)]
    },
    upassport: {
        type: String,
        // unique: true, //! pendiente descomentar
        minlength: [20, 'User passport must be longer that 20 characters'],
        maxlength: [20, 'User passport is very longer'],
        validate: [validators.isLength(20, 20)]
    },
    uvisa: {
        type: String,
        // unique: true, //! pendiente descomentar
        minlength: [20, 'User visa must be longer that 20 characters'],
        maxlength: [20, 'User visa is very longer'],
        validate: [validators.isLength(20, 20)]
    },
    ubirthcertificate: {
        type: String,
        required: 'User birthcertificate is required',
        minlength: [3, 'User birthcertificate must be longer that 3 characters'],
        maxlength: [250, 'User birthcertificate is very longer'],
        validate: [validators.isLength(3, 250)]
    },
    uposibilitytravel: {
        type: Boolean,
        required: 'User posibility to travel is required',
        default: false
    },
    uactiveaccount: {
        type: Boolean,
        required: 'User active account is required',
        default: false
    },
    uadmisiondate: {
        type: Date,
        required: 'User admision date is required',
        validate: [validators.isDate()]
    },
    uegressdate: {
        type: Date,
        validate: [validators.isDate()]
    },
     uemailverified: {
        type: Boolean,
        required: 'User emailverified is required',
        default: false
    },
    uisenabled: {
        type: Boolean,
        required: 'User isenabled is required',
        default: false
    },
    uregisteredbyuser: {
        type: String,
        required: 'User registeredbyuser is required'
    },
    uupdatedbyuser: {
        type: String
    },
    udeletedbyuser: {
        type: String
    },
    udatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

UserSchema.pre('save', function(next) {
    if (this.isModified('upassword')) {
        this.upassword = this._hashPassword(this.upassword);
        return next();
    }
    return next();
});

UserSchema.methods = {
    _hashPassword(upassword) {
        return hashSync(upassword);
    },
    _authenticate(upassword) {
        return compareSync(upassword, this.upassword);
    },
    _createToken() {
        return jwt.sign({
            _id: this._id
        },
        constants.JWT_SECRET
        )
    }
};

export default mongoose.model('User', UserSchema);