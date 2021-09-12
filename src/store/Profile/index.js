export default {
    namespaced:true,
    state: {
        peronData: 'sss',
    },
    mutations: {
        setData(state, data) {
            state.peronData = data;
        },
    },
    actions: {
        handleSetData(context, data) {
            console.log('進去');
            context.commit('setData', data);
        },
    },
    getters: {
        getData(state) {
            return state.peronData;
        },
    },
};
