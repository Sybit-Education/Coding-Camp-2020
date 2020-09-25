import Vue from 'vue'
import { $auth } from '@/firebase-config'
import router from '@/router'

export const namespaced = true

export const actions = {
  signUpWithEmail ({ commit }, user) {
    return new Promise((resolve, reject) => {
      $auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(result => {
          this.dispatch('Userdata/syncUser')
          resolve()
        })
        .catch(
          error => {
            Vue.notify({
              group: 'notification',
              title: 'Fehler',
              type: 'bg-danger',
              text: 'Registrierung fehlgeschlagen.'
            })
            reject(error.message)
          }

        )
    })
  },
  signInWithEmail ({ commit }, user) {
    $auth.signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        this.dispatch('Userdata/syncUser')
        router.push('/profile')
      })
      .catch(error => {
        Vue.notify({
          group: 'notification',
          title: 'Fehler',
          type: 'bg-danger',
          text: 'Login fehlgeschlagen.'
        })
        console.log(error)
      })
  },
  signInWithGoogle ({ commit }) {
    const provider = new $auth.GoogleAuthProvider()
    $auth.signInWithPopup(provider)
      .then(user => {
        this.dispatch('Userdata/syncUser')
        router.push('/profile')
      }).catch(error => {
        Vue.notify({
          group: 'notification',
          title: 'Fehler',
          type: 'bg-danger',
          text: 'Login fehlgeschlagen'
        })
        console.log(error)
      })
  },
  signOut ({ commit }) {
    return new Promise((resolve, reject) => {
      $auth.signOut().then(() => {
        resolve()
        location.reload()
      }).catch(error => {
        Vue.notify({
          group: 'notification',
          title: 'Fehler',
          type: 'bg-danger',
          text: 'Logout fehlgeschlagen'
        })
        console.log(error)
      })
    })
  }
}
