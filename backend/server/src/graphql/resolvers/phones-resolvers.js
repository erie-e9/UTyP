import Phone from '../../models/phones';
import { requireAuth } from '../../services/auth';

export default {
    getPhone: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Phone.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getPhones: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Phone.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createPhone: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Phone.create(args);
        } catch (error) {
            throw error;
        }
    },
    updatePhone: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Phone.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deletePhone: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Phone.findByIdAndRemove(_id);
            return {
                message: 'Phone deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}