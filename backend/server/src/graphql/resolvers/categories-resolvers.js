import Category from '../../models/categories';
import { requireAuth } from '../../services/auth';

export default {
    getCategory: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Category.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getCategories: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Category.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createCategory: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Category.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateCategory: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Category.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteCategory: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Category.findByIdAndRemove(_id);
            return {
                message: 'Category deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}