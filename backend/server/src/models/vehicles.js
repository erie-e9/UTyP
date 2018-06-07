import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const VehicleSchema = new Schema({
    vbrand: {
        type: String,
        required: 'Vehicle brand is required',
        minlength: [3, 'Vehicle brand must be longer that 3 characters'],
        maxlength: [100, 'Vehicle brand is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    vline: {
        type: String,
        required: 'Vehicle line is required',
        minlength: [3, 'Vehicle line must be longer that 3 characters'],
        maxlength: [50, 'Vehicle line is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    vmodel: {
        type: Number,
        required: 'Vehicle model is required',
        min: [4, 'Vehicle model must be longer that 4 characters'],
        max: [4, 'Vehicle model is very longer'],
        validate: [validators.isLength(4, 4), validators.isNumeric()]
    },
    vcolor: {
        type: String,
        required: 'Vehicle color is required',
        minlength: [3, 'Vehicle color must be longer that 3 characters'],
        maxlength: [50, 'Vehicle color is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    vtype: {
        type: String,
        required: 'Vehicle type is required',
        enum: ['car', 'truck', 'motorcycle', 'other']
    },
    vcarriageplate: {
        type: String,
        required: 'Vehicle carriage plate is required',
        minlength: [12, 'Vehicle carriage plate must be longer that 12 characters'],
        maxlength: [12, 'Vehicle carriage plate is very longer'],
        validate: [validators.isLength(12, 12)]
    },
    vcylinders: {
        type: Number,
        required: 'Vehicle cylinders is required',
        min: [1, 'Vehicle cylinders must be longer that 1 character'],
        max: [2, 'Vehicle cylinders is very longer'],
        validate: [validators.isLength(1, 2), validators.isNumeric()]
    },
    vidtable: {
        type: String,
        required: 'Vehicle idtable is required',
        minlength: [3, 'Vehicle idtable must be longer that 3 characters'],
        maxlength: [75, 'Vehicle idtable is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    vtableowner: {
        type: String,
        required: 'Vehicle tableowner is required',
        enum: ['users', 'campus']
    },
    visenabled: {
        type: Boolean,
        required: 'Vehicle isenabled is required',
        default: false
    },
    vregisteredbyuser: {
        type: String,
        required: 'Vehicle registeredbyuser is required'
    },
    vupdatedbyuser: {
        type: String,
    },
    vdeletedbyuser: {
        type: String,
    },
    vdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Vehicle', VehicleSchema);