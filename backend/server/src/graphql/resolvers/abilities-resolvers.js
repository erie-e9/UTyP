import Ability from '../../models/abilities';
import { requireAuth } from '../../services/auth';

export default {
    getAbility: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return Ability.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getAbilities: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Ability.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createAbility: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return Ability.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateAbility: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return Ability.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteAbility: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await Ability.findByIdAndRemove(_id);
            return {
                message: 'Ability deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}