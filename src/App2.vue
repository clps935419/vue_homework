<script>
    import {
        onMounted
    } from '@vue/runtime-core';
    import {
        useStore
    } from 'vuex'
    import Footer from './components/Footer.vue';
    import Header from './components/Header.vue';
    export default {
        components: {
            Header,
            Footer,
        },

        setup() {
            const store = useStore();
            const init = () => {
                // store.dispatch('Feed/handleInit').then((res) => {
                //     console.log("--*--*-*",
                //         store.getters['Feed/getUser']
                //     );
                // });
                store.dispatch('getUser');
            }
            onMounted(() => {
                init();
            })
        }
    }
</script>
<template>
    <div class="wrapper">
        <Header />
        <router-view></router-view>
        <Footer />
    </div>

</template>
<style>
    body {
        background: #F7F9FB;
    }
</style>