import UserAbility from '../../models/users_abilities';
import { requireAuth } from '../../services/auth';

export default {
    getUserAbility: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            return UserAbility.findById(_id);
        } catch (error) {
            throw error;
        }
    },
    getUserAbilities: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserAbility.find({}).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    getUserAllAbilities: async (_, args, { user }) => { // get all abilities of one user
        try {
            await requireAuth(user);
            return UserAbility.find({ user: user._id }).sort({ createdAt: -1 });
        } catch (error) {
            throw error;
        }
    },
    createUserAbility: async (_, args, { user }) => {
        try {
            await requireAuth(user);
            return UserAbility.create(args);
        } catch (error) {
            throw error;
        }
    },
    updateUserAbility: async (_, { _id, ...rest }, { user }) => {
        try {
            await requireAuth(user);
            return UserAbility.findByIdAndUpdate(_id, rest, {new: true});
        } catch (error) {
            throw error;
        }
    },
    deleteUserAbility: async (_, { _id }, { user }) => {
        try {
            await requireAuth(user);
            await UserAbility.findByIdAndRemove(_id);
            return {
                message: 'User ability deleted success!'
            }
        } catch (error) {
            throw error;
        }
    }
}