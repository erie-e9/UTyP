import Scholarship from '../../models/scholarships';
import { requireAuth } from '../../services/auth';

export default {
    getScholarship: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Scholarship.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getScholarships: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Scholarship.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createScholarship: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Scholarship.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateScholarship: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Scholarship.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteScholarship: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Scholarship.findByIdAndRemove(_id);
            return {
                message: 'Scholarship deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}