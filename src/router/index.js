import { createRouter, createWebHistory } from 'vue-router'
import Profile from '@/views/Profile.vue';
import Feed from '@/views/Feed.vue';
import Network from '@/views/Network.vue';
import Jobs from '@/views/Jobs.vue';
import Chats from '@/views/Chats.vue';
import Notices from '@/views/Notices.vue';
import NotFoundComponent from '@/views/NotFoundComponent.vue';
const routes = [
    {
        path: '/', //代表首頁
        name: 'Feed',
        component: Feed,
    },
    {
        path: '/Network',
        name: 'Network',
        component: Network,
    },
    {
        path: '/Jobs',
        name: 'Jobs',
        component: Jobs,
    },
    {
        path: '/Chats',
        name: 'Chats',
        component: Chats,
    },
    {
        path: '/Chats',
        name: 'Chats',
        component: Chats,
    },
    {
        path: '/Notices',
        name: 'Notices',
        component: Notices,
    },
    {
        path: '/:catchAll(.*)',
        component: NotFoundComponent,
        name: 'NotFound',
    },
    // {
    //     path: '/Feed',
    //     name: 'Feed',
    //     component: Feed,
    // },
    // {
    //     path: '/about',
    //     name: 'About',
    //     // route level code-splitting
    //     // this generates a separate chunk (about.[hash].js) for this route
    //     // which is lazy-loaded when the route is visited.
    //     component: () =>
    //         import(/* webpackChunkName: "about" */ '../views/About.vue'),
    // },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
