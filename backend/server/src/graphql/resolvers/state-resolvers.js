import State from '../../models/State';

export default {
    getStates: () => State.find({})
}