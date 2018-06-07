import Unity from '../../models/unities';
import { requireAuth } from '../../services/auth';

export default {
    getUnity: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Unity.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getUnities: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Unity.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createUnity: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Unity.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateUnity: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Unity.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteUnity: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Unity.findByIdAndRemove(_id);
            return {
                message: 'Unity deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}