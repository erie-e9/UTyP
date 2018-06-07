import Medicine from '../../models/medicines';
import { requireAuth } from '../../services/auth';

export default {
    getMedicine: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Medicine.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getMedicines: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Medicine.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createMedicine: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Medicine.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateMedicine: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Medicine.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteMedicine: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Medicine.findByIdAndRemove(_id);
            return {
                message: 'Medicine deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}