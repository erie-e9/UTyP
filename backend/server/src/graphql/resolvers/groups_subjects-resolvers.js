import GroupSubject from '../../models/groups_subjects';
import { requireAuth } from '../../services/auth';

export default {
    getGroupSubject: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return GroupSubject.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getGroupSubjects: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return GroupSubject.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createGroupSubject: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return GroupSubject.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateGroupSubject: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return GroupSubject.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteGroupSubject: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await GroupSubject.findByIdAndRemove(_id);
            return {
                message: 'Group subject deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}