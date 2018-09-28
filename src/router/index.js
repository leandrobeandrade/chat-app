import Vue from 'vue'
import Router from 'vue-router'
import MessageApp from '@/components/MessageApp'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Router)
Vue.use(Vuetify)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MessageApp',
      component: MessageApp
    }
  ]
})
