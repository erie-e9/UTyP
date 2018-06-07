import Vehicle from '../../models/vehicles';
import { requireAuth } from '../../services/auth';

export default {
    getVehicle: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Vehicle.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getVehicles: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Vehicle.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createVehicle: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Vehicle.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateVehicle: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Vehicle.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteVehicle: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Vehicle.findByIdAndRemove(_id);
            return {
                message: 'Vehicle deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}