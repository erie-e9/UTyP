import Service from '../../models/services';
import { requireAuth } from '../../services/auth';

export default {
    getService: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Service.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getServices: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Service.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createService: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Service.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateService: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Service.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteService: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Service.findByIdAndRemove(_id);
            return {
                message: 'Service deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}