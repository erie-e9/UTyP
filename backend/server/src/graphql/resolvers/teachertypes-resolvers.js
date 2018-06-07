import TeacherType from '../../models/teachertypes';
import { requireAuth } from '../../services/auth';

export default {
    getTeacherType: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return TeacherType.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getTeacherTypes: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return TeacherType.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createTeacherType: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return TeacherType.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateTeacherType: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return TeacherType.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteTeacherType: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await TeacherType.findByIdAndRemove(_id);
            return {
                message: 'Teacher type deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}