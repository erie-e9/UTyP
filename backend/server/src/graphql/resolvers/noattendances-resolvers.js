import NoAttendance from '../../models/noattendances';
import { requireAuth } from '../../services/auth';

export default {
    getNoAttendance: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return NoAttendance.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getNoAttendances: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return NoAttendance.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createNoAttendance: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return NoAttendance.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateNoAttendance: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return NoAttendance.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteNoAttendance: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await NoAttendance.findByIdAndRemove(_id);
            return {
                message: 'No attendance deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}