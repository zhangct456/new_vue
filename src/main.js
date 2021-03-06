import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router';
import config from './config';
import dataV from '@jiaminghi/data-view'

Vue.use(dataV)

// 自定义全局组件

Vue.config.productionTip = false

Vue.use(ElementUI, { size: 'small' });

new Vue({
  el: '#app',
  router,
  render: h => h(App),
}).$mount('#app')
