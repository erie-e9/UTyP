import mongoose, { Schema } from 'mongoose';
const validators = require('mongoose-validators');

const NoteSchema = new Schema({
    ntext: {
        type: String,
        required: 'Note text is required',
        minlength: [3, 'Note text must be longer that 3 characters'],
        maxlength: [500, 'Note text is very longer'],
        validate: [validators.isLength(3, 500)]
    },
    nidtable: {
        type: String,
        required: 'Note idtable is required',
        minlength: [3, 'Note idtable must be longer that 3 characters'],
        maxlength: [75, 'Note idtable is very longer'],
        validate: [validators.isLength(3, 75)]
    },
    ntableowner: {
        type: String,
        required: 'Note tableowner is required',
        enum: ['users', 'subjects', 'medicines', 'disease', 'allergies', 'books', 'allies']
    },
    nisenabled: {
        type: Boolean,
        required: 'Note isenabled is required',
        default: false
    },
    nregisteredbyuser: {
        type: String,
        required: 'Note registeredbyuser is required'
    },
    nupdatedbyuser: {
        type: String,
    },
    ndeletedbyuser: {
        type: String,
    },
    ndatedeleted: {
        type: Date,
        validate: [validators.isDate()]        
    },
}, { timestamps: true });

export default mongoose.model('Note', NoteSchema);