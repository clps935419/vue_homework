
<script>
import { ref,computed, onMounted, watch } from '@vue/runtime-core'
import { useStore } from 'vuex'
import FeedCard from '@/components/Feed/FeedCard.vue'
import FeedPersonCard from '@/components/Feed/FeedPersonCard.vue'
import FeedGroup from '@/components/Feed/FeedGroup.vue'
import FeedHashtag from '@/components/Feed/FeedHashtag.vue'
import FeedTrending from '@/components/Feed/FeedTrending.vue'

export default {
  components: {
    FeedCard,
    FeedPersonCard,
    FeedGroup,
    FeedHashtag,
    FeedTrending
  },
  setup(){
    const sortActive = ref('');
    const store = useStore();
    const userObj = computed(()=>{
      return store.getters['getUser']
    });
    watch(sortActive,(val)=>{
      console.log('val',val)
      store.dispatch('Feed/handlePostArrSort',val);
    })
    const init = ()=>{
      store.dispatch('Feed/handleInit').then((res)=>{
        console.log('結果',store.getters['Feed/postArr'])
      });
    }
    onMounted(()=>{
      init();
    })
    return{
      userObj,
      sortActive
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
        <div class="left-area_sort-content">
          sort by 
          <select name="" id="feed-sort-select" v-model="sortActive">
            <option value="new">New</option>
            <option value="old">old</option>
          </select>
        </div>
        <div class="left-area_sort-hr"></div>
      </div>
      <FeedCard/>

    </div>
    <div class="right-area">
      <FeedPersonCard/>
      <div class="right-area_write-new-artical">
        <a href="">write new artical</a>
      </div>
      <FeedGroup/>
      <FeedHashtag/>
      <FeedTrending/>
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
    &_write-new-artical{
      height: 75px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: white;
      padding: 30px 20px;
      margin-bottom: 20px;
      a{
        display: block;
        text-decoration: none;
        border-radius: 4px;
        background: linear-gradient(180deg, #0077B5 0%, #0E6795 100%);
        width: 100%;
        font-family: Gotham Pro;
        line-height: 30px;
        text-align: center;
        color: #FFFFFF;
      }
    }
  }
</style>