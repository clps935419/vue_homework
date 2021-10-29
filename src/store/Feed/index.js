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
        //所有貼文
        init(state, data) {
            let newData = data.allUser.map((item) => {
                item.active = false;
                item.isShowComment = false;
                return item;
            });

            state.postArr = newData;
        },
        //按讚+1-1
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
        //評論區增加留言
        addPost(state, data) {
            state.postArr.forEach((item) => {

                if (item.name === data.postUser) {
                    item.comment.push(data);
                }
            });
        },
        //貼文時間排序
        postArrSort(state, data) {
            const sortArr = state.postArr.sort((a, b) => {
                if (data === 'new') {
                    return new Date(b.date) - new Date(a.date);
                } else {
                    return new Date(a.date) - new Date(b.date);
                }
            });
            state.postArr = sortArr;
        },
        //增加貼文
        postArrAdd(state, data) {
            const tmpData = {
                name: 'Leonard',
                infor: 'IOS developer',
                post: data,
                like: '0',
                comment: [],
                img: 'https://source.unsplash.com/user/leonard',
                date: Date.now(),
            };
            state.postArr.unshift(tmpData);
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
        handlePostArrSort(context, data) {
            if (data === '') {
                return;
            }
            context.commit('postArrSort', data);
        },
        handleAddPost(context, data) {
            context.commit('postArrAdd', data);
        },
    },
    getters: {
        postArr(state) {
            return state.postArr;
        },
    },
};
