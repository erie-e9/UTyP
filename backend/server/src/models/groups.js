import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const GroupSchema = new Schema({
    gname: {
        type: String,
        required: 'Group name is required',
        minlength: [3, 'Group name must be longer that 3 characters'],
        maxlength: [50, 'Group name is very longer'],
        validate: [validators.isLength(3, 50)]
    },
    gisenabled: {
        type: Boolean,
        required: 'Group isenabled is required',
        default: false
    },
    gregisteredbyuser: {
        type: String,
        required: 'Group registeredbyuser is required'
    },
    gupdatedbyuser: {
        type: String,
    },
    gdeletedbyuser: {
        type: String,
    },
    gdatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Group', GroupSchema);