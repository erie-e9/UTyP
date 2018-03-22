import mongoose, { Schema } from 'mongoose';

const ClassroomSchema = new Schema({
    cbuilding: {
        type: String,
        required: 'Classroom building is required',
        maxlength: [45, 'Classroom building is very longer']
    },
    ckeyroom: {
        type: String,
        required: 'Classroom key is required',
        maxlength: [25, 'Classroom key is very longer']
    },
    coccupied: {
        type: Boolean,
        required: 'Need to know if classroom is occupied'
    }
}, { timestamps: true });

export default mongoose.model('Classroom', ClassroomSchema);