import Ally from '../../models/allies';
import { requireAuth } from '../../services/auth';

export default {
    getAlly: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Ally.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getAllies: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Ally.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createAlly: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Ally.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateAlly: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Ally.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteAlly: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Ally.findByIdAndRemove(_id);
            return {
                message: 'Ally deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}