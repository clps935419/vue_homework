<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
    setup(){
        const store = useStore();
        const dashboard = computed(()=>{
            return store.getters['getUser'].dashboard;
        });
        return{
            dashboard
        }
    }
}
</script>
<template>
  <div class="dashboard">
      <div class="dashboard-header">
          <div>your dashboard</div>
          <a>go to stats</a>
      </div>
      <div class="dashboard-content">
          <div class="dashboard-content_item">
              <div>{{dashboard.view}}</div>
              <div>views today</div>
          </div>
          <div class="dashboard-content_item">
              <div>{{dashboard.post}}</div>
              <div>posts views</div>
          </div>
          <div class="dashboard-content_item">
              <div>{{dashboard.search}}</div>
              <div>search appereances</div>
          </div>
      </div>
  </div>
</template>
<style lang="scss" scoped>
.dashboard{
    padding:25px 30px 30px 30px;
    background-color: white;
    box-shadow: 0px 20px 60px rgba(241, 244, 248, 0.5);
    border-radius: 4px;
    margin-bottom:20px;
    &-header{
        font-family: Gotham Pro;
        font-size: 12px;
        line-height: 11px;
        text-transform: uppercase;
        color: #181818;
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        >div{
            font-weight: bolder;
        }
        a{
            font-family: Gotham Pro;
            font-size: 12px;
            line-height: 11px;
            text-decoration: none;
            color: #0275B1;
        }
    }
    &-content{
        display: flex;
        flex-direction: column;
        &_item{
            >div:nth-child(1){
                font-family: Gotham Pro;
                font-size: 52px;
                line-height: 50px;
                /* identical to box height */

                text-transform: uppercase;

                color: #0275B1;
            }
            >div:nth-child(2){
                font-family: Gotham Pro;
                font-size: 14px;
                line-height: 150%;
                /* identical to box height, or 21px */
                color: #181818;
            }
        }
    }
}
</style>