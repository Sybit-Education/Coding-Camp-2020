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
          title: 'Account Gelöscht!',
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
          text: 'Falsches Passwort !'
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
            if (error.code === 'auth/email-already-in-use') {
              router.push('/login')
              Vue.notify({
                group: 'notification',
                title: 'Fehler',
                type: 'bg-danger',
                text: 'Benutzer ist bereits registriert.'
              })
            } else if (error.code === 'auth/weak-password') {
              Vue.notify({
                group: 'notification',
                title: 'Fehler',
                type: 'bg-danger',
                text: 'Passwort muss mindestens 6 Zeichen beinhalten.'
              })
            } else {
              Vue.notify({
                group: 'notification',
                title: 'Fehler',
                type: 'bg-danger',
                text: 'Registrierung fehlgeschlagen.'
              })
              reject(error.message)
            }
          }

        )
    })
  },
  signInWithEmail ({ commit }, user) {
    $auth.signInWithEmailAndPassword(user.email, user.password)
      .then(result => {
        this.dispatch('Userdata/syncUser')
        if (user.redirect) {
          router.push(user.redirect)
        } else {
          router.push('/profile')
        }
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
  signInWithGoogle ({ commit }, redirect) {
    const provider = new firebase.auth.GoogleAuthProvider()
    $auth.signInWithPopup(provider)
      .then(user => {
        this.dispatch('Userdata/syncUser')
        if (redirect) {
          router.push(redirect)
        } else {
          router.push('/profile')
        }
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
  },
  requestResetPassword ({ commit }, email) {
    console.log(email.email)
    if (!email.email) {
      console.log('E-Mail required')
      return
    }
    const auth = firebase.auth()
    auth
      .sendPasswordResetEmail(email.email)
      .then(() => {
        router.push('/login')
        Vue.notify({
          group: 'notification',
          title: 'Zurücksetzen',
          type: 'bg-success',
          text: 'Wenn diese E-Mail existiert, haben sie eine Nachricht zum Zurücksetzen des Passworts erhalten.'
        })
      })
      // eslint-disable-next-line
      .catch(error => {
        Vue.notify({
          group: 'notification',
          title: 'Zurücksetzen',
          type: 'bg-success',
          text: 'Wenn diese E-Mail existiert, haben sie eine Nachricht zum Zurücksetzen des Passworts erhalten.'
        })
      })
  }
}
