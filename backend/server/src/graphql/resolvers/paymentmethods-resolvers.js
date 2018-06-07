import PaymentMethod from '../../models/paymentmethods';
import { requireAuth } from '../../services/auth';

export default {
    getPaymentMethod: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return PaymentMethod.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getPaymentMethods: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return PaymentMethod.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createPaymentMethod: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return PaymentMethod.create(args);
        } catch (error) {
            throw error;
        }
    },
    updatePaymentMethod: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return PaymentMethod.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deletePaymentMethod: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await PaymentMethod.findByIdAndRemove(_id);
            return {
                message: 'PaymentMethod deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}