import 'firebase/firestore'
import { $db } from '@/firebase-config'

const COLLECTION_NAME = 'challenge_stats'

export const namespaced = true

export const state = {
  challengeStatsList: [],
  challengeStats: {
    points: '',
    scoring_id: '',
    uid: ''
  },
  loading: false
}

export const actions = {
  fetchList ({ commit, getters }) {
    if (getters.getList.length === 0) {
      commit('SET_LOADING', true)
      const list = []
      $db
        .collection(COLLECTION_NAME)
        .orderBy('points', 'desc')
        .get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
            list.push({
              points: doc.data().points,
              scoring_id: doc.data().scoring_id,
              uid: doc.data().uid
            })
          })
          commit('CHALLENGE_STATS_LIST_LOADED', list)
          commit('SET_LOADING', false)
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
          commit('SET_LOADING', false)
        })
    } else {
      console.log('already loaded')
    }
  },
  fetchById ({ commit, getters }, uid) {
    if (!uid) return

    commit('SET_LOADING', true)
    let challengeStats = getters.getSelected(uid)

    if (challengeStats) {
      commit('SET_CHALLENGE_STATS', challengeStats)
      commit('SET_LOADING', false)
    } else {
      $db
        .collection(COLLECTION_NAME)
        .doc(uid).get()
        .then(doc => {
          if (!doc.exists) {
            console.log('document not found uid: ', uid)
            commit('SET_LOADING', false)
          } else {
            challengeStats = {
              points: doc.points,
              scoring_id: doc.data().scoring_id,
              uid: doc.data().uid
            }
          }
          commit('SET_CHALLENGE_STATS', challengeStats)
          commit('SET_LOADING', false)
        })
        .catch((error) => {
          console.log('Error getting documents: ', error)
          commit('SET_LOADING', false)
        })
    }
  }
}

export const getters = {
  getList: (state) => {
    return state.challengeStatsList
  },
  getSelected: (state) => (uid) => {
    return state.challengeStatsList.find(challengeStats => challengeStats.uid === uid)
  }
}

export const mutations = {
  SET_LOADING (state, flag) {
    state.loading = flag
  },
  CHALLENGE_STATS_LIST_LOADED (state, challengeStatsList) {
    state.challengeStatsList = challengeStatsList
  }
}
