<script>
import { onMounted } from '@vue/runtime-core';
import { useStore } from 'vuex'
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default {
    components: {
        Header,
        Footer,
    },
    setup(){
        const store = useStore();
        onMounted(()=>{
            console.log('-**-',store.getters['Profile/getData'])
            store.dispatch('Profile/handleSetData','aaaaaa');
            console.log('--',store.getters['Profile/getData'])
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
body{
    background: #F7F9FB;
}
</style>