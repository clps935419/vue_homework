<script>
import { computed } from "vue";
import { useStore } from "vuex";
    export default {
        setup(){
            const store = useStore();
            const userObj = computed(()=>{
            return store.getters['getUser']
            });
            return{
                userObj
            }
        }
    }
</script>
<template>
    <div class="profile-card">
        <div class="profile-card_bg" :style="{'background-image':`url(${userObj.backgroundImg})`}">
            <div class="profile-card_bg-left">
                <i></i>
            </div>
            <div class="profile-card_bg-right">
                <i></i>
                <i></i>
            </div>
        </div>
        <div class="profile-card_infor">
            <div class="profile-card_my-img">
                <img :src="userObj.img" alt="">
            </div>
            <div class="profile-card_infor-content">
                <div class="name">
                    <div>{{userObj.name}}</div>
                    <div></div>
                </div>
                <div class="intro">
                    {{userObj.intro}}
                </div>
                <div class="infor-btn">
                    <a href="">Contact info</a>
                    <a href="">1,043 connections</a>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.profile-card{
    &_bg{
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: space-between;
        background-size: cover;
    }
    &_infor{
        display: flex;
    }
    &_infor-content{
        display: flex;
        flex-direction: column;
        .name{
            display: flex;
            justify-content: space-between;
        }
        .infor-btn{
            a{
                display: block;
                text-decoration: none;
            }
        }
    }
    &_my-img {
        margin-right: 25px;

        img{
            width: 170px;
        height: 170px;
        border-radius: 50%;
        }
        
    }
}
</style>