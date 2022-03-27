<template>
    <div>
        -------<input type="text" v-model='value'> 
        <button @click="sort=1">升序</button><button @click="sort=2">降序</button><button @click="sort=0">原顺序</button>
        <ul>
            <li v-for="(item,index) in fltobj">
                {{item.name}}--{{item.age}}--{{item.sex}}
            </li>
        </ul>
        <div v-big='zz'></div>
    </div>
</template>

<script>
export default {
  name:'',
  data(){
   return {
      obj:[
          {id:'001',name:'马冬梅',age:30,sex:'female'},
          {id:'002',name:'周冬雨',age:18,sex:'female'},
          {id:'003',name:'周杰伦',age:41,sex:'male'},
          {id:'004',name:'温兆伦',age:13,sex:'male'}
      ],
      value:'',
      sort:0,
      zz:10
   }
  },
//   watch:{
//       value:{
//         handler(newvalue){
//             this.fltobj = this.obj.filter((item)=>{
//              return item.name.includes(newvalue)
//           })
//         }
//       }
//   },
//  prevent 阻止默认事件
// stop 阻止事件冒泡
// once 事件只触发一次
// captrue 使用事件捕获模式
//

// 自定义指令 directives
// 有三个钩子函数
// bind 指令与元素绑定时触发
// inserted 指令所在元素被插入页面时
// update 指令所在的模板被重新解析时


// 关闭语法检测
// vue.config.js 中配置 lintOnSave:false

// ref

// ref用在普通元素上，拿到的就是当前ref的dom元素
// 用在组件上，则拿到的时当前组件的 实例对象(vc)
directives:{
   // 例如自定义 v-big指令
   big(ele,binding){
       // ele就是指令所在的 dom元素
       // binding就是后面指定的变量的相关信息

       console.log(ele,binding);
       ele.innerText = binding.value*10
   }
},
  computed:{
     fltobj(){
         const arr = this.obj.filter((item)=>{
            return item.name.includes(this.value)
         })
         if(this.sort){
             arr.sort((a,b)=>{
                return this.sort==1 ? a.age-b.age :b.age-a.age
             })
         }
         return arr
     }
  }
}


// 父子组件通信
  //   父传子 父  :xxx = 'name'   子  props:{name:String} 
  //   子传父  子    this.$emit('事件名',name)   父 @事件名 = func(name) 就能拿到name了
//     this.$off() 清除所有自定义事件     


// 事件总线
//  Vue.prototype.$bus = new Vue()
// @keyframs toggle {
    //   0 : { transtion: }
//}
// v-enter-active { animation:toggle 0.5s }
// v-leave-active

/**
 * v-enter  v-enter-to   v-leave  v-leave-to   transition:translateX(-100px)
 * ahahahahahhahahhaha
 * this.$store.dispath('hh',n)
 * actions:
 * hh(context,payload){
 *    context.commit('HH',payload)
 * }
 * mutations:
 * HH(state,payload){
 *    state.xx = payload
 * }
 * 
 * import {mapState} from 'vuex'
 * computed:{
 *   ...mapState([])
 * }  
 * 
 * namespaced:true
 * ...mapState('',[])
 */
</script>

<style scoped>

</style>
