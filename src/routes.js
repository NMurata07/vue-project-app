import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import HotelDetail from './HotelDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'histtory',
  routes: [
    { path: '/', component: App },
    { path: '/hotels/:id', component: HotelDetail }
  ]
})
