
<script>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import FeedCard from '@/components/FeedCard.vue'
export default {
  components: {
    FeedCard
  },
  setup(){
    const store = useStore();
    const userObj = computed(()=>{
      return store.getters['getUser']
    })
    const init = ()=>{
      store.dispatch('Feed/handleInit').then((res)=>{
        console.log('結果--')
        console.log('結果',store.getters['Feed/postArr'])
      });
    }
    onMounted(()=>{
      init();
    })
    return{
      userObj
    }
  }
}
</script>
<template>
  <h1>Feed</h1>
  <div class="content">
    <div class="left-area">
      <div class="left-area_post-area">
        <div class="left-area_post-title">New post</div>
        <input type="text" placeholder="What's on ur mind" >
      </div>
      <div class="left-area_sort-ele">
        <div class="left-area_sort-hr"></div>
        <div class="left-area_sort-content">sort by <select name="" id=""></select></div>
        <div class="left-area_sort-hr"></div>
      </div>
      <FeedCard/>

    </div>
    <div class="right-area">
      <h1>{{userObj.name}}</h1>
    </div>
  </div>
  
</template>

<style lang="scss" scope>
  .content{
    display: flex;
    justify-content: center;
  }
  .left-area{
    width: 50%;
    margin-right: 40px;
    &_post-area{
      height: 135px;
      background: white;
      padding-top: 25px;
      padding-left: 30px;
      padding: 25px 30px;
      margin-bottom: 33px;
      input{
        border: none;
        width: 100%;
        padding: 10px;
        &:focus{
          border: none;
          outline: none !important;
        }
        &::placeholder{
          color: #18181833;
        }
      }

    }
    &_post-title{
      padding-bottom: 20px;
      border-bottom: 1px solid #F4F4F4;;
    }

    &_sort-ele{
      display: flex;
      align-items: center;
      margin-bottom: 33px;
    }
    &_sort-hr{
      flex: 1;
      height: 1px;
      background-color: #E7E7E7;
    }
    &_sort-content{
      margin: 0 10px;
    }
  }
  .right-area{
    width: 30%;
  }
</style>