import StudentScholarship from '../../models/students_scholarships';
import { requireAuth } from '../../services/auth';

export default {
    getStudentScholarship: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return StudentScholarship.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getStudentScholarships: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentScholarship.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createStudentScholarship: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return StudentScholarship.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateStudentScholarship: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return StudentScholarship.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteStudentScholarship: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await StudentScholarship.findByIdAndRemove(_id);
            return {
                message: 'Student scholarship deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}