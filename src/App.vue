<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>


import Login from './views/Login.vue'
// import HomePage from './views/homepage/HomePage.vue'
export default {
  name: 'App',
  components: {
    Login
  },
  mounted(){
     this.$store.commit('INIT_USER')
  }
}
</script>

<style>
@import './assets/css/base.css';

</style>
