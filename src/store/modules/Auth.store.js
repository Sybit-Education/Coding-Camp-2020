import Vue from 'vue'
import { $auth } from '@/firebase-config'
import router from '@/router'
import firebase from 'firebase/app'

export const namespaced = true

export const actions = {
  deleteUser ({ commit }, password) {
    const user = $auth.currentUser
    const credential = firebase.auth.EmailAuthProvider.credential(
      user.email,
      password
    )
    user.reauthenticateWithCredential(credential).then(result => {
      this.dispatch('Userdata/removeUser')
      user.delete().then(result => {
        router.push('/login')
        Vue.notify({
          group: 'notification',
          title: 'Account Gelöscht !',
          type: 'bg-success',
          text: 'Ihr Account Wurde erfolgreich Permanent gelöscht !'
        })
      }).catch(
        error => {
          Vue.notify({
            group: 'notification',
            title: 'Fehler',
            type: 'bg-danger',
            text: 'Löschen des Kontos Fehlgeschlagen.'
          })
          console.log(error)
        })
    }).catch(
      error => {
        Vue.notify({
          group: 'notification',
          title: 'Fehler',
          type: 'bg-danger',
          text: 'Falsches Password !'
        })
        console.log(error)
      })
  },
  signUpWithEmail ({ commit }, user) {
    return new Promise((resolve, reject) => {
      $auth.createUserWithEmailAndPassword(user.email, user.password)
        .then(result => {
          this.dispatch('Userdata/setDataByCreation')
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
