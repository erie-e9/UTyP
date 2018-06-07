import File from '../../models/files';
import { requireAuth } from '../../services/auth';

export default {
    getFile: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return File.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getFiles: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return File.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createFile: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return File.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateFile: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return File.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteFile: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await File.findByIdAndRemove(_id);
            return {
                message: 'File deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}