import Country from '../../models/countries';
import { requireAuth } from '../../services/auth';

export default {
    getCountry: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Country.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getCountries: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Country.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createCountry: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Country.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateCountry: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Country.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteCountry: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Country.findByIdAndRemove(_id);
            return {
                message: 'Country deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}