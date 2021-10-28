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
    box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5);
    &_bg{
        width: 100%;
        height: 180px;
        display: flex;
        justify-content: space-between;
        background-size: cover;
    }
    &_infor{
        display: flex;
        background: white;

    }
    &_infor-content{
        display: flex;
        flex-direction: column;
        padding-top: 25px;
        padding-bottom: 35px;
        .name{
            display: flex;
            justify-content: space-between;
            font-family: Gotham Pro;
            font-size: 18px;
            color: #181818;
            margin-bottom: 15px;
        }
        .intro{
            font-family: Gotham Pro;
                font-size: 14px;
                color: #181818;
                margin-bottom: 14px;

        }
        .infor-btn{
            display: flex;
            justify-content: flex-start;
            a{
                display: block;
                text-decoration: none;
                margin-right: 15px;
                border: #0275B1 1px solid;
                color: #0275B1 ;
                width: 170px;
                text-align: center;
                padding-top:11px;
                padding-bottom: 10px;
            }
        }
    }
    &_my-img {
        margin-right: 25px;
        margin-top: -25px;
        img{
        width: 170px;
        height: 170px;
        border-radius: 50%;
        border:10px solid white;
        }
        
    }
}
</style>