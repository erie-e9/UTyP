import Teacher from '../../models/teachers';
import { requireAuth } from '../../services/auth';

export default {
    getTeacher: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Teacher.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getTeachers: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Teacher.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserTeachers: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Teacher.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createTeacher: async (_, args, { user }) => { //* sigup teacher
        try {
            await requireAuth(user);
            return Teacher.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateTeacher: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Teacher.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteTeacher: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Teacher.findByIdAndRemove(_id);
            return {
                message: 'Teacher deleted success!'
            }
        } catch (error) {
            throw error;
        }
    },
    loginTeacher: async (_, { temail, tpassword }) => {
        const teacher = await Teacher.findOne({ temail });

        if (!teacher) {
            throw new Error('Teacher not exist');
        }
        if (!teacher._authenticate(tpassword)) {
            throw new Error('Teacher password not match');
        };

        return teacher;
    }
}