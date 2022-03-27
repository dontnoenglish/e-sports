<template>
    <div class="home-page">
        <Nav></Nav>
        <Swiper></Swiper>
        <new-section></new-section>
        <hot-classify></hot-classify>
        <Official></Official>
        <Fanart></Fanart>
        <Footer></Footer>
    </div>
</template>

<script>
import Nav from './childComponents/Nav.vue'
import Swiper from './childComponents/Swiper.vue'
import NewSection from './childComponents/NewSection.vue'
import HotClassify from './childComponents/HotClassify.vue'
import Official from './childComponents/Official.vue'
import Fanart from './childComponents/Fanart.vue'
import Footer from './childComponents/Footer.vue'

import { getSession } from  '@/network/login.js'
export default {
  name: "",
  components:{
      Nav,
      Swiper,
      NewSection,
      HotClassify,
      Official,
      Fanart,
      Footer
  },
  data() {
    return {

    }
  },
  methods: {
  },
  created(){
    getSession().then(res=>{
      console.log(res);
    })
  }
};
</script>

<style scoped>
.home-page {
  background: rgb(241, 238, 238);
}
</style>
