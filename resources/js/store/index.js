import Vue from 'vue'
import Vuex from 'vuex'
import ui from './ui';
import auth from './auth';
import datamenu from './datamenu';
import adddatamenu from './datamenu/add.js';
import otoritasmenu from './otoritasmenu/index.js';
import createPersistedState from "vuex-persistedstate";
import dataproduk from './dataproduk/index';
import adddataproduk from './dataproduk/add';
import editdataproduk from './dataproduk/edit';
import dataimportmygrapari from './importmygrapari/index';
import adddataimportmygrapari from './importmygrapari/import';
import transaksifivas from './transaksifivas/index';
import addtransaksifivas from './transaksifivas/add';
import edittransaksifivas from './transaksifivas/edit';

Vue.use(Vuex)

const ui_persisted = createPersistedState({
    paths: ['ui', 'auth']
})

export default new Vuex.Store({
    modules: {
        ui,
        auth,
        datamenu,adddatamenu,
        otoritasmenu,
        dataproduk,adddataproduk,editdataproduk,
        dataimportmygrapari, adddataimportmygrapari,
        transaksifivas,addtransaksifivas, edittransaksifivas
    },
    plugins: [ui_persisted],
})
