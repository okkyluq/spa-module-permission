import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
import ui from './storex/ui';
import auth from './storex/auth';
import { store } from './modules'
Vue.use(Vuex);

const ui_persisted = createPersistedState({
    paths: ['UI', 'AUTH']
})

let modules = Object.assign(store, {UI: ui, AUTH: auth})

export default new Vuex.Store({
    modules,
    plugins: [ui_persisted],
});
