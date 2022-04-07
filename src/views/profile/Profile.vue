<template>
    <div class="profile">
        <Nav></Nav>
        <card-container></card-container> 
        <profile-content></profile-content>
    </div>
</template>

<script>
import Nav from '@/components/Nav.vue'
import CardContainer from './childComponents/CardContainer.vue'
import ProfileContent from './childComponents/ProfileContent.vue'
export default {
  name:'',
  data(){
   return {
        
   }
  },
  components:{
      Nav,
      CardContainer,
      ProfileContent 
  }
}
</script>

<style scoped>

</style>
