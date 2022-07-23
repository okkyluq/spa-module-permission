import Axios from '../../config/Axios'
import store from '../../store'
import addtransaksifivas from './add';
import edittransaksifivas from './edit';

const transaksifivas = {
    namespaced: true,
    state: () => ({
        list_transaksifivas: [],
        meta: {}
    }),
    mutations: {
        SET_LIST_TRANSAKSI_FIVAS(state, payload){
            state.list_transaksifivas = payload.data;
            state.meta = payload.meta;
        },
    },
    getters: {

    },
    actions: {
        getListTransaksiFivas({commit, state, dispatch}, page=1){
            dispatch('ui/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
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
            .finally(() => dispatch('ui/setLoader', false, {root:true}));

        }
    },
}

export { transaksifivas, addtransaksifivas, edittransaksifivas };
