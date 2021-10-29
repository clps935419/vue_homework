<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const navContent = computed(()=>{
            return store.getters['Profile/getNavListContent'];
        });
        const headerNum = computed(()=>{
            return (arr)=>{
                return arr.length > 3 ? `3 of ${arr.length}`:`${arr.length}of ${arr.length}`;
            }
        })
        return{
            navContent,
            headerNum
        }
    }
}
</script>
<template>
  <div class="nav-content">
      <div :class="['nav-content_card',{'about':item.name === 'about'}]" v-for="item in navContent" :key="item.name">
          <div class="nav-content_card-header">
              {{item.name}}
              <span v-if="item.name === 'project'">
                  {{headerNum(item.content)}}
              </span>
          </div>
          <div class="nav-content_card-content">
              <div v-if="typeof(item.content) === 'string'">
                {{item.content}}
              </div>
              <div 
              class="nav-content_card-array" 
              v-if="typeof(item.content) === 'object'"
              >
                <div v-for="subItem in item.content" :key="subItem.title">
                    <img :src="subItem.img" alt="">
                    <div class="card-array-title">{{subItem.title}}</div>
                    <div>{{subItem.subTitle}}</div>
                </div>
              </div>
          </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.nav-content_card{
    background-color: white;
    padding: 30px 30px 35px 30px;
    box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5);
    border-radius: 4px;
    margin-bottom: 20px;
    &-header{
        font-family: Gotham Pro;
        font-size: 18px;
        font-weight: bolder;
        line-height: 17px;
        margin-bottom:15px;
        color: #181818;
        span{
            color: #747474;
        }
    }
    &-array{
        display: flex;
        >div{
            display: flex;
            flex-direction: column;
            flex: 1;
            margin-right: 20px;
            &:last-child{
                margin-right: 0;
            }
            img{
                width: 100%;
                height: 160px;
                margin-bottom: 15px;
            }
            .card-array-title{
                font-family: Gotham Pro;
                font-size: 14px;
                margin-bottom: 5px;
                color: #181818;

            }
            .card-array-subTitle{
                font-family: Gotham Pro;
                font-size: 10px;
                color: #181818;
            }
        }
    }
    &.about{
        height: 170px;
    }
}
</style>