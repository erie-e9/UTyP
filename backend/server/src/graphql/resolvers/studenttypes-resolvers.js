import StudentType from '../../models/studenttypes';
import { requireAuth } from '../../services/auth';

export default {
    getStudentType: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return StudentType.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getStudentTypes: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentType.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createStudentType: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentType.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateStudentType: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return StudentType.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteStudentType: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await StudentType.findByIdAndRemove(_id);
            return {
                message: 'Student type deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}