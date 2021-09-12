import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import Profile from './Profile'

export default createStore({
    state,
    mutations,
    actions,
    getters,
    modules: {
        Profile,
    },
});
