import Telephoneline from '../../models/telephonelines';
import { requireAuth } from '../../services/auth';

export default {
    getTelephoneline: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Telephoneline.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getTelephonelines: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Telephoneline.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createTelephoneline: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Telephoneline.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateTelephoneline: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Telephoneline.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteTelephoneline: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Telephoneline.findByIdAndRemove(_id);
            return {
                message: 'Telephoneline deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}