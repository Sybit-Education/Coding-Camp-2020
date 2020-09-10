// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app'
// Add the Firebase services that you want to use
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/messaging'

const firebaseConfig = {
  apiKey: process.env.VUE_APP_FIREBASE_API_KEY,
  authDomain: process.env.VUE_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_FIREBASE_DATABASE_URL,
  projectId: process.env.VUE_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.VUE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_FIREBASE_APP_ID,
  measurementId: process.env.VUE_APP_FIREBASE_MEASUREMENT_ID
}
firebase.initializeApp(firebaseConfig)
export const $db = firebase.firestore()
export const $auth = firebase.auth()

// To apply the default browser preference instead of explicitly setting it.
$auth.useDeviceLanguage()

// Retrieve Firebase Messaging object.
export const $messaging = firebase.messaging()

Notification.requestPermission()
  .then(function () {
    console.log('Message Notification permissions granted')
    return $messaging.getToken('BAvEL-FglHgxZ9-_P0yf9-r3RcqGZiQxoQDSzICbuP-J3t6PnwKL2Bu_mr8nVws3NYAndSQiQJx6bA0e8h1vfDE')
  })
  .then(function (token) {
    console.log(token)
  })
  .catch(function (error) {
    console.log(error)
  })

// $messaging.usePublicVapidKey('BAvEL-FglHgxZ9-_P0yf9-r3RcqGZiQxoQDSzICbuP-J3t6PnwKL2Bu_mr8nVws3NYAndSQiQJx6bA0e8h1vfDE')

$messaging.onMessage((payload) => {
  console.log('Message received. ', payload)
  // ...
})

// Export types that exists in Firestore
// This is not always necessary, but it's used in other examples
const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }
