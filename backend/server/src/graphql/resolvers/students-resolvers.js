import Student from '../../models/students';
import { requireAuth } from '../../services/auth';

export default {
    getStudent: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Student.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getStudents: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Student.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createStudent: async (_, args) => { //* signup student
        try {
            let student = await Student.create(args);
            return {
                token: student._createToken()
            }
        } catch (error) {
            throw error;
        }
    },
    updateStudent: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Student.findByIdAndUpdate(_id, rest, {new:true})
        } catch (error) {
            throw error;
        }
    },
    deleteStudent: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Student.findByIdAndRemove(_id);
            return {
                message: 'Student deleted success!'
            }
        } catch (error) {
            throw error;
        }
    },
    loginStudent: async (_, { semail, spassword }) => {
        const student = await Student.findOne({ semail });

        if(!student) {
            throw new Error('Student not exist');
        }
        if (!student._authenticate(spassword)) {
            throw new Error('Student password not match');
        }

        return student;
    },
    me: async (_, args, { user }) => {
        try {
            const me = await requireAuth(user);
            return me;
        } catch (error) {
            throw error;
        }
    }
}