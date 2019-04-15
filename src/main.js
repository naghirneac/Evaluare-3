import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import VueRouter from 'vue-router'
import router from 'vue-router'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuetify)
Vue.use(VueRouter)
Vue.use(Vuex)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
