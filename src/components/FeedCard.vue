<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const postArr = computed(()=>{
            return store.getters['Feed/postArr']
        })
        return{
            postArr
        }
    }
}
</script>
<template>
    <ul>
        <li class="post-card" v-for="item in postArr" :key="item.name">
            <div class="post-card_name">
                {{item.name}}
            </div>
            <div class="post-card_content">
                {{item.post}}
            </div>
            <div class="post-card_like-num">
                {{item.like}}
            </div>
        </li>
    </ul>
</template>
<style lang="scss" scoped>

</style>