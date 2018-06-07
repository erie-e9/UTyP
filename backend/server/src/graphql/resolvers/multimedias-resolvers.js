import Multimedia from '../../models/multimedias';
import { requireAuth } from '../../services/auth';

export default {
    getMultimedia: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Multimedia.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getMultimedias: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Multimedia.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createMultimedia: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Multimedia.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateMultimedia: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Multimedia.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteMultimedia: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Multimedia.findByIdAndRemove(_id);
            return {
                message: 'Multimedia deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}