import Axios from '../../../config/Axios'
export default {
    state: {
        list_menu: {},
    },
    getters: {},
    mutations: {
        SET_LIST_MENU(state, payload){
            state.list_menu = payload;
        },
    },
    actions: {
        getListMenu({commit, state, rootState , dispatch}, page=1){
            dispatch('UI/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${rootState.AUTH.token}`;
            Axios.get('datamenu', {
                params: {
                    page: page,
                }
            })
            .then(function(response){
                commit('SET_LIST_MENU', response.data)
            })
            .catch(function(error){
                console.log(error)
            })
            .finally(() => dispatch('UI/setLoader', false, {root:true}));

        }
    }
}
