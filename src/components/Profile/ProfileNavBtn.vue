<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const navList = computed(()=>{
            return store.getters['Profile/getNavList']
        });
        const handleActive = (item,e)=>{
            e.preventDefault()
            store.dispatch('Profile/handleActive',item);
        }
        return{
            navList,
            handleActive
        }
    }
}
</script>
<template>
    <ul class="nav-list-btn">
          <li v-for="item in navList" :key="item.name">
              <a @click="handleActive(item,$event)" href="#" :class="{active:item.isActive}">{{item.name}}</a>
          </li>
    </ul>
</template>
<style lang="scss" scoped>
.nav-list-btn{
    display: flex;
    margin-top: 21px;
    align-items: flex-end;
    >li{
        width: 25%;
    }
    a{
        flex: 1;
        height: 40px;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
        border:#E7E7E7 1px solid;
        color: #181818;
        &.active{
            height: 50px;
            background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%);
            border-radius: 4px 4px 0px 0px;
            color: white;
        }
    }
}
</style>