import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const DeviceSchema = new Schema({
    deserialnumber: {
        type: String,
        required: 'Device serial number is required',
        minlength: [3, 'Device serial number must be longer that 3 characters'],
        maxlength: [25, 'Device serial number is very longer'],
        validate: [validators.isLength(3, 25)]
    },
    detype: {
        type: String, //! pendiente revisar si crear otra tabla o un enum
        required: 'Device type is required',
        minlength: [3, 'Device type must be longer that 3 characters'],
        maxlength: [50, 'Device type is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    deinventorydate: {
        type: String,
        required: 'Device inventory date is required',
        minlength: [3, 'Device inventory date must be longer that 3 characters'],
        maxlength: [50, 'Device inventory date is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    deinventorystate: {
        type: String,
        required: 'Device inventory state is required',
        minlength: [3, 'Device inventory state must be longer that 3 characters'],
        maxlength: [50, 'Device inventory state is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    dehostname: {
        type: String,
        required: 'Device hostname is required',
        minlength: [3, 'Device hostname must be longer that 3 characters'],
        maxlength: [50, 'Device hostname is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    deipaddress: { //! pendiente checar tipo y min-max
        type: String,
        required: 'Device ip address is required',
        minlength: [3, 'Device ip address must be longer that 3 characters'],
        maxlength: [50, 'Device ip address is very longer'],
        validate: [validators.isLength(3, 50), validators.isIP()]
    },
    deoperatingsystem: {
        type: String,
        required: 'Device operating system is required',
        minlength: [3, 'Device operating system must be longer that 3 characters'],
        maxlength: [100, 'Device operating system is very longer'],
        validate: [validators.isLength(3, 100)]
    },
    deparentdeviceid: {
        type: String,
        required: 'Device parent device id is required',
        minlength: [3, 'Device parent device id must be longer that 3 characters'],
        maxlength: [50, 'Device parent device id is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    delocation: {
        type: String,
        required: 'Device location is required',
        minlength: [3, 'Device location must be longer that 3 characters'],
        maxlength: [50, 'Device location is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    deisenabled: {
        type: Boolean,
        required: 'Device isenabled is required',
        default: false
    },
    deregisteredbyuser: {
        type: String,
        required: 'Device registeredbyuser is required'
    },
    deupdatedbyuser: {
        type: String,
    },
    dedeletedbyuser: {
        type: String,
    },
    dedatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Device', DeviceSchema);