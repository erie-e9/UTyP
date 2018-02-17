import Campus from '../../models/campus';

export default {
    getCampus: (_, { _id }) => Campus.findById(_id),
    getAllCampus: () => Campus.find({}).sort({ createdAt: -1 }),
    createCampus: (_, args) => Campus.create(args),
    updateCampus: (_, { _id, ...rest}) => Campus.findByIdAndUpdate(_id, rest, {new: true}),
    deleteCampus: async (_, { _id } ) => {
        try {
            await Campus.findByIdAndRemove(_id);
            return {
                message: 'Campus deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}