import StudentHomework from '../../models/students_homeworks';
import { requireAuth } from '../../services/auth';

export default {
    getStudentHomework: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return StudentHomework.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getStudentHomeworks: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentHomework.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createStudentHomework: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentHomework.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateStudentHomework: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return StudentHomework.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteStudentHomework: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await StudentHomework.findByIdAndRemove(_id);
            return {
                message: 'Student homework deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}