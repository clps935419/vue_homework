<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const userObj = computed(()=>{
            return store.getters['getUser']
        })
        return{
            userObj
        }
    }
    

}
</script>
<template>
  <div class="feed-person-card">
      <div class="feed-person-card_bg" :style="{'background-image':`url(${userObj.backgroundImg})`}"></div>
      <div class="feed-person-card_img">
        <img :src="userObj.img" alt="">
      </div>
      <div class="feed-person-card_name">
          {{userObj.name}}
      </div>
      <div class="feed-person-card_infor">
          {{userObj.intro}}
      </div>
  </div>
</template>
<style lang="scss" scoped>
.feed-person-card{
    display: flex;
    flex-direction: column;
    align-items: center;
    background: #FFFFFF;
    border-radius: 4px;
    margin-bottom: 20px;
    &_bg{
        width: 100%;
        height: 120px;
        background-position: center;
        background-size: cover;
    }
    &_img{
        width: 110px;
        height: 110px;
        border-radius: 50%;
        background: white;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: -55px;
        img{
            width: 100px;
            height: 100px;
            border-radius: 50%;
        }
    }
    &_name{
        font-family: Gotham Pro;
        font-size: 14px;
        line-height: 13px;
        color: #181818;
        font-weight: bolder;
        margin-bottom: 10px;
    }
    &_infor{
        padding-bottom: 26px;
    }

}
</style>