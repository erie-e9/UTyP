import Allergy from '../../models/allergies';
import { requireAuth } from '../../services/auth';

export default {
    getAllergy: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Allergy.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getAllergies: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Allergy.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createAllergy: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Allergy.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateAllergy: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Allergy.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteAllergy: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Allergy.findByIdAndRemove(_id);
            return {
                message: 'Allergy deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}