<template>
     <el-button
    plain
    @click="open4">
    错误
  </el-button>
</template>

<script>
export default {
  name:'',
  data(){
   return {

   }
  },
  methods:{
      open4() {
        this.$notify.error({
          title: '错误',
          message: '这是一条错误的提示消息'
        });
      }
  }
}
</script>

<style scoped>

</style>
