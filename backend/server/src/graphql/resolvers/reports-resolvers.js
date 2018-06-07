import Report from '../../models/reports';
import { requireAuth } from '../../services/auth';

export default {
    getReport: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Report.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getReports: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Report.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserReports: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Report.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createReport: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Report.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateReport: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Report.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteReport: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Report.findByIdAndRemove(_id);
            return {
                message: 'Report deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}