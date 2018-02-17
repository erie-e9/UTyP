import Carrer from '../../models/carrers';

export default {
    getCarrer: (_, { _id }) => Carrer.findById(_id),
    getCarrers: () => Carrer.find({}).sort({ createdAt: -1 }),
    createCarrer: (_, args) => Carrer.create(args),
    updateCarrer: (_, { _id, ...rest}) => Carrer.findByIdAndUpdate(_id, rest, {new: true}),
    deleteCarrer: async (_, { _id }) => {
        try {
            await Carrer.findByIdAndRemove(_id);
            return {
                message: 'Carrer deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}