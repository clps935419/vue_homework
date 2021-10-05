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
            let newData = data.allUser.map((item) => {
                item.active = false;
                item.isShowComment = false;
                return item;
            });

            state.postArr = newData;
        },
        addThumb(state, data) {
            state.postArr.forEach((item) => {
                if (item.name === data.name) {
                    if (data.active) {
                        item.like = parseInt(item.like) + 1;
                    } else {
                        item.like = parseInt(item.like) - 1;
                    }
                }
            });
        },
        addPost(state, data) {
            console.log('dadta-',data)
            state.postArr.forEach((item) => {
                console.log('----', item.name, data.postUser);

                if (item.name === data.postUser) {
                    item.comment.push(data);
                    console.warn('it', item.comment);
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
        handleThumbAdd(context, data) {
            context.commit('addThumb', data);
        },
        handlePostContent(context, data) {
            context.commit('addPost', data);
        },
    },
    getters: {
        postArr(state) {
            console.log('getter', state.postArr);
            return state.postArr;
        },
    },
};
