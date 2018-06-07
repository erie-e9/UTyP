import Address from '../../models/addresses';
import { requireAuth } from '../../services/auth';

export default {
    getAddress: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Address.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getAddresses: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Address.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createAddress: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Address.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateAddress: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Address.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteAddress: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Address.findByIdAndRemove(_id);
            return {
                message: 'Address deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}