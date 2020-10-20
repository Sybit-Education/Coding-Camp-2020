import 'firebase/firestore'
import { firestoreAction } from 'vuexfire'
import { $db } from '@/firebase-config'

const COLLECTION_NAME = 'category'

export const namespaced = true

export const state = {
  categoryList: []
}

export const actions = {
  fetchList: firestoreAction(({ bindFirestoreRef }) => {
    const serialize = (snapshot) => {
      const mapped = Object.defineProperty(snapshot.data(), 'value',
        {
          value: snapshot.id,
          enumerable: true
        })
      return mapped
    }
    bindFirestoreRef(
      'categoryList',
      $db.collection(COLLECTION_NAME).orderBy('name', 'asc'),
      { serialize }
    )
  })
}

export const getters = {
  getList: (state) => {
    return state.categoryList
  },
  getSelected: (state) => (id) => {
    return state.categoryList.find(category => category.value === id)
  }
}
