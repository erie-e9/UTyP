import Classroom from '../../models/classrooms';

export default {
    getClassroom: (_, { _id }) => Classroom.findById(_id),
    getClassrooms: () => Classroom.find({}).sort({ createAt: -1 }),
    createClassroom: (_, args) => Classroom.create(args),
    updateClassroom: (_, { _id, ...rest }) => Classroom.findByIdAndUpdate(_id, rest, {new:true}),
    deleteClassroom: async (_, { _id }) => {
        try {
            await Classroom.findByIdAndRemove(_id);
            return {
                message: 'Classroom deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}