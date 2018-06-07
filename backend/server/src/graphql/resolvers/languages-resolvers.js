import Language from '../../models/languages';
import { requireAuth } from '../../services/auth';

export default {
    getLanguage: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Language.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getLanguages: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Language.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createLanguage: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Language.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateLanguage: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Language.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteLanguage: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Language.findByIdAndRemove(_id);
            return {
                message: 'Language deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}