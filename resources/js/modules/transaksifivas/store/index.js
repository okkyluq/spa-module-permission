import Axios from '../../../config/Axios'

export default {
    state: {
        list_transaksifivas: [],
        meta: {}
    },
    getters: {},
    mutations: {
        SET_LIST_TRANSAKSI_FIVAS(state, payload){
            state.list_transaksifivas = payload.data;
            state.meta = payload.meta;
        },
    },
    actions: {
        getListTransaksiFivas({commit, state, rootState, dispatch}, page=1){
            dispatch('UI/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${rootState.AUTH.token}`;
            Axios.get('transaksifivas', {
                params: {
                    page: page,
                }
            })
            .then(function(response){
                commit('SET_LIST_TRANSAKSI_FIVAS', response.data)

            })
            .catch(function(error){
                console.log(error)
            })
            .finally(() => dispatch('UI/setLoader', false, {root:true}));

        }
    }
}
