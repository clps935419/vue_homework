export default {
    getUserInit(state, data) {
        state.user = data.user;
    },
    loginAuth(state, data) {
        state.token = data.token;
        sessionStorage.setItem('token',data.token);
    },
};