<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const postArr = computed(()=>{
            return store.getters['Feed/postArr']
        })
        return{
            postArr
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
                    <img src="" alt="">
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
                        <span></span>
                        {{item.like}}
                    </div>
                    <div class="post-card_comment-num">
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
            
        </li>
    </ul>
</template>
<style lang="scss" scoped>
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
        >div{
            display: flex;
        }
    }
    &_name-area{
        display: flex;
        margin-bottom: 15px;
    }
    &_like-num{
        padding: 15px 30px;
    }
    &_comment-num{
        padding: 15px 30px;
    }
    &_share{
        padding: 15px 30px;

    }
}
</style>