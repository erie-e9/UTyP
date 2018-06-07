import Note from '../../models/notes';
import { requireAuth } from '../../services/auth';

export default {
    getNote: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Note.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getNotes: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Note.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createNote: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Note.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateNote: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Note.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteNote: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Note.findByIdAndRemove(_id);
            return {
                message: 'Note deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}