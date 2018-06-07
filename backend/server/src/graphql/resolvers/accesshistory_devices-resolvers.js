import AccesshistoryDevice from '../../models/accesshistory_devices';
import { requireAuth } from '../../services/auth';

export default {
    getAccesshistoryDevice: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return AccesshistoryDevice.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getAccesshistoryDevices: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return AccesshistoryDevice.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserAccesshistoryDevices: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return AccesshistoryDevice.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createAccesshistoryDevice: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return AccesshistoryDevice.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateAccesshistoryDevice: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return AccesshistoryDevice.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteAccesshistoryDevice: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await AccesshistoryDevice.findByIdAndRemove(_id);
            return {
                message: 'Access history device deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}