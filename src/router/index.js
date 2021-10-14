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
        name: 'profile',
        component: Profile,
    },
    {
        path: '/feed',
        name: 'feed',
        component: Feed,
    },
    {
        path: '/network',
        name: 'network',
        component: Network,
    },
    {
        path: '/jobs',
        name: 'jobs',
        component: Jobs,
    },
    {
        path: '/chats',
        name: 'chats',
        component: Chats,
    },
    {
        path: '/notices',
        name: 'notices',
        component: Notices,
    },
    {
        path: '/:catchAll(.*)',
        component: NotFoundComponent,
        name: 'NotFound',
    },
    
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
