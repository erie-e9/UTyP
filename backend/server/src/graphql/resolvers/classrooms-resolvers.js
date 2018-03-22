import Classroom from '../../models/classrooms';
import { requireAuth } from '../../services/auth';

export default {
    getClassroom: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Classroom.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getClassrooms: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Classroom.find({}).sort({ createAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createClassroom: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Classroom.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateClassroom: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Classroom.findByIdAndUpdate(_id, rest, {new:true});
        } catch (error) {
            throw error;
        }
    },
    deleteClassroom: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Classroom.findByIdAndRemove(_id);
            return {
                message: 'Classroom deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}