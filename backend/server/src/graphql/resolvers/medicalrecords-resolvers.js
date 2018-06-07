import Medicalrecord from '../../models/medicalrecords';
import { requireAuth } from '../../services/auth';

export default {
    getMedicalrecord: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Medicalrecord.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getMedicalrecords: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Medicalrecord.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserMedicalrecords: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Medicalrecord.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createMedicalrecord: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Medicalrecord.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateMedicalrecord: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Medicalrecord.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteMedicalrecord: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Medicalrecord.findByIdAndRemove(_id);
            return {
                message: 'Medicalrecord deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}