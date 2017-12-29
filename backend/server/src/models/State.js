import mongoose, { Schema } from 'mongoose';

const StateSchema = new Schema({
    text: String
});

export default mongoose.model('State', StateSchema);