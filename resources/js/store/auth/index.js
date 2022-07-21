const auth = {
    namespaced: true,
    state: () => ({
        token: null,
        isAuthenticated: false,
        user: null,
        permission: null,
    }),
    mutations: {
        SET_TOKEN_USER(state, payload){
            state.token = payload.token
            state.isAuthenticated = true
            state.user = payload.user
            state.permission = payload.permision
        },
        CLEAR_TOKEN_USER(state){
            state.token = null
            state.isAuthenticated = false
            state.user = null
            state.permission = null
        },
    },
    getters: {
        getisAuthenticated(state){
            return state.isAuthenticated;
        }
    },
    actions: {
        setTokenUser({commit}, payload){
            commit('CLEAR_TOKEN_USER', payload);
            commit('SET_TOKEN_USER', payload)
        },
        clearTokenUser({commit}){
            commit('CLEAR_TOKEN_USER');
        },
    }
}

export default auth;
