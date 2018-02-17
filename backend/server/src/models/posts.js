import mongoose, { Schema } from 'mongoose';

const PostSchema = new Schema({
    pttext: {
        type: String,
        // maxlength: [1000, 'Post text is very longer']
    },
    ptimage: {
        type: String,
        // maxlength: [1000, 'Post image is very longer']
    }
}, { timestamps: true });

export default mongoose.model('Post', PostSchema);