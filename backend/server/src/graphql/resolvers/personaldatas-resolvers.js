import PersonalData from '../../models/personaldatas';
import { requireAuth } from '../../services/auth';

export default {
    getPersonalData: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return PersonalData.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getPersonalDatas: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return PersonalData.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createPersonalData: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return PersonalData.create(args);
        } catch (error) {
            throw error;
        }
    },
    updatePersonalData: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return PersonalData.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deletePersonalData: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await PersonalData.findByIdAndRemove(_id);
            return {
                message: 'Personal data deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}