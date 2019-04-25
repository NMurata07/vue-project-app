import Vue from 'vue'
import router from './router.js'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/ja'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

Vue.use(ElementUI, {locale})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Top),
}).$mount('#app')
