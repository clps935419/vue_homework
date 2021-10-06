<script>
import { computed } from "vue";
import { useStore } from "vuex";
import FeedCardComment from '@/components/Feed/FeedCardComment.vue'
export default {
    components:{
        FeedCardComment
    },
    setup(){
        const store = useStore();
        const postArr = computed(()=>{
            return store.getters['Feed/postArr']
        });
        const userObj = computed(()=>{
            return store.getters['getUser']
        })
        const isThumbs = (e)=>{
            console.log('this--',e.active)
            
            e.active = !e.active;
            store.dispatch('Feed/handleThumbAdd',e)
            console.log('this',e.active)
    
        }
        const isShowComment =(e)=>{
            e.isShowComment = !e.isShowComment;
        }
        return{
            postArr,
            isThumbs,
            isShowComment,
            userObj
        }
    }
}
</script>
<template>
    <ul>
        <li class="post-card" v-for="item in postArr" :key="item.name">
            <div class="post-card_header">
                <div>test like this</div>
                <div>...</div>
            </div>
            
            <div class="post-card_mid">
                <div class="post-card_name-area">
                    <img :src="item.img" alt="">
                    <div>
                        <div>{{item.name}}</div>
                        <div>{{item.infor}}</div>
                    </div>
                </div>
                <div class="post-card_content">
                    {{item.post}}
                </div>
            </div>
            <div class="post-card_footer">
                <div>
                    <div class="post-card_like-num">
                        <span @click="isThumbs(item)" :class="{active:item.active}"></span>
                        {{item.like}}
                    </div>
                    <div class="post-card_comment-num" @click="isShowComment(item)">
                        <span></span>
                        {{item.comment.length}}
                    </div>
                </div>
                <div>
                    <div class="post-card_share">
                        <span></span>
                        share
                    </div>
                </div>
            </div>
            <FeedCardComment :user="userObj" :postUser="item.name" :msgArr="item.comment" v-if="item.isShowComment" />
        </li>
    </ul>
</template>
<style lang="scss" scoped>
$cardimg_url:"~@/assets/img/feed/";

@mixin card-img($img) {
    background-image: url("#{$cardimg_url}#{$img}");
    width: 16px;
    height: 16px;
    background-size: cover;
    display: block;
    margin-right: 5px;
}

.post-card{
    border:1px #F4F4F4 solid;
    background: #FFFFFF;
    margin-bottom: 20px;
    &_header{
        display: flex;
        justify-content: space-between;
        padding: 15px;
        border-bottom: 1px solid #F4F4F4;
    }
    &_mid{
        padding:15px 30px 20px 30px;
    }
    &_footer{
        display: flex;
        justify-content: space-between;
        border-bottom: 1px solid #d3d3d3;

        >div{
            display: flex;
            cursor: pointer;
        }
    }
    &_name-area{
        display: flex;
        margin-bottom: 15px;
        img{
            width: 52px;
            height: 52px;
            border-radius: 50%;
            margin-right: 15px;
        }
    }
    &_like-num{
        padding: 15px 30px;
        display: flex;
        span{
            @include card-img("not-thumbs-up.png");
            &.active{
                @include card-img("thumbs-up.png");
            }
        }
    }
    &_comment-num{
        padding: 15px 30px;
        display: flex;
        span{
            @include card-img("message-circle.png");
        }
    }
    &_share{
        padding: 15px 30px;
        display: flex;
        span{
            @include card-img("share-2.png");
        }

    }
}
</style>