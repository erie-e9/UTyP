import Student from '../../models/students';

export default {
    getStudent: (_, { _id }) => Student.findById(_id),
    getStudents: () => Student.find({}).sort({ createdAt: -1}),
    createStudent: (_, args) => Student.create(args),
    updateStudent: (_, { _id, ...rest }) => Student.findByIdAndUpdate(_id, rest, {new:true}),
    deleteStudent: async (_, { _id }) => {
        try {
            await Student.findByIdAndRemove(_id);
            return {
                message: 'Student deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}