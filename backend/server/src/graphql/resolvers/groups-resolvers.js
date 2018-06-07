import Group from '../../models/groups';
import { requireAuth } from '../../services/auth';

export default {
    getGroup: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Group.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getGroups: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Group.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createGroup: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Group.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateGroup: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Group.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteGroup: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Group.findByIdAndRemove(_id);
            return {
                message: 'Group deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}