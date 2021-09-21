export default {
    getUserInit(state, data) {
        state.user = data.user;
        console.log('user------', state.user);
    },
};