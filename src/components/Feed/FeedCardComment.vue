<script>
import { useStore } from "vuex";
export default {
    props:{
        user:{
            type:String
        },
        postUser:{
            type:String
        },
        msgArr:{
            default:[{
                    name: "john",
                    content: "hi"
                }]
        },
        
    },
    setup(props){
        const store = useStore();
        console.log('props',props)
        const setPost = (e)=>{
            const $post = e.target.previousElementSibling;
            const userName = props.user;
            const postName = props.postUser;
            const postObj = {
                name:userName,
                postUser:postName,
                content:$post.value,
                img: "https://source.unsplash.com/user/alex"
            }
            store.dispatch('Feed/handlePostContent',postObj);
        }
        return{
            props,
            setPost
        }
    }
}
</script>
<template>
  <ul class="card-comment">
        <li class="card-comment-list" v-for="item in props.msgArr" :key="item.name">
            <div class="card-comment-list_left">
                <div>{{ item.name }}</div>
                <img :src="item.img" alt="">
            </div>
            <div class="card-comment-list_right">{{ item.content }}</div>
        </li>
  </ul>
  <div class="card-comment-post">
      <input type="text" class="postVal">
      <input type="button" value="post" @click="setPost">  
  </div>
</template>
<style lang="scss" scoped>
.card-comment-list{
    display: flex;
    align-items: center;
    padding: 15px 30px;
    border-bottom: 1px solid #F4F4F4;
    background: #E9F0F8;

    &_left{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 20px;
        >div{
            margin-bottom: 5px;
            color: #0275B1;
        }
        img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
        }
    }
    &_right{
        display: flex;
        align-items: center;
    }
}
.card-comment-post{
    padding: 15px 30px;
}
</style>