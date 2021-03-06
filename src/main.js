import Vue from 'vue'
import App from './App.vue'
import SuiVue from 'semantic-ui-vue'
import router from './router/index'

Vue.config.productionTip = false
Vue.prototype.$currentViewProject = null

Vue.use(SuiVue);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')