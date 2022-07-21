<template>
    <b-sidebar title="Sidebar" no-close-on-esc no-close-on-backdrop backdrop bg-variant="white" backdrop-variant="dark" no-header right
        @hidden="clearForm" @shown="clearForm" :visible="visible_sidebar"
    >
        <div class="block block-add-menu px-5 py-2" :class="{'block-mode-loading' : $store.state.ui.loader}">
			<h2 class="content-heading">Buat Transaksi Fivas</h2>
			<div class="row">
				<div class="col-sm-12">
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">Tanggal</label>
						<div class="col-sm-6">
                            <b-form-datepicker :value="form.date" class="mb-2" locale="id" :class="{ 'is-invalid' : errors.date }"
                                placeholder="Pilih Tanggal"
                                @input="updateValueForm({
                                    name : 'date',
									value : $event
                                })"
                            />
                            <div class="invalid-feedback" v-if="errors.date">{{ errors.date[0] }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">MSISDN</label>
						<div class="col-sm-6">
                            <the-mask class="form-control" :mask="['#############', '############']"
                                placeholder="6281XXXXXXXXX"
                                :class="{ 'is-invalid' : errors.msisdn }"
                                :value="form.msisdn"
                                @input="updateValueForm({
									name : 'msisdn',
									value : $event
								})"
                            />
                            <div class="invalid-feedback" v-if="errors.msisdn">{{ errors.msisdn[0] }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">Jenis Transaksi</label>
						<div class="col-sm-6 mt-1">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="radio-prepaid" name="jenis_transaksi" value="0"
                                    :class="{ 'is-invalid' : errors.jenis_transaksi }"
                                    @change="updateValueForm({
                                        name : 'jenis_transaksi',
                                        value : '0'
								    })"
                                >
                                <label class="form-check-label" for="radio-prepaid">Prepaid</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="radio-postpaid" name="jenis_transaksi" value="1"
                                    :class="{ 'is-invalid' : errors.jenis_transaksi }"
                                    @change="updateValueForm({
                                        name : 'jenis_transaksi',
                                        value : '1'
								    })"
                                >
                                <label class="form-check-label" for="radio-postpaid">Postpaid</label>
                            </div>
                            <div class="invalid-feedback" v-if="errors.jenis_transaksi">{{ errors.jenis_transaksi[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">Channel</label>
						<div class="col-sm-6">
                            <select class="form-control" :value="form.channel"
                                :class="{ 'is-invalid' : errors.channel }"
                                @change="updateValueForm({
                                        name : 'channel',
                                        value : $event.target.value
                                })"
                            >
                                <option value="">Pilih Channel</option>
                                <option value="0">Mobile</option>
                                <option value="1">OBC</option>
                                <option value="2">Virtual Assistant</option>
                                <option value="3">Walk-In</option>
                            </select>
                            <div class="invalid-feedback" v-if="errors.channel">{{ errors.channel[0] }}</div>
						</div>
					</div>
                    <div class="row mb-2" v-if="form.channel === '2'">
						<label class="col-sm-3 col-form-label">Referal Code CSR</label>
						<div class="col-sm-6">
                            <input type="text" class="form-control" :value="form.referal_code_csr" placeholder="Ketikan Referal Code CSR"
                                :class="{ 'is-invalid' : errors.referal_code_csr }"
                                @input="updateValueForm({
                                    name : 'referal_code_csr',
                                    value : $event.target.value
                                })"
                            >
                            <div class="invalid-feedback" v-if="errors.referal_code_csr">{{ errors.referal_code_csr[0] }}</div>
						</div>
					</div>
                    <div class="row mb-2">
                        <table class="table table-bordered">
                            <thead>
                                <tr class="table-dark">
                                    <th width="50" class="text-center">No.</th>
                                    <th>Nama Produk</th>
                                    <th width="200" class="text-center">Harga</th>
                                    <th width="50" class="text-center"><i class="fa fa-cog"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(detail, index) in form.detail" :key="index">
                                    <td class="text-center">{{ index+1 }}</td>
                                    <td>
                                        <multiselect :value="detail.produk"
                                            selectedLabel="Terpilih"
                                            label="nama_produk"
                                            placeholder="Pilih Produk" :options="options[index].produk" :searchable="true"
                                            @search-change="asyncFindProduk({ query: $event, index: index })"
                                            @select="
                                            updateValueFormDetail({ name : 'produk', index : index, value : $event }),
                                            updateValueFormDetail({ name : 'harga', index : index, value : null }),
                                            setListHargaProduk($event, index)"
                                        >
                                           <template slot="singleLabel" slot-scope="{ option }">
                                                <strong>{{ option.nama_produk }}</strong>
                                            </template>
                                        </multiselect>
                                        <div class="text-danger" style="font-size: 0.875rem;" v-if="errors[`detail.${index}.id`]">{{ errors[`detail.${index}.id`][0] }}</div>
                                    </td>
                                    <td>
                                        <multiselect :value="detail.harga"
                                            placeholder="Harga" :options="options[index].harga" :searchable="true"
                                            selectLabel=""
                                            deselectLabel=""
                                            @select="updateValueFormDetail({
                                                name : 'harga',
                                                index : index,
                                                value : $event
                                            })"
                                        >
                                           <template slot="singleLabel" slot-scope="{ option }">
                                                <strong>{{ option | currency('Rp.', 0) }}</strong>
                                            </template>
                                            <template slot="option" slot-scope="{option}">
                                                <strong>{{ option | currency('Rp.', 0) }}</strong>
                                            </template>
                                        </multiselect>
                                        <div class="text-danger" style="font-size: 0.875rem;" v-if="errors[`detail.${index}.harga`]">{{ errors[`detail.${index}.harga`][0] }}</div>
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-sm btn-danger" v-if="index !== 0" @click="removeLineFormDetail(index)">
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                            <tfoot>
                                <tr>
                                    <td colspan="4" class="text-center">
                                        <button type="button" class="btn btn-sm btn-light" @click="addLine">
                                            <i class="fa fa-plus-circle"></i> Tambah Baris
                                        </button>
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
					</div>
                    <div class="row mb-2">
						<div class="col-sm-12 text-end">
                            <button @click="$store.dispatch('addtransaksifivas/toggleSidebar', false)" type="button" class="btn btn-danger">Batal</button>
                            <button @click="sendForm" type="button" class="btn btn-success">Simpan</button>
						</div>
					</div>
				</div>
			</div>
        </div>

    </b-sidebar>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Axios from '../../config/Axios';
export default {
    components: {

    },
	data() {
		return {
            errors: {},
            options: [{produk: [], harga: []}],
		}
	},
    computed: {
        ...mapState('addtransaksifivas', {
            form: state => state.form,
            visible_sidebar: state => state.visible_sidebar
        })
    },
    methods: {
        ...mapActions('addtransaksifivas', {
            clearForm: 'clearForm',
            updateValueForm: 'updateValueForm',
            updateValueFormDetail: 'updateValueFormDetail',
            addLineFormDetail: 'addLineFormDetail',
            removeLineFormDetail: 'removeLineFormDetail'
        }),
        asyncFindProduk(data){
            if(data.query.length >= 3){
                let index_element = data.index;
                Axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.auth.token}`;
                Axios.get('dataproduk/getdataprodukbyname', {params: { q: data.query }})
                    .then(response => {
                        let respon = response.data.data;
                        this.options[index_element].produk = respon.map((list) => {
                            return {
                                id: list.id,
                                nama_produk: list.nama_produk,
                                list_harga : list.harga_list
                            }
                        })
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        setListHargaProduk(data, index){
            this.options[index].harga = data.list_harga.map(list => list.harga);
        },
        sendForm(){
            this.errors = {}
            let self = this;
			let formData = {
                date : this.form.date,
                msisdn : this.form.msisdn,
                jenis_transaksi : this.form.jenis_transaksi,
                channel : this.form.channel,
                referal_code_csr : this.form.referal_code_csr,
                detail : this.form.detail.map((value, index) => {
                    return {
                        id: value?.produk?.id || null,
                        harga: value?.harga || null,
                    }
                })
			}
            self.$store.dispatch('ui/setLoader', true);
            Axios.defaults.headers.common['Authorization'] = `Bearer ${self.$store.state.auth.token}`;
			Axios.post('transaksifivas', formData)
				.then(response => {
                    if(response.status === 200){
                        self.$store.dispatch('addtransaksifivas/toggleSidebar', false);
                        self.$store.dispatch('transaksifivas/getListTransaksiFivas');
                    }
				})
				.catch(error => {
                    let errors = error.response;
                    if(errors.status === 422){
                        self.errors = errors.data.errors;
                    }
                    if(errors.status === 403){
                         this.$swal.fire({
                            icon: 'warning',
                            title: 'Peringatan',
                            text: errors.data.message,
                        })
                    }
				})
				.finally(() => self.$store.dispatch('ui/setLoader', false));
        },
        addLine(){
            this.options.push({produk: [], harga: []});
            this.addLineFormDetail()
        },
        tes(data){
            console.log(data);
        },
    }
}
</script>
<style>
	.b-sidebar {
		width:60em;
	}
    .block.block-add-menu {
		box-shadow: none;
	}
</style>
