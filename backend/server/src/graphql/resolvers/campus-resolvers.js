import Campus from '../../models/campus';
import { requireAuth } from '../../services/auth';

export default {
    getCampus: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Campus.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getAllCampus: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Campus.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createCampus: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Campus.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateCampus: async (_, { _id, ...rest}, { user }) => {
        try {
            await requireAuth(user);
            return Campus.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteCampus: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Campus.findByIdAndRemove(_id);
            return {
                message: 'Campus deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}