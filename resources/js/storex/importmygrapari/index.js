import Axios from '../../config/Axios'
import store from '../../store'
import adddataimportmygrapari from './import'

const dataimportmygrapari = {
    namespaced: true,
    state: () => ({
        list_importmygrapari: {},
    }),
    mutations: {
        SET_LIST_IMPORT_MYGRAPARI(state, payload){
            state.list_importmygrapari = payload;
        },
    },
    getters: {

    },
    actions: {
        getListImportMyGrapari({commit, state, dispatch}, page=1){
            dispatch('ui/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
            Axios.get('importmygrapari', {
                params: {
                    page: page,
                }
            })
            .then(function(response){
                commit('SET_LIST_IMPORT_MYGRAPARI', response.data)
            })
            .catch(function(error){
                console.log(error)
            })
            .finally(() => dispatch('ui/setLoader', false, {root:true}));

        }
    }
}

export {dataimportmygrapari, adddataimportmygrapari};
