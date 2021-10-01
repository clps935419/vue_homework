import axios from "axios";
export default {
    namespaced: true,
    state: {
        user: {
            name: 'aaa',
            group: [],
        },
        postArr: [],
    },
    mutations: {
        init(state, data) {
            state.postArr = data.allUser;
            console.log('state.postArr', state.postArr);
        },
    },
    actions: {
        handleInit(context, data) {
            return axios
                .get('/api/my_api/feed_json.json')
                .then(function(response) {
                    console.log('res', response);
                    // handle success
                    context.commit('init', response.data);
                    return response.data;
                });
        },
    },
    getters: {
        postArr(state) {
            console.log('getter', state.postArr);
            return state.postArr;
        },
    },
};
