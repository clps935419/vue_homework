<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const trending = computed(()=>{
            return store.getters['getUser'].trending
        })
        return{
            trending
        }
    }
}
</script>
<template>
  <div class="feed-trending">
      <div class="feed-trending_header">
          Trending articles
      </div>
      <ul class="feed-trending_content">
          <li v-for="item in trending" :key="item.name">
              <a href="">
                  <img :src="item.img" alt="">
                  <div>
                      <div>{{item.name}}</div>
                      <div>{{item.view}} views</div>
                  </div>
              </a>
            </li>
      </ul>
  </div>
</template>
<style lang="scss" scoped>
.feed-trending{
    padding: 25px 30px;
    background: #FCFDFD;
    border-radius: 4px;
    &_header{
        color: #181818;
        font-weight: bolder;
        margin-bottom: 40px;
    }
    &_content{
        >li{
            margin-bottom: 20px;
            &:nth-last-child(){
                margin-bottom: 0;
            }
        }
        a{
            display: flex;
            text-decoration: none;
            color: black;
            >img{
                margin-right: 15px;
                width: 80px;
                height: 52px;
            }
            >div{
                display: flex;
                flex-direction: column;
                >div:first-child{
                    margin-bottom: 5px;
                    font-size: 18px;
                    font-weight: bolder;
                }
                >div:nth-child(2){
                    color: #181818;
                }
            }
        }
    }
}
</style>