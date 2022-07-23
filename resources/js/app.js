
import Vue from 'vue';
import router from './router'

import vClickOutside from 'v-click-outside'
import VueFontAwesomePicker from "vfa-picker";
import Multiselect from 'vue-multiselect'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';
import can from '../js/directive/can';
import RedirectIfNotAcces from './mixins/RedirectIfNotAcces';
import CheckAcces from './mixins/CheckAcces';
import Vue2Filters from 'vue2-filters'
// import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Select2 from 'v-select2-component';
import 'sweetalert2/dist/sweetalert2.min.css';
import VueNumeric from 'vue-numeric'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import _ from 'lodash';
import 'vue-multiselect/dist/vue-multiselect.min.css';
import VueTheMask from 'vue-the-mask'
import store from './store'

// require('./bootstrap');
Vue.use(vClickOutside)
Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueFontAwesomePicker)
Vue.use(Vue2Filters)
Vue.component('multiselect', Multiselect)
Vue.use(VueSweetalert2);
Vue.component('Select2', Select2);
Vue.directive(can)
Vue.use(VueNumeric)
Vue.component('v-select', vSelect);
Vue.use(require('vue-moment'));
Vue.use(VueTheMask)

window.Vue = require('vue').default;



const app = new Vue({
    mixins: [RedirectIfNotAcces, CheckAcces],
    el: '#app',
    router,
    store
});
