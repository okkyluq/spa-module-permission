import Axios from '../../config/Axios'
import store from '../../store'

const otoritasmenu = {
    namespaced: true,
    state: () => ({
        all_menu :{},
        all_role: {},
        menu_checked : {},
    }),
    mutations: {
        RESET_MENU_CHECKED(state){
            state.menu_checked = {}
        },
        SET_ALL_MENU(state, payload){
            state.all_menu = payload;
        },
        SET_ALL_ROLE(state, payload){
            state.all_role = payload;
        },
        SET_CHECKED_MENU(state, payload){
            Vue.set(state.menu_checked, payload.menu, payload.value)
        },
        UPDATE_ROLE_MENU(state, payload){
            state.menu_checked[payload.menu] = payload.value
        }
    },
    getters: {

    },
    actions: {
        getAllMenu({commit, dispatch}){
            dispatch('ui/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
            Axios.get('getallmenu')
            .then(function(response){
                commit('SET_ALL_MENU', response.data.data_menu);
            })
            .catch(function(errors){
                alert('masalah cek console');
                console.log(errors)
            })
            .finally(() => dispatch('ui/setLoader', false, {root:true}));
        },
        getRole({commit, dispatch}){
            dispatch('ui/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
            Axios.get('getrole')
            .then(function(response){
                commit('SET_ALL_ROLE', response.data.data)
            })
            .catch(function(errors){
                alert('masalah cek console');
                console.log(errors)
            })
            .finally(() => dispatch('ui/setLoader', false, {root:true}));
        },
        getOtoritasByRole({commit, dispatch}, payload){
            if(payload != ''){
                dispatch('ui/setLoader', true, {root:true});
                commit('RESET_MENU_CHECKED')
                Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
                Axios.get('getotoritasrole', { params: { role_id: payload } })
                .then(function(response){
                    let otoritas = response.data.data
                    otoritas.forEach(function (value) {
                        commit('SET_CHECKED_MENU', {
                            menu: value.name,
                            value: true
                        })
                    });
                })
                .catch(function(errors){
                    alert('masalah cek console');
                    console.log(errors)
                })
                .finally(() => dispatch('ui/setLoader', false, {root:true}));
            } else {
                commit('RESET_MENU_CHECKED')
            }
        },
        updateRoleMenu({commit}, payload){
            commit('UPDATE_ROLE_MENU', payload);
        },

    }
}

export default otoritasmenu;
