import Cycle from '../../models/cycles';
import { requireAuth } from '../../services/auth';

export default {
    getCycle: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Cycle.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getCycles: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Cycle.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createCycle: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Cycle.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateCycle: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Cycle.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteCycle: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Cycle.findByIdAndRemove(_id);
            return {
                message: 'Cycle deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}