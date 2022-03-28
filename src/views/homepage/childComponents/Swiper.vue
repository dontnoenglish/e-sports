<template>
<swiper :options="swiperOption" id="swiper">
　　<swiper-slide>
    <img src="https://ossweb-img.qq.com/upload/adw/image/977/20220218/f316624bad10e6b4bde9793850f1b7e1.jpeg" id="swiper_img" alt="">
</swiper-slide>
　　<swiper-slide>
    <img src="https://ossweb-img.qq.com/upload/adw/image/977/20220223/bf4d1c076c6e039e46f9b723c60c0820.jpeg" id="swiper_img" alt="">
</swiper-slide>
　　<div class="swiper-pagination" slot="pagination"></div>
　　<div class="swiper-button-prev" slot="button-prev"></div>
　　<div class="swiper-button-next" slot="button-next"></div>
</swiper>
</template>

<script>
export default {
  name:'',
  data(){
   return {
swiperOption: {
　　pagination: {
　　　　el: '.swiper-pagination',
　　　　clickable: true // 允许点击小圆点跳转
　　},
　　autoplay: {
　　　　delay: 3000,
　　　　disableOnInteraction: false // 手动切换之后继续自动轮播
　　},
　　loop: true,
　　navigation: {
　　　　nextEl: '.swiper-button-next',
　　　　prevEl: '.swiper-button-prev'
　　}
}
   }
  }
}
</script>

<style scoped>
#swiper_img {
    width: 100%;
}
/* #swiper {
    overflow: hidden;
} */
</style>
