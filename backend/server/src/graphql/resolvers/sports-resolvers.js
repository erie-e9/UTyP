import Sport from '../../models/sports';
import { requireAuth } from '../../services/auth';

export default {
    getSport: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Sport.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getSports: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Sport.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createSport: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Sport.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateSport: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Sport.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteSport: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Sport.findByIdAndRemove(_id);
            return {
                message: 'Sport deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}