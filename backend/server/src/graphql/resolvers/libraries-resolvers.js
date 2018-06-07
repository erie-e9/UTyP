import Library from '../../models/libraries';
import { requireAuth } from '../../services/auth';

export default {
    getLibrary: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Library.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getLibraries: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Library.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createLibrary: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Library.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateLibrary: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Library.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteLibrary: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Library.findByIdAndRemove(_id);
            return {
                message: 'Library deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}