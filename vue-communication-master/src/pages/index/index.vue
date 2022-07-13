<template>
  <div>
    <h2>index页面</h2>
    <div @click="jumpToWelcome" >点击跳转到欢迎页</div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data(){
    return {
        
    }
  },
  methods:{
    jumpToWelcome(){
      this.$router.push("welcome");
    }
  }
}
</script>