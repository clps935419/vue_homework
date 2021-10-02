
<script>
import { ref,computed, reactive } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const isOpen = ref(false);
        const store = useStore();
        const userObj = computed(()=>{
            return store.getters['getUser']
        });
        const handOpen =()=>{
            isOpen.value = !isOpen.value;
        }
        const handopenText = computed(()=>{
            if(isOpen.value){
                return `hide all (${userObj.value.group.length})`;
            }else{
                return `show all (${userObj.value.group.length})`;
            }
        });
        const domH = computed(()=>{

            if(isOpen.value){
                return `${userObj.value.group.length * 80 + (userObj.value.group.length - 1) * 10}px`;
            }
        })
        return{
            userObj,
            domH,
            handOpen,
            handopenText
        }
    }
}
</script>
<template>
  <div class="feed-person-group">
      <div class="feed-person-group_header">
          <div>My group</div>
          <div>EDIT LIST</div>
      </div>
      <ul class="feed-person-group_list" :style="{height:domH}">
          <li v-for="item in userObj.group" :key="item.name">
              <img :src="item.img" alt="">
              <div>{{item.name}}</div>
          </li>
      </ul>
      <a class="feed-person-group_btn" @click="handOpen">
          {{handopenText}}
      </a>
  </div>
</template>
<style lang="scss" scoped>
.feed-person-group{
    padding: 25px 30px 28px 30px;
    background:#FCFDFD;
    margin-bottom: 20px;
    &_header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #F4F4F4;
        padding-bottom: 20px;
        div{
            &:nth-child(1){
                font-family: Gotham Pro;
                font-size: 12px;
                line-height: 11px;
                text-transform: uppercase;
                color: #181818;
            }
            &:nth-child(2){
                font-family: Gotham Pro;
                font-size: 12px;
                line-height: 11px;
                text-align: right;
                text-transform: uppercase;
                color: #0275B1;
            }
        }
    }
    &_list{
        margin-bottom: 25px;
        height: 260px;
        overflow: hidden;
        li{
            width: 100%;
            height: 80px;
            padding: 15px;
            margin-bottom: 10px;
            border:1px solid #F4F4F4;
            display: flex;
            align-items: center;
            &:last-child{
                margin-bottom: 0;
            }
            img{
                width: 52px;
                height: 52px;
                border-radius: 50%;
                margin-right: 15px;
            }
        }
    }
    &_btn{
        font-family: Gotham Pro;
        color:#0275B1;
        cursor: pointer;
    }
}
</style>