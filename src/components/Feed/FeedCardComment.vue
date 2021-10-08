<script>
import { useStore } from "vuex";
export default {
    props:{
        user:{
            type:Object
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
            const $post = e.target;
            const userName = props.user.name;
            const postName = props.postUser;
            const postObj = {
                name:userName,
                postUser:postName,
                content:$post.value,
                img: "https://source.unsplash.com/user/alex"
            }
            store.dispatch('Feed/handlePostContent',postObj);
            $post.value="";
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
                <img :src="item.img" alt="">
            </div>
            <div class="card-comment-list_right">
                <div class="card-comment-list_right-name">{{ item.name }}</div>
                <div>{{ item.content }}</div>
            </div>
        </li>
  </ul>
  <div class="card-comment-post">
      <img :src="props.user.img" alt="">
      <input type="text" class="postVal" @keyup.enter="setPost" placeholder="type... then enter">
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
        justify-content: center;
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
        flex-direction: column;
        &-name{
            color: #0275B1;
            margin-bottom: 5px;
        }
    }
}
.card-comment-post{
    padding: 15px 30px;
    display: flex;
    img{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        margin-right: 20px;
    }
    input{
        width: 100%;
        border-radius: 10px;
        border: none;
        background: #ededed;
        padding: 0 10px;
        &:focus{
            outline: none;
        }
    }
}
</style>