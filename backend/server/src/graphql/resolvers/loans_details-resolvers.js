import LoanDetail from '../../models/loans_details';
import { requireAuth } from '../../services/auth';

export default {
    getLoanDetail: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return LoanDetail.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getLoanDetails: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return LoanDetail.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createLoanDetail: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return LoanDetail.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateLoanDetail: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return LoanDetail.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteLoanDetail: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await LoanDetail.findByIdAndRemove(_id);
            return {
                message: 'Loan detail deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}