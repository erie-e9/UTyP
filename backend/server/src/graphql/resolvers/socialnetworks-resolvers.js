import SocialNetwork from '../../models/socialnetworks';
import { requireAuth } from '../../services/auth';

export default {
    getSocialNetwork: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return SocialNetwork.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getSocialNetworks: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return SocialNetwork.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createSocialNetwork: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return SocialNetwork.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateSocialNetwork: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return SocialNetwork.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteSocialNetwork: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await SocialNetwork.findByIdAndRemove(_id);
            return {
                message: 'Social network deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}