import StudentPaymentMethod from '../../models/students_paymentmethods';
import { requireAuth } from '../../services/auth';

export default {
    getStudentPaymentMethod: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return StudentPaymentMethod.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getStudentPaymentMethods: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentPaymentMethod.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createStudentPaymentMethod: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentPaymentMethod.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateStudentPaymentMethod: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return StudentPaymentMethod.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteStudentPaymentMethod: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await StudentPaymentMethod.findByIdAndRemove(_id);
            return {
                message: 'Student payment method deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}