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
        addThumb(state, data) {
            console.warn('data',data.active);
            state.postArr.forEach((item) => {
                if(item.name === data.name){
                    if(data.active){
                        item.like = parseInt(item.like) + 1;
                    }else{
                        item.like = parseInt(item.like) - 1;
                    }
                }
            });
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
        handleThumbAdd(context,data) {
            context.commit('addThumb', data);
        },
    },
    getters: {
        postArr(state) {
            console.log('getter', state.postArr);
            return state.postArr;
        },
    },
};
