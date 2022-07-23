import Axios from '../../../config/Axios'
export default {
    state: {
        list_importmygrapari: {},
    },
    getters: {},
    mutations: {
        SET_LIST_IMPORT_MYGRAPARI(state, payload){
            state.list_importmygrapari = payload;
        },
    },
    actions: {
        getListImportMyGrapari({commit, state, rootState, dispatch}, page=1){
            dispatch('UI/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${rootState.AUTH.token}`;
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
            .finally(() => dispatch('UI/setLoader', false, {root:true}));

        }
    }
}
