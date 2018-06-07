import UserAchievement from '../../models/users_achievements';
import { requireAuth } from '../../services/auth';

export default {
    getUserAchievement: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return UserAchievement.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getUserAchievements: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserAchievement.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserAllAchievements: async (_, args, { user }) => { // get all achievements of one user
        try {
            await requireAuth(user);
            return UserAchievement.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createUserAchievement: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserAchievement.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateUserAchievement: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return UserAchievement.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteUserAchievement: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await UserAchievement.findByIdAndRemove(_id);
            return {
                message: 'User achievement deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}