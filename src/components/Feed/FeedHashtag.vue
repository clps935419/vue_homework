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
  <div class="feed-hashtag">
      <div class="feed-hashtag_header">
          Followed hashtags
      </div>
      <div class="feed-hashtag_content">
          <a href="#" v-for="item in userObj.hashtag" :key="item">
              {{item}}
          </a>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.feed-hashtag{
    padding: 25px 30px 30px 30px;
    margin-bottom: 20px;
    background:#FCFDFD;
    &_header{
        margin-bottom: 40px;
        color:#181818;
        font-weight: bolder;
    }
    &_content{
        display: flex;
        flex-wrap: wrap;
        a{
            text-decoration: none;
            display: block;
            padding: 7px 12px;
            margin-right: 10px;
            margin-bottom: 10px;
            background:#E9F0F8;
            color: black;
        }
    }
}
</style>