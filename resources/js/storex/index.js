import Vue from 'vue'
import createPersistedState from "vuex-persistedstate";
import Vuex from 'vuex'

import ui from './ui';
import auth from './auth';
import { store } from '../modules'

Vue.use(Vuex)

const ui_persisted = createPersistedState({
    paths: ['UI', 'AUTH']
})

let join_store = Object.assign(store, {UI: ui, AUTH: auth})
// console.log(store)

export default new Vuex.Store({
    modules: join_store,
    plugins: [ui_persisted],
})
