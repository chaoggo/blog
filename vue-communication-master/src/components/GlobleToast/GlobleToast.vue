<template>
  <div id="toast" v-show="isVisible">
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  name:"GlobleToast",
  data () {
    return {
      isVisible:false,
      message:"",
      delay:2000
    }
  },
  watch:{
    isVisible:function(newVisible){
      // 当delay时间内有多个Toast实例，则移除上一个
      if(!newVisible){
        if(this.toastTimer) clearTimeout(this.toastTimer);
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      }
    }
  },
  mounted(){
    if(this.delay > 0){
      // delay 时间过后销毁组件
      this.toastTimer = setTimeout(()=>{
        this.$destroy(true);
        this.$el.parentNode.removeChild(this.$el);
      },this.delay);
    }
  },
}
</script>

<style>
#toast{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  border-radius: 30px;
  min-width: 160px;
  max-width: 300px;
  text-align: center;
  padding: 6px 10px;
}
</style>