import MedicalrecordDisability from '../../models/medicalrecord_disabilities';
import { requireAuth } from '../../services/auth';

export default {
    getMedicalrecordDisability: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordDisability.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getMedicalrecordDisabilities: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordDisability.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createMedicalrecordDisability: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordDisability.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateMedicalrecordDisability: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordDisability.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteMedicalrecordDisability: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await MedicalrecordDisability.findByIdAndRemove(_id);
            return {
                message: 'Medical record disability deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}