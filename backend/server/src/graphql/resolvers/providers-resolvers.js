import Provider from '../../models/providers';
import { requireAuth } from '../../services/auth';

export default {
    getProvider: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Provider.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getProviders: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Provider.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createProvider: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Provider.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateProvider: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Provider.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteProvider: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Provider.findByIdAndRemove(_id);
            return {
                message: 'Provider deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}