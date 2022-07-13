<template>
    <div>
      <h2>欢迎页面</h2>
      <button @click="showToast">点击显示全局组件</button>
    </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
     
    }
  },
  methods:{
    showToast(){
      this.$globleToast("欢迎页的全局组件")
    }
  }
}
</script>