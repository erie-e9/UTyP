import Book from '../../models/books';
import { requireAuth } from '../../services/auth';

export default {
    getBook: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Book.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getBooks: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Book.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createBook: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Book.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateBook: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Book.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteBook: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Book.findByIdAndRemove(_id);
            return {
                message: 'Book deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}