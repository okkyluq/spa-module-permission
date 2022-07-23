import Axios from '../../../config/Axios'
export default {
    state: {
        list_produk: [],
        meta: {}
    },
    getters: {},
    mutations: {
        SET_LIST_PRODUK(state, payload){
            state.list_produk = payload.data;
            state.meta = payload.meta;
        },
    },
    actions: {
        getListProduk({commit, state, rootState, dispatch}, page=1){
            dispatch('UI/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${rootState.AUTH.token}`;
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
            .finally(() => dispatch('UI/setLoader', false, {root:true}));

        }
    }
}
