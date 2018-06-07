import Homework from '../../models/homeworks';
import { requireAuth } from '../../services/auth';

export default {
    getHomework: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Homework.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getHomeworks: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Homework.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createHomework: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Homework.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateHomework: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Homework.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteHomework: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Homework.findByIdAndRemove(_id);
            return {
                message: 'Homework deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}