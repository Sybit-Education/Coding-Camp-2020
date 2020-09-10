import Vue from 'vue'

import { register } from 'register-service-worker'

/* eslint-disable no-console */
if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready () {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered () {
      console.log('Service worker has been registered.')
    },
    cached () {
      console.log('Content has been cached for offline use.')
    },
    updatefound () {
      console.log('New content is downloading.')
    },
    updated () {
      console.log('New content is available; please refresh.')
      Vue.notify({
        group: 'notification',
        title: 'Update',
        text: 'Es gibt ein update der Anwendung.'
      })
      window.location.reload(true)
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
      Vue.notify({
        group: 'notification',
        title: 'Error',
        type: 'danger',
        text: 'Error during service worker registration:' + error
      })
    }
  })
}
