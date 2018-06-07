import Employee from '../../models/employees';
import { requireAuth } from '../../services/auth';

export default {
    getEmployee: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Employee.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getEmployees: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Employee.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserEmployees: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Employee.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createEmployee: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Employee.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateEmployee: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Employee.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteEmployee: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Employee.findByIdAndRemove(_id);
            return {
                message: 'Employee deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}