export default {
    namespaced: true,
    state: {
        peronData: '',
        navList: [
            {
                name: 'Profile',
                isActive: true,
                data: [
                    {
                        name: 'about',
                        content: 'about-content',
                    },
                    {
                        name: 'project',
                        content: [
                            {
                                img: 'https://source.unsplash.com/random',
                                title: 'Zara redesign concept',
                                subTitle: 'UX/UI design, 15.07.2019',
                            },
                            {
                                img: 'https://source.unsplash.com/random',
                                title: 'SCTHON event brand identity',
                                subTitle: 'Graphic design, 03.31.2019',
                            },
                            {
                                img: 'https://source.unsplash.com/random',
                                title: 'Drozd. Brand identity. 2016',
                                subTitle: 'Graphic design, 03.04.2016',
                            },
                        ],
                    },
                ],
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
            state.navList = state.navList.map((item) => {
                item.isActive = false;
                console.log('data', data.name, item.name);
                if (item.name === data.name) {
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
        getNavListContent(state) {
            const showList = state.navList.filter((item) => {
                return item.isActive === true;
            });
            return showList[0].data;
        },
    },
};
