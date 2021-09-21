import axios from "axios";
export default {
    namespaced:true,
    state: {
        user:{
            name:'aaa'
        },
    },
    mutations: {
        init(state, data) {
            state.user = data.user;
            console.log('user',state.user)
        },
    },
    actions: {
        handleInit(context, data) {
            return axios.get('/api/my_api/my_json.json').then(function(response) {
                // handle success
                context.commit('init', response.data);
                return response.data;
            });
        },
    },
    getters: {
        getUser(state) {
            console.log('get',state.user)
            return state.user;
        },
    },
};
