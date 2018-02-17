import mongoose, { Schema } from 'mongoose';

const CarrerSchema = new Schema({
    caname: {
        type: String,
        required: 'Carrer name is required',
        unique: true,
        maxlength: [45, 'Carrer name is very longer']
    },
    calogo: {
        type: String,
        required: 'Carrer logo is required'
    },
    casubjets: {
        type: String,
        required: 'Carrer subjets is required',
        maxlength: [45, 'Carrer subjets is very longer']
    },
    cacode: {
        type: String,
        required: 'Carrer code is required',
        unique: true,
        minlength: [3, 'Carrer code must to be longer that 3 characters']
    },
}, { timestamps: true });

export default mongoose.model('Carrer', CarrerSchema);