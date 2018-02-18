import Teacher from '../../models/teachers';

export default {
    getTeacher: (_, { _id }) => Teacher.findById(_id),
    getTeachers: () => Teacher.find({}).sort({ createdAt: -1 }),
    createTeacher: (_, args) => Teacher.create(args), //* sigup teacher
    updateTeacher: (_, { _id, ...rest }) => Teacher.findByIdAndUpdate(_id, rest, {new: true}),
    deleteTeacher: async (_, { _id }) => {
        try {
            await Teacher.findByIdAndRemove(_id);
            return {
                message: 'Teacher deleted success!'
            }
        } catch (error) {
            throw error;
        }
    },
    loginTeacher: async (_, { temail, tpassword }) => {
        const teacher = await Teacher.findOne({ temail });

        if (!teacher) {
            throw new Error('Teacher not exist');
        }
        if (!teacher._authenticate(tpassword)) {
            throw new Error('Teacher password not match');
        };

        return teacher;
    }
}