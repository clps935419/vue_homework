<script>
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'

export default {
    setup(){
        const store = useStore();
        let account = ref('leonard');
        let password =ref('abc123');
        const handleLogin = ()=>{   
            store.dispatch('getLogin',{
                account:account,
                password:password
            });
        }
        return{
            account,
            password,
            handleLogin
        }
    }
}
</script>
<template>
  <div class="loginBox">
      <div class="row">
          <input v-model="account" type="text" placeholder="帳號">
      </div>
      <div class="row">
          <input v-model="password" type="text" placeholder="密碼">
      </div>
      <div class="row">
          <input type="button" value="登入" @click="handleLogin">
      </div>
  </div>
</template>
<style lang="scss" scoped>
.loginBox{
    width: 500px;
    height: 500px;
    display: flex;
    flex-direction: column;
    gap:10px;
}
.row{
    display: flex;
    input{
        width: 100%;
        padding: 8px;
    }
}
</style>