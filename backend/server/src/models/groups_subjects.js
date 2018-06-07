import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const GroupSubjectSchema = new Schema({
    id_group: {
        type: String,
        required: 'Group subject id_group is required'
    },
    id_subject: {
        type: String,
        required: 'Group subject id_subject is required'
    },
    gsisenabled: {
        type: Boolean,
        required: 'Group subject isenabled is required',
        default: false
    },
    gsregisteredbyuser: {
        type: String,
        required: 'Group subject registeredbyuser is required'
    },
    gsupdatedbyuser: {
        type: String,
    },
    gsdeletedbyuser: {
        type: String,
    },
    gsdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('GroupSubject', GroupSubjectSchema);