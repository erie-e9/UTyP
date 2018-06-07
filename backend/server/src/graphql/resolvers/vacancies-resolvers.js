import Vacancy from '../../models/vacancies';
import { requireAuth } from '../../services/auth';

export default {
    getVacancy: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Vacancy.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getVacancies: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Vacancy.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createVacancy: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Vacancy.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateVacancy: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Vacancy.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteVacancy: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Vacancy.findByIdAndRemove(_id);
            return {
                message: 'Vacancy deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}