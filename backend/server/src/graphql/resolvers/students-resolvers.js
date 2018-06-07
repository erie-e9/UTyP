import Student from '../../models/students';
import { requireAuth } from '../../services/auth';

export default {
    getStudent: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Student.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getStudents: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Student.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserStudents: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Student.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createStudent: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Student.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateStudent: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Student.findByIdAndUpdate(_id, rest, {new:true})
        } catch (error) {
            throw error;
        }
    },
    deleteStudent: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Student.findByIdAndRemove(_id);
            return {
                message: 'Student deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}