import Axios from '../../../config/Axios'

export default {
    state: {
        form: {
            id: '',
            date : '',
            msisdn : '',
            jenis_transaksi : '0',
            channel : '',
            referal_code_csr : '',
            detail : [{id: null, produk_id : null, harga: null}]
        },
        visible_sidebar: false
    },
    getters: {},
    mutations: {
        SET_DATA_FORM(state, payload){
            state.form = {
                id : payload.id,
                date : payload.date,
                msisdn : payload.msisdn,
                jenis_transaksi : payload.jenis_transaksi,
                channel : payload.channel,
                referal_code_csr : payload.referal_code_csr,
                detail : payload.detail_transaksi.map((value, index) => {
                    return {
                        id: value.id,
                        produk: value.produk,
                        harga: value.harga,
                    }
                })
            }
        },
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
                detail : [{id: null, produk_id : null, harga: null}]
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
        editData({commit, dispatch, rootState}, id){
            dispatch('UI/setLoader', true, {root:true});
            Axios.defaults.headers.common['Authorization'] = `Bearer ${rootState.AUTH.token}`;
            Axios.get('transaksifivas/'+id+'/edit')
            .then(function(response){
                commit('SET_DATA_FORM', response.data.data)
                dispatch('toggleSidebar', true)
            })
            .catch(function(error){
                console.log(error)
            })
            .finally(() => dispatch('UI/setLoader', false, {root:true}));
        },
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
