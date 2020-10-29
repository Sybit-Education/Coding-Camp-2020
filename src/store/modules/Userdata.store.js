import 'firebase/firestore'
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
      lastLogin: new Date()
    }, { merge: true }).catch(error => {
      console.log('Something went wrong with syncing user: ' + error)
    })
  },
  setDataByCreation () {
    const currentUser = $auth.currentUser
    return $db.collection(COLLECTION_NAME).doc(currentUser.uid).set({
      email: currentUser.email,
      lastLogin: new Date(),
      createdAt: new Date()
    }, { merge: true }).catch(error => {
      console.log('Something went wrong by creation user: ' + error)
    })
  },
  fetchById: firestoreAction(async ({ bindFirestoreRef }, id) => {
    if (!id) {
      return
    }

    bindFirestoreRef('userdata', await $db.collection(COLLECTION_NAME).doc(id))
  }),
  saveDisplayName ({ commit }, displayName) {
    const userId = $auth.currentUser.uid
    return $db.collection(COLLECTION_NAME).doc(userId).set({
      displayName: displayName
    }, { merge: true }).catch(error => {
      console.log('Something went wrong with syncing displayName: ' + error)
    })
  },
  assignImpulse ({ getters, rootGetters }, impulseId) {
    const userId = $auth.currentUser.uid
    const map = getters.assignedImpulseMap
    const impulsePoints = rootGetters['Impulse/getSelectedPoints'](impulseId)
    map.push({
      impulseId: impulseId,
      points: [
        {
          date: new Date(),
          points: impulsePoints || POINTS_INITIAL
        }
      ]
    })
    return $db.collection(COLLECTION_NAME).doc(userId).set({
      assignedImpulseMap: map
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
            impluses: doc.data().assignedImpulseMap
          })
        })
      })
    firebaseList.forEach(function (user) {
      if (user.impluses !== undefined) {
        const impulseList = user.impluses.map(impulse => impulse.points)
        const points = impulseList.map(impulse =>
          impulse.filter(impulse => new Date((impulse.date.seconds * 1000) + MONTH_IN_MILLISECONDS).getTime() > new Date().getTime())
            .map(timestamp => timestamp.points)
            .reduce((acc, cur) => acc + cur))
          .reduce((acc, cur) => acc + cur)
        list.push({ user: user.displayName, points: points })
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
  addPointsToUser ({ getters, rootGetters }, impulseId) {
    const userId = $auth.currentUser.uid
    const assignedImpulseMap = getters.assignedImpulseMap
    const impulsePoints = rootGetters['Impulse/getSelectedPoints'](impulseId)
    const indexOfCurrentImpulse = assignedImpulseMap.findIndex(impulse => impulse.impulseId === impulseId)
    const points = {
      date: new Date(),
      points: impulsePoints || POINTS_INITIAL
    }
    const arrayWithAddedPoints = [...assignedImpulseMap]
    arrayWithAddedPoints[indexOfCurrentImpulse].points.push(points)

    return $db.collection(COLLECTION_NAME).doc(userId).set({
      assignedImpulseMap: arrayWithAddedPoints
    }).catch(error => {
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
    return state.userdata.assignedImpulseMap || []
  },
  impulseIsAssigned: (state) => (impulseId) => {
    const assignedImpulseMap = state.userdata.assignedImpulseMap
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
    const today = new Date().getTime()
    const todayPlusOneDay = new Date((lastTimeStamp.date.seconds * 1000) + 86400000).getTime()
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
  }
}
