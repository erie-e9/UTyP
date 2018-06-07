import MedicalrecordMedicine from '../../models/medicalrecord_medicines';
import { requireAuth } from '../../services/auth';

export default {
    getMedicalrecordMedicine: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordMedicine.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getMedicalrecordMedicines: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordMedicine.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createMedicalrecordMedicine: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordMedicine.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateMedicalrecordMedicine: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return MedicalrecordMedicine.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteMedicalrecordMedicine: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await MedicalrecordMedicine.findByIdAndRemove(_id);
            return {
                message: 'Medical record medicine deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}