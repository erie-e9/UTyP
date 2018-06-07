import Device from '../../models/devices';
import { requireAuth } from '../../services/auth';

export default {
    getDevice: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Device.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getDevices: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Device.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createDevice: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Device.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateDevice: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Device.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteDevice: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Device.findByIdAndRemove(_id);
            return {
                message: 'Device deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}