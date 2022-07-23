import Axios from '../../config/Axios'
import store from '../../store'
import adddataproduk from './add'
import editdataproduk from './edit'


const dataproduk = {
    namespaced: true,
    state: () => ({
        list_produk: [],
        meta: {}
    }),
    mutations: {
        SET_LIST_PRODUK(state, payload){
            state.list_produk = payload.data;
            state.meta = payload.meta;
        },
    },
    getters: {

    },
    actions: {
        getListProduk({commit, state, dispatch}, page=1){
            dispatch('ui/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
            Axios.get('dataproduk', {
                params: {
                    page: page,
                }
            })
            .then(function(response){
                commit('SET_LIST_PRODUK', response.data)
            })
            .catch(function(error){
                console.log(error)
            })
            .finally(() => dispatch('ui/setLoader', false, {root:true}));

        }
    }
}

export {dataproduk, adddataproduk, editdataproduk};
