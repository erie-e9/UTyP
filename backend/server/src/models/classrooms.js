import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const ClassroomSchema = new Schema({
    id_campus: {
        type: String,
        required: 'Classroom id_campus is required'
    },
    clname: {
        type: String,
        required: 'Classroom name is required',
        unique: true,
        minlength: [3, 'Classroom name must be longer that 3 characters'],
        maxlength: [50, 'Classroom name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    clcapacity: {
        type: String,
        required: 'Classroom capacity is required',
        minlength: [3, 'Classroom capacity must be longer that 3 characters'],
        maxlength: [50, 'Classroom capacity is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    clbuilding: {
        type: String,
        required: 'Classroom building is required',
        minlength: [3, 'Classroom building must be longer that 3 characters'],
        maxlength: [50, 'Classroom building is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    clkeyroom: {
        type: String,
        required: 'Classroom keyroom is required',
        unique: true,
        minlength: [3, 'Classroom keyroom must be longer that 3 characters'],
        maxlength: [50, 'Classroom keyroom is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    cloccupied: {
        type: Boolean,
        required: 'Need to know if classroom is occupied',
        default: false
    },
    clisenabled: {
        type: Boolean,
        required: 'Classroom isenabled is required',
        default: false
    },
    clregisteredbyuser: {
        type: String,
        required: 'Classroom registeredbyuser is required'
    },
    clupdatedbyuser: {
        type: String,
    },
    cldeletedbyuser: {
        type: String,
    },
    cldatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Classroom', ClassroomSchema);