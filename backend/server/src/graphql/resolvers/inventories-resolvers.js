import Inventory from '../../models/inventories';
import { requireAuth } from '../../services/auth';

export default {
    getInventory: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Inventory.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getInventories: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Inventory.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createInventory: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Inventory.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateInventory: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Inventory.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteInventory: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Inventory.findByIdAndRemove(_id);
            return {
                message: 'Inventory deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}