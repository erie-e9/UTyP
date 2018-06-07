import Job from '../../models/jobs';
import { requireAuth } from '../../services/auth';

export default {
    getJob: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Job.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getJobs: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Job.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserJobs: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Job.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createJob: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Job.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateJob: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Job.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteJob: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Job.findByIdAndRemove(_id);
            return {
                message: 'Job deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}