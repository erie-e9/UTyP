import TeacherSubject from '../../models/teachers_subjects';
import { requireAuth } from '../../services/auth';

export default {
    getTeacherSubject: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return TeacherSubject.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getTeacherSubjects: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return TeacherSubject.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createTeacherSubject: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return TeacherSubject.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateTeacherSubject: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return TeacherSubject.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteTeacherSubject: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await TeacherSubject.findByIdAndRemove(_id);
            return {
                message: 'Teacher subject deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}