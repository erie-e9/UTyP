import Familiar from '../../models/familiars';
import { requireAuth } from '../../services/auth';

export default {
    getFamiliar: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Familiar.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getFamiliars: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Familiar.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserFamiliars: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Familiar.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createFamiliar: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Familiar.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateFamiliar: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Familiar.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteFamiliar: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Familiar.findByIdAndRemove(_id);
            return {
                message: 'Familiar deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}