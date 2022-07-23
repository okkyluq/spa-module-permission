export default {
    state: {
        form: {
            date : '',
            msisdn : '',
            jenis_transaksi : '0',
            channel : '',
            referal_code_csr : '',
            detail : [{produk : null, harga: null}]
        },
        visible_sidebar: false
    },
    getters: {},
    mutations: {
        TOGGLE_SIDEBAR(state, payload){
            state.visible_sidebar = payload
        },
        CLEAR_FORM(state){
            state.form = {
                date : '',
                msisdn : '',
                jenis_transaksi : '0',
                channel : '',
                referal_code_csr : '',
                detail : [{produk : null, harga: null}]
            }
        },
        UPDATE_VALUE_FORM(state, payload){
            state.form[payload.name] = payload.value;
        },
        UPDATE_VALUE_FORM_DETAIL(state, payload){
            state.form.detail[payload.index][payload.name] = payload.value;
        },
        ADD_LINE_FORM_DETAIL(state){
            state.form.detail.push({produk : null, harga: null})
        },
        REMOVE_LINE_FORM_DETAIL(state, index){
            state.form.detail.splice(index, 1);
        }
    },
    actions: {
        toggleSidebar({commit}, payload){
            commit('TOGGLE_SIDEBAR', payload);
        },
        clearForm({commit}){
            commit('CLEAR_FORM');
        },
        updateValueForm({commit}, payload){
            commit('UPDATE_VALUE_FORM', payload);
        },
        updateValueFormDetail({commit}, payload){
            commit('UPDATE_VALUE_FORM_DETAIL', payload);
        },
        addLineFormDetail({commit}){
            commit('ADD_LINE_FORM_DETAIL');
        },
        removeLineFormDetail({commit}, index){
            commit('REMOVE_LINE_FORM_DETAIL', index);
        }
    }
}
