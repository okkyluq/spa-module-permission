import Axios from '../../config/Axios'
import store from '../../store'



const datamenu = {
    namespaced: true,
    state: () => ({
        list_menu: {},
    }),
    mutations: {
        SET_LIST_MENU(state, payload){
            state.list_menu = payload;
        },
    },
    getters: {

    },
    actions: {
        getListMenu({commit, state, dispatch}, page=1){
            dispatch('ui/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.token}`;
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
            .finally(() => dispatch('ui/setLoader', false, {root:true}));

        }
    }
}

export default datamenu;
