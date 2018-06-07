import Relationship from '../../models/relationships';
import { requireAuth } from '../../services/auth';

export default {
    getRelationship: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Relationship.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getRelationships: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Relationship.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createRelationship: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Relationship.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateRelationship: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Relationship.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteRelationship: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Relationship.findByIdAndRemove(_id);
            return {
                message: 'Relationship deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}