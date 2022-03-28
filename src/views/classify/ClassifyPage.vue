<template>
    <div id="classify">
        <Nav></Nav>
        <main-content></main-content>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import MainContent from './childComponents/MainContent.vue'
export default {
  name:'',
  data(){
   return {

   }
  },
  components:{
      Nav,
      MainContent
  }
}
</script>

<style scoped>

</style>
