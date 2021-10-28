export default {
    namespaced: true,
    state: {
        peronData: 'sss',
        navList: [
            {
                name: 'Profile',
                isActive: true,
                data: [],
            },
            {
                name: 'Activity & interests',
                isActive: false,
                data: [],
            },
            {
                name: 'Articles',
                isActive: false,
                data: [],
            },
        ],
    },
    mutations: {
        setActive(state, data) {
            state.navList = state.navList.map((item)=>{
                item.isActive = false;
                console.log('data',data.name,item.name)
                if(item.name === data.name){
                    item.isActive = true;
                }
                return item;
            }); 
        },
    },
    actions: {
        handleActive(context, data) {
            //選單按鈕顯示
            context.commit('setActive', data);
        },
    },
    getters: {
        getNavList(state) {
            console.log('**', state.navList);
            return state.navList;
        },
    },
};
