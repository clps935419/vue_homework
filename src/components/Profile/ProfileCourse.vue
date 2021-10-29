<script>
import { computed } from "vue";
import { useStore } from "vuex";
import {useShowCard} from '@/composition-api/';
export default {
    setup(){
        const store = useStore();
        const course = computed(()=>{
            return store.getters['getUser'].course;
        });
        const {handOpen,domH} = useShowCard();
        const calcDomH = computed(() =>{
            return domH(3,52,15);
        });
        return{
            course,
            handOpen,
            calcDomH 
        }
    }
}
</script>
<template>
  <div class="course">
      <div class="course-header">
          <div>You may like these courses</div>
      </div>
      <div class="course-content" :style="{height:calcDomH}">
          <div class="course-content_item"
          v-for="item in course"
          :key="item.name"
          >
              <img :src="item.img" alt="">
              <div class="course-content_item-infor">
                  <div>{{item.name}}</div>
                  <div>{{item.view}}</div>
              </div>
          </div>
      </div>
      <div class="course-footer">
          <a href="#" @click="handOpen">See all recomendations</a>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.course{
    padding:25px 30px 30px 30px;
    background-color: white;
    box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5);
    border-radius: 4px;
    &-header{
        font-family: Gotham Pro;
        font-size: 12px;
        line-height: 11px;
        text-transform: uppercase;
        color: #181818;
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        >div{
            font-weight: bolder;
        }
        a{
            font-family: Gotham Pro;
            font-size: 12px;
            line-height: 11px;
            text-decoration-line: underline;
            color: #0275B1;
        }
    }
    &-content{
        display: flex;
        flex-direction: column;
        margin-bottom: 25px;
        overflow: hidden;
        &_item{
            display: flex;
            align-items: center;
            margin-bottom: 15px;
            &:last-child{
                margin-bottom: 0;
            }
            img{
                width: 80px;
                height: 52px;
                margin-right: 15px;
            }
            &-infor{
                >div:nth-child(1){
                    
                    font-family: Gotham Pro;
                    font-size: 14px;
                    line-height: 13px;

                    color: #181818;
                    margin-bottom:5px
                }
                >div:nth-child(2){
                    
                    font-family: Gotham Pro;
                    font-size: 10px;
                    line-height: 150%;
                    color: #181818;

                }
            }
        }
    }
    &-footer{
        a{
            font-family: Gotham Pro;
            font-size: 12px;
            line-height: 11px;
            text-decoration: none;
            color: #0275B1;
        }
    }
}
</style>