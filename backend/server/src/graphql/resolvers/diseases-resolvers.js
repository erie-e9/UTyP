import Disease from '../../models/diseases';
import { requireAuth } from '../../services/auth';

export default {
    getDisease: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Disease.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getDiseases: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Disease.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createDisease: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Disease.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateDisease: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Disease.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteDisease: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Disease.findByIdAndRemove(_id);
            return {
                message: 'Disease deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}