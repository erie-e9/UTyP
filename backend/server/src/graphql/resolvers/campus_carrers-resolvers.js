import CampusCarrer from '../../models/campus_carrers';
import { requireAuth } from '../../services/auth';

export default {
    getCampusCarrer: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return CampusCarrer.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getCampusCarrers: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return CampusCarrer.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createCampusCarrer: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return CampusCarrer.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateCampusCarrer: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return CampusCarrer.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteCampusCarrer: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await CampusCarrer.findByIdAndRemove(_id);
            return {
                message: 'Campus carrer deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}