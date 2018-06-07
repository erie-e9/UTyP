import Function from '../../models/functions';
import { requireAuth } from '../../services/auth';

export default {
    getFunction: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Function.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getFunctions: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Function.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createFunction: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Function.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateFunction: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Function.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteFunction: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Function.findByIdAndRemove(_id);
            return {
                message: 'Function deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}