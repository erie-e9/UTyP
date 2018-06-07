import Subject from '../../models/subjects';
import { requireAuth } from '../../services/auth';

export default {
    getSubject: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Subject.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getSubjects: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Subject.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createSubject: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Subject.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateSubject: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Subject.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteSubject: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Subject.findByIdAndRemove(_id);
            return {
                message: 'Subject deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}