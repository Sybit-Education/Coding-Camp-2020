import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import './firebase-config'
import './vue-filters'
import './vue-meta'
import './vue-fontawesome'
import './vue-notification'
import './vue-gravatar'
import './registerServiceWorker'
import './plugins/bootstrap-vue'

let app = ''
Vue.config.productionTip = false

firebase.auth().onAuthStateChanged(() => {
  if (!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
