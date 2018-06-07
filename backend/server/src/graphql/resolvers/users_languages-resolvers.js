import UserLanguage from '../../models/users_languages';
import { requireAuth } from '../../services/auth';

export default {
    getUserLanguage: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return UserLanguage.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getUserLanguages: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserLanguage.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserAllLanguages: async (_, args, { user }) => { // get all languages of one user
        try {
            await requireAuth(user);
            return UserLanguage.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createUserLanguage: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserLanguage.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateUserLanguage: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return UserLanguage.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteUserLanguage: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await UserLanguage.findByIdAndRemove(_id);
            return {
                message: 'User language deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}