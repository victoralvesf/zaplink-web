import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import './global/styles/main.scss'
import Wrapper from '@/components/Wrapper'

library.add(fas)
Vue.component('fa-icon', FontAwesomeIcon)

Vue.component('Wrapper', Wrapper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
