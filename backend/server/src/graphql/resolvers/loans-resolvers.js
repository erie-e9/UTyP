import Loan from '../../models/loans';
import { requireAuth } from '../../services/auth';

export default {
    getLoan: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Loan.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getLoans: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Loan.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserLoans: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Loan.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createLoan: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Loan.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateLoan: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Loan.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteLoan: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Loan.findByIdAndRemove(_id);
            return {
                message: 'Loan deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}