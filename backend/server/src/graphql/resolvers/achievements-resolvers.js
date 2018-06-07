import Achievement from '../../models/achievements';
import { requireAuth } from '../../services/auth';

export default {
    getAchievement: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Achievement.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getAchievements: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Achievement.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createAchievement: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Achievement.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateAchievement: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Achievement.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteAchievement: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Achievement.findByIdAndRemove(_id);
            return {
                message: 'Achievement deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}