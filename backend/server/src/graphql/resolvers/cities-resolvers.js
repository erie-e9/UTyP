import City from '../../models/cities';
import { requireAuth } from '../../services/auth';

export default {
    getCity: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return City.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getCities: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return City.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createCity: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return City.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateCity: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return City.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteCity: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await City.findByIdAndRemove(_id);
            return {
                message: 'City deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}