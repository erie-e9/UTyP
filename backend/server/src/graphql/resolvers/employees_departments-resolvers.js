import EmployeeDepartment from '../../models/employees_departments';
import { requireAuth } from '../../services/auth';

export default {
    getEmployeeDepartment: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return EmployeeDepartment.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getEmployeeDepartments: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return EmployeeDepartment.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createEmployeeDepartment: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return EmployeeDepartment.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateEmployeeDepartment: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return EmployeeDepartment.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteEmployeeDepartment: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await EmployeeDepartment.findByIdAndRemove(_id);
            return {
                message: 'Employee department deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}