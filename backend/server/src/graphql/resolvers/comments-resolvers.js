import Comment from '../../models/comments';
import { requireAuth } from '../../services/auth';

export default {
    getComment: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Comment.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getComments: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Comment.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createComment: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Comment.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateComment: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Comment.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteComment: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Comment.findByIdAndRemove(_id);
            return {
                message: 'Comment deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}