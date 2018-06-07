import Department from '../../models/departments';
import { requireAuth } from '../../services/auth';

export default {
    getDepartment: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Department.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getDepartments: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Department.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createDepartment: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Department.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateDepartment: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Department.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteDepartment: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Department.findByIdAndRemove(_id);
            return {
                message: 'Department deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}