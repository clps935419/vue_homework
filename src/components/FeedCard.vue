<script>
export default {
    props:{
        msg:{
            type:String,
            default:"預設值"
        }
    },
    setup(props){
        console.log("--",props.msg)
        return{
            props
        }
    }
}
</script>
<template>
  <h1>{{props.msg}}</h1>
</template>
<style>

</style>