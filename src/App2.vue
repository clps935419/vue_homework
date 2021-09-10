<script>
import Footer from './components/Footer.vue';
import Header from './components/Header.vue';
export default {
    components: {
        Header,
        Footer,
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