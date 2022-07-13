// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import GlobleToast from './components/GlobleToast/GlobleToast.js';
import router from './router/routes';

Vue.config.productionTip = false;

//全局组件
Vue.prototype.$globleToast = GlobleToast;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
})