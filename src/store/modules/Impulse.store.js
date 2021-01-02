import { $db } from '@/firebase-config'
import firebase from 'firebase/app'
import 'firebase/firestore'
import Vue from 'vue'
import { firestoreAction } from 'vuexfire'

const COLLECTION_NAME = 'impulse'

export const PUBLISHING_STATUS_ONLINE = 'online'
export const PUBLISHING_STATUS_REVIEW = 'review'
export const PUBLISHING_STATUS_DRAFT = 'draft'

export const namespaced = true

export const state = {
  impulseList: [],
  impulseListAdmin: []
}

export const actions = {
  fetchList: firestoreAction(({ bindFirestoreRef }) => {
    const now = firebase.firestore.Timestamp.fromDate(new Date())

    const serialize = (snapshot) => {
      return Object.defineProperty(snapshot.data(), 'id',
        { value: snapshot.id, enumerable: true })
    }
    bindFirestoreRef(
      'impulseList',
      $db.collection(COLLECTION_NAME)
        .where('publishingDate', '<=', now)
        .where('publishingState', '==', PUBLISHING_STATUS_ONLINE)
        .orderBy('publishingDate', 'desc'),
      { serialize })
  }),
  fetchListAdmin: firestoreAction(({ bindFirestoreRef }) => {
    const serialize = (snapshot) => {
      return Object.defineProperty(snapshot.data(), 'id',
        { value: snapshot.id, enumerable: true })
    }
    bindFirestoreRef(
      'impulseListAdmin',
      $db.collection(COLLECTION_NAME)
        .orderBy('publishingDate', 'desc'),
      { serialize })
  }),
  fetchById: firestoreAction(async ({ bindFirestoreRef }, id) => {
    if (!id) return

    bindFirestoreRef(
      'impulse',
      await $db.collection(COLLECTION_NAME).doc(id)
    )
  }),
  update: firestoreAction(({ state }, impulse) => {
    // we first create a copy that excludes `id`
    // this exclusion is automatic because `id` is non-enumerable
    const toSend = { ...impulse }
    $db.collection(COLLECTION_NAME).doc(impulse.id)
      .update(toSend)
      .then(() => {
        Vue.notify({
          group: 'notification',
          title: 'Success',
          type: 'success',
          text: 'Impulse updated'
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
  }),
  /** update on property of the selected impulse by given value */
  updateProperty: firestoreAction(({ commit }, { impulse, prop, value }) => {
    $db.collection(COLLECTION_NAME).doc(impulse.id).update({ [prop]: value })
    commit('PROPERTY_UPDATED', { selected: impulse, prop: prop, value: value })
  }),
  /** add new impulse */
  add: firestoreAction(async (context, impulse) => {
    $db.collection(COLLECTION_NAME).add(impulse)
      .then((docRef) => {
        Vue.notify({
          group: 'notification',
          title: 'Success',
          type: 'success',
          text: 'Impulse added'
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
  }),
  /** delete impulse with given uid  */
  delete: firestoreAction((context, impulse) => {
    $db.collection(COLLECTION_NAME).doc(impulse.id).delete()
      .then(() => {
        Vue.notify({
          group: 'notification',
          title: 'Success',
          type: 'success',
          text: 'Impulse deleted'
        })
      })
      .catch((error) => {
        Vue.notify({
          group: 'notification',
          title: 'Error',
          type: 'danger',
          text: 'Error deleting impulse: ' + error
        })
      })
  })
}

export const getters = {
  getList: (state) => {
    return state.impulseList
  },
  getListAdmin: (state) => {
    return state.impulseListAdmin
  },
  getSelected: (state) => (id) => {
    return state.impulseList.find(impulse => impulse.id === id)
  },
  getSelectedPoints: (state) => (id) => {
    const selectedImpulse = state.impulseList.find(impulse => impulse.id === id)
    return selectedImpulse.points
  }
}

export const mutations = {
  PROPERTY_UPDATED (state, payload) {
    payload.selected[payload.prop] = payload.value
    // update in list too
    var foundIndex = state.impulseList.findIndex(item => item.id === payload.id)
    state.impulseList[foundIndex] = payload
  }
}
