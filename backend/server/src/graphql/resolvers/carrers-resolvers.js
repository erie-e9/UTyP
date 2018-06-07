import Carrer from '../../models/carrers';
import { requireAuth } from '../../services/auth';

export default {
    getCarrer: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Carrer.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getCarrers: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Carrer.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createCarrer: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Carrer.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateCarrer: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Carrer.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteCarrer: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Carrer.findByIdAndRemove(_id);
            return {
                message: 'Carrer deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}