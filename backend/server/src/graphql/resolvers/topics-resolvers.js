import Topic from '../../models/topics';
import { requireAuth } from '../../services/auth';

export default {
    getTopic: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Topic.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getTopics: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Topic.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createTopic: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Topic.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateTopic: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Topic.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteTopic: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Topic.findByIdAndRemove(_id);
            return {
                message: 'Topic deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}