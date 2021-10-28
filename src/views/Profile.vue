<script>
import { useStore } from 'vuex'
import ProfileInforCard from '@/components/Profile/ProfileInforCard.vue'
import ProfileNavBtn from '@/components/Profile/ProfileNavBtn.vue'
import ProfileNavContent from '@/components/Profile/ProfileNavContent.vue'

export default {
    components: {
        ProfileInforCard,
        ProfileNavBtn,
        ProfileNavContent
    }
}
</script>
<template>
  <div class="content">
    <div class="left-area">
      <ProfileInforCard/>
      <ProfileNavBtn/>
      <ProfileNavContent/>
    </div>
    <div class="right-area">

    </div>
  </div>
</template>
<style lang="scss" scoped>
.content{
  display: flex;
  justify-content: center;
}
.left-area{
  width: 50%;
  margin-right: 40px;
  
}
.right-area{
  width: 30%;
}
</style>