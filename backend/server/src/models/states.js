import mongoose, { Schema } from 'mongoose';

const StateSchema = new Schema({
    text: String
}, {timestamps: true});

export default mongoose.model('State', StateSchema);