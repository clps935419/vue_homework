import { createStore } from 'vuex'
import state from './state'
import mutations from './mutations';
import actions from './actions';
import getters from './getters';

import Profile from './Profile'
import Feed from './Feed';

export default createStore({
    state,
    mutations,
    actions,
    getters,
    modules: {
        Profile,
        Feed,
    },
});
