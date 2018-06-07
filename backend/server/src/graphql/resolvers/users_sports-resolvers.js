import UserSport from '../../models/users_sports';
import { requireAuth } from '../../services/auth';

export default {
    getUserSport: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return UserSport.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getUserSports: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserSport.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserAllSports: async (_, args, { user }) => { // get all sports of one user
        try {
            await requireAuth(user);
            return UserSport.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createUserSport: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserSport.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateUserSport: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return UserSport.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteUserSport: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await UserSport.findByIdAndRemove(_id);
            return {
                message: 'User sport deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}