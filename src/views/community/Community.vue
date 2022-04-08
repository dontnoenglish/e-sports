<template>
    <div class="community">
        <Nav></Nav>
        <div class="ComContent">
            <div class="left">
                <left-nav></left-nav>
            </div>
            <div class="middle">
                <mid-nav></mid-nav>
            </div>
            <div class="right">
                <right-nav></right-nav>
            </div>
        </div>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import LeftNav from './childComponents/LeftNav.vue'
import MidNav from './childComponents/MidNav.vue'
import RightNav from './childComponents/RightNav.vue'
export default {
  name:'',
  data(){
   return {

   }
  },
  components:{
      Nav,
      LeftNav,
      MidNav,
      RightNav
  }
}
</script>

<style scoped>
.ComContent {
    display: flex;
    margin: 20px 125px 0;
}
.left {
    flex: 1;
}
.middle {
    flex: 2;
}
.right {
    flex: 1;
}
</style>
