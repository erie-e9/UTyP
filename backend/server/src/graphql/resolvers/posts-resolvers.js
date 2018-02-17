import Post from '../../models/posts';

export default {
    getPost: (_, { _id }) => Post.findById(_id),
    getPosts: () => Post.find({}).sort({ createdAt: -1 }),
    createPost: (_, args) => Post.create(args),
    updatePost: (_, { _id, ...rest }) => Post.findByIdAndUpdate(_id, rest, {new: true}),
    deletePost: async (_, { _id }) => {
        try {
            await Post.findByIdAndRemove(_id);
            return {
                message: 'Post deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}
