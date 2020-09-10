import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations } from 'vuexfire'
import createLogger from 'vuex/dist/logger'

// import the auto exporter
import modules from './modules'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules, // all your modules automatically imported :)
  // Making sure that we're doing
  // everything correctly by enabling
  // strict mode in the dev environment.
  strict: process.env.NODE_ENV !== 'production',
  mutations: {
    ...vuexfireMutations
  },
  plugins: debug ? [createLogger()] : []
})
