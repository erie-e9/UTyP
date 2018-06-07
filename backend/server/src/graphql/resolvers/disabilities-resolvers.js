import Disability from '../../models/disabilities';
import { requireAuth } from '../../services/auth';

export default {
    getDisability: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Disability.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getDisabilities: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Disability.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createDisability: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Disability.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateDisability: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Disability.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteDisability: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Disability.findByIdAndRemove(_id);
            return {
                message: 'Disability deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}