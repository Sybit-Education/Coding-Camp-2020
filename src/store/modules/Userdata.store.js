import 'firebase/firestore'
import firebase from 'firebase/app'
import Vue from 'vue'
import { firestoreAction } from 'vuexfire'
import { $db, $auth } from '@/firebase-config'

const COLLECTION_NAME = 'userdata'

const POINTS_INITIAL = 0
const MONTH_IN_MILLISECONDS = 2592000000

export const namespaced = true

export const state = {
  userdata: {},
  usersForHighscorePage: []
}
export const actions = {
  /** create or update Userdata of given firebase user */
  syncUser () {
    const currentUser = $auth.currentUser
    // Once the user creation has happened successfully, we can add the currentUser
    // with the appropriate details.
    return $db.collection(COLLECTION_NAME).doc(currentUser.uid).set({
      email: currentUser.email,
      lastLogin: firebase.firestore.Timestamp.now()
    }, { merge: true }).catch(error => {
      console.log('Something went wrong with syncing user: ' + error)
    })
  },
  setDataByCreation () {
    const currentUser = $auth.currentUser
    return $db.collection(COLLECTION_NAME).doc(currentUser.uid).set({
      email: currentUser.email,
      lastAccess: firebase.firestore.Timestamp.now(),
      createdAt: firebase.firestore.Timestamp.now()
    }, { merge: true }).catch(error => {
      console.log('Something went wrong by creation user: ' + error)
    })
  },
  fetchUserData: firestoreAction(({ bindFirestoreRef }) => {
    if ($auth.currentUser) {
      const userId = $auth.currentUser.uid
      const serialize = (snapshot) => {
        return Object.defineProperty(snapshot.data(), 'id',
          { value: snapshot.id, enumerable: true })
      }
      bindFirestoreRef(
        'userdata',
        $db.collection(COLLECTION_NAME).doc(userId),
        { serialize }
      )
    }
  }),
  saveDisplayName ({ commit }, displayName) {
    if ($auth.currentUser) {
      const userId = $auth.currentUser.uid
      return $db.collection(COLLECTION_NAME).doc(userId).set({
        displayName: displayName,
        lastAccess: firebase.firestore.Timestamp.now()
      }, { merge: true }).catch(error => {
        console.log('Something went wrong with syncing displayName: ' + error)
      })
    } else {
      console.log('Error storing displayName: no current user')
    }
  },
  assignImpulse ({ getters, rootGetters, commit }, impulseId) {
    const userId = $auth.currentUser.uid
    const map = getters.assignedImpulseMap
    const impulsePoints = rootGetters['Impulse/getSelectedPoints'](impulseId)

    commit('ADD_ENTRY_TO_IMPULSEMAP', { impulseId, impulsePoints })

    return $db.collection(COLLECTION_NAME).doc(userId).set({
      assignedImpulseMap: map,
      lastAccess: firebase.firestore.Timestamp.now()
    }, { merge: true }).catch(error => {
      console.log('Something went wrong with syncing displayName: ' + error)
    })
  },
  async getUserDataForHighscore ({ commit }) {
    const firebaseList = []
    const list = []
    await $db.collection(COLLECTION_NAME)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          firebaseList.push({
            displayName: doc.data().displayName,
            impulses: doc.data().assignedImpulseMap
          })
        })
      })
      // Für jeden User in unserer Datenbank wird folgendes ausgeführt:
    firebaseList.forEach(function (user) {
      if (user.impulses !== undefined) {
        // Impulse mapppen
        const impulseList = user.impulses.map(impulse => impulse.points)
        // Punkte rausfiltern welche, älter als 30 Tage sind.
        const unRedPoint = impulseList.map(impulse =>
          impulse.filter(impulse => new Date((impulse.date.seconds * 1000) + MONTH_IN_MILLISECONDS).getTime() > new Date().getTime()))
        // Fehler abfangen, falls jemand keine Punkte hat.
        const unRedPoint1 = unRedPoint.filter(pointArray => pointArray.length > 0)
        // Fehler abfangen falls jemand einen Punkt hat, der einen falschen Zeitpunkt hat.
        if (unRedPoint1.every(pointArray => pointArray.length > 0) && unRedPoint1.length > 0) {
        // Punkte zusammenrechnenz
          const point = unRedPoint1.map(impulse => impulse.map(timeStamp => timeStamp.points).reduce((acc, cur) => acc + cur))
          // Punkte weiter zusammenrechnen
          const wholeReducedPoints = point.map(reducePoint => reducePoint).reduce((acc, cur) => acc + cur)
          // Punkte in eine Liste schieben, welche wir dann weiter verarbeiten.
          list.push({ user: user.displayName || 'Anonym', points: wholeReducedPoints })
        }
      }
    })
    list.sort(function (a, b) {
      const pointsA = a.points
      const pointsB = b.points

      if (pointsA > pointsB) return -1
      if (pointsA < pointsB) return 1
      return 0
    })
    var rank = 1
    for (var i = 0; i < list.length; i++) {
      if (i > 0 && list[i].points < list[i - 1].points) {
        rank++
      }
      if (rank === 1) {
        list[i]._rowVariant = 'gold'
      }
      if (rank === 2) {
        list[i]._rowVariant = 'silver'
      }
      if (rank === 3) {
        list[i]._rowVariant = 'bronze'
      }
      list[i].rank = rank
    }
    commit('SET_USERARRAY_FOR_HIGHSCORE_PAGE', list)
  },
  addPointsToUser ({ getters, rootGetters, commit }, impulseId) {
    const userId = $auth.currentUser.uid
    const assignedImpulseMap = getters.assignedImpulseMap
    const arrayWithAddedPoints = [...assignedImpulseMap]
    const indexOfCurrentImpulse = assignedImpulseMap.findIndex(impulse => impulse.impulseId === impulseId)
    const impulsePoints = rootGetters['Impulse/getSelectedPoints'](impulseId)
    const todayDate = new Date()
    todayDate.setHours(0, 0, 0, 0)
    const points = {
      date: firebase.firestore.Timestamp.fromDate(todayDate),
      points: impulsePoints || POINTS_INITIAL
    }
    commit('ADD_POINTS_TO_USER', { points, indexOfCurrentImpulse })

    return $db.collection(COLLECTION_NAME).doc(userId).set({
      assignedImpulseMap: arrayWithAddedPoints,
      lastAccess: firebase.firestore.Timestamp.now()
    }, { merge: true }).catch(error => {
      console.log('Something went wrong with syncing displayName: ' + error)
    })
  },
  removeUser: firestoreAction(async (context) => {
    const userId = $auth.currentUser.uid
    $db.collection(COLLECTION_NAME).doc(userId).delete()
      .then((docRef) => {
        Vue.notify({
          group: 'notification',
          title: 'Erfolgreich',
          type: 'success',
          text: 'User gelöscht'
        })
      })
      .catch((error) => {
        Vue.notify({
          group: 'notification',
          title: 'Error',
          type: 'danger',
          text: 'Error writing impulse: ' + error
        })
      })
  })
}

export const getters = {
  userData: (state) => {
    return state.userdata
  },
  isAdmin (state) {
    return (state.userdata && state.userdata.isAdmin) ? state.userdata.isAdmin : false
  },
  assignedImpulseMap: (state) => {
    if (state.userdata !== null) {
      return state.userdata.assignedImpulseMap || []
    } else {
      return []
    }
  },
  impulseIsAssigned: (state) => (impulseId) => {
    const assignedImpulseMap = state.userdata.assignedImpulseMap || []
    if (Array.isArray(assignedImpulseMap)) {
      const found = assignedImpulseMap.some(impulse => impulse.impulseId === impulseId)
      return !!found
    } else {
      return false
    }
  },
  allPointsFromImpulse: (state) => (impulseId) => {
    const assignedImpulseMap = state.userdata.assignedImpulseMap
    const currentImpulse = assignedImpulseMap.find(impulse => impulse.impulseId === impulseId)
    const timeStampArray = currentImpulse.points
    const allPoints = timeStampArray.map(timeStamp => timeStamp.points).reduce((accumulator, currentValue) => accumulator + currentValue)
    return allPoints
  },
  impulseIsCheckable: (state) => (impulseId) => {
    const assignedImpulseMap = state.userdata.assignedImpulseMap
    const currentImpulse = assignedImpulseMap.find(impulse => impulse.impulseId === impulseId)
    const timeStampArray = currentImpulse.points
    const lastTimeStamp = timeStampArray[timeStampArray.length - 1]
    const todayDate = new Date()
    todayDate.setHours(0, 0, 0, 0)
    const today = firebase.firestore.Timestamp.fromDate(todayDate)
    const todayPlusOneDay = firebase.firestore.Timestamp.fromDate(
      new Date((lastTimeStamp.date.seconds * 1000) + 86400000))
    if (timeStampArray.length === 1) {
      return true
    }
    return today > todayPlusOneDay
  },
  displayName: (state) => {
    return state.userdata ? state.userdata.displayName : null
  },
  userForHighscorePage: (state) => {
    return state.usersForHighscorePage
  }
}

export const mutations = {
  SET_USERARRAY_FOR_HIGHSCORE_PAGE (state, users) {
    state.usersForHighscorePage = users
  },

  ADD_ENTRY_TO_IMPULSEMAP (state, { impulseId, impulsePoints }) {
    if (!state.userdata.assignedImpulseMap) {
      state.userdata.assignedImpulseMap = []
    }
    state.userdata.assignedImpulseMap.push({
      impulseId: impulseId,
      points: [
        {
          date: new Date(),
          points: impulsePoints || POINTS_INITIAL
        }
      ]
    })
  },
  ADD_POINTS_TO_USER (state, { points, indexOfCurrentImpulse }) {
    const array = state.userdata.assignedImpulseMap
    const spreadArray = [...array]
    spreadArray[indexOfCurrentImpulse].points.push(points)
  }
}
