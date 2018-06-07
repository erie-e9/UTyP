import Subscription from '../../models/subscriptions';
import { requireAuth } from '../../services/auth';

export default {
    getSubscription: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Subscription.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getSubscriptions: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Subscription.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createSubscription: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Subscription.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateSubscription: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Subscription.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteSubscription: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Subscription.findByIdAndRemove(_id);
            return {
                message: 'Subscription deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}