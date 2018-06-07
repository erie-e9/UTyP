import State from '../../models/states';
import { requireAuth } from '../../services/auth';

export default {
    getState: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return State.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getStates: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return State.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createState: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return State.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateState: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return State.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteState: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await State.findByIdAndRemove(_id);
            return {
                message: 'State deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}