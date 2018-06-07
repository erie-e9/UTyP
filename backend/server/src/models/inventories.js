import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const InventorySchema = new Schema({
    id_department: {
        type: String,
        required: 'Inventory id_department is required'
    },
    id_employee: {
        type: String,
        required: 'Inventory id_employee is required'
    },
    indate: {
        type: Date,
        required: 'Inventory date is required',
        validate: [validators.isDate()]
    },
    inisenabled: {
        type: Boolean,
        required: 'Inventory isenabled is required',
        default: false
    },
    inregisteredbyuser: {
        type: String,
        required: 'Inventory registeredbyuser is required'
    },
    inupdatedbyuser: {
        type: String,
    },
    indeletedbyuser: {
        type: String,
    },
    indatedeleted: {
        type: Date,
        validate: [validators.isDate()]
    },
}, { timestamps: true });

export default mongoose.model('Inventory', InventorySchema);