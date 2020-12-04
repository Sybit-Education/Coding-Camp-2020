import { $db } from '@/firebase-config'

const COLLECTION_NAME = 'category'

export const namespaced = true

export const state = {
  categoryList: [],
  loaded: false
}

export const actions = {
  async fetchList ({ commit, getters }) {
    // just use cached version to reduce loading
    if (getters.isLoaded) return

    const list = []
    await $db.collection(COLLECTION_NAME)
      .orderBy('name', 'asc')
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          list.push({ value: doc.id, ...doc.data() })
        })
        var source = snapshot.metadata.fromCache ? 'local cache' : 'server'
        console.log('Data came from ' + source)
        commit('SET_LIST', list)
        commit('SET_LOADED', true)
      })
  }
}

export const getters = {
  getList: (state) => {
    return state.categoryList
  },
  getSelected: (state) => (id) => {
    return state.categoryList.find(category => category.value === id)
  },
  isLoaded: (state) => {
    return state.loaded
  }
}

export const mutations = {
  SET_LIST (state, list) {
    state.categoryList = list
  },

  SET_LOADED (state, flag) {
    state.loaded = flag
  }
}
