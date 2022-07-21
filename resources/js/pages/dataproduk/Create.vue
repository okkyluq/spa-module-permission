<template>
    <b-sidebar title="Sidebar" no-close-on-esc no-close-on-backdrop backdrop bg-variant="white" backdrop-variant="dark" no-header right
        @hidden="clearForm" @shown="clearForm" :visible="visible_sidebar"
    >
        <div class="block block-add-menu px-5 py-2" :class="{'block-mode-loading' : $store.state.ui.loader}">
			<h2 class="content-heading">Buat Data Produk</h2>
			<div class="row">
				<div class="col-sm-12">
					<div class="row mb-2">
						<label class="col-sm-3 col-form-label">Jenis Produk</label>
						<div class="col-sm-6 mt-1">
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="radio-psb" name="jenis_produk" :value="form.jenis_produk" checked
                                    @change="updateValueForm({
                                        name : 'jenis_produk',
                                        value : '0'
								    })"
                                >
                                <label class="form-check-label" for="radio-psb">PSB</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" id="radio-fivas" name="jenis_produk" :value="form.jenis_produk"
                                    @change="updateValueForm({
                                        name : 'jenis_produk',
                                        value : '1'
								    }), updateValueForm({
                                        name : 'kategori_produk',
                                        value : null
                                    })"
                                >
                                <label class="form-check-label" for="radio-fivas">Fivas</label>
                            </div>
                            <div class="invalid-feedback" v-if="errors.jenis_produk">{{ errors.jenis_produk[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2 ">
						<label class="col-sm-3 col-form-label">Kategori Produk</label>
						<div class="col-sm-6">
                            <select class="form-control" :value="form.kategori_produk" :disabled="form.jenis_produk === '1'" :class="{ 'is-invalid' : errors.kategori_produk }"
                                @change="updateValueForm({
									name : 'kategori_produk',
									value : $event.target.value.toString()
								})"
                            >
                                <option value="">Pilih Kategori</option>
                                <option value="0">Migrasi</option>
                                <option value="1">PSB</option>
                                <option value="2">Reaktivasi</option>
                                <option value="3">Uplift Gaspol</option>
                            </select>
                            <div class="invalid-feedback" v-if="errors.kategori_produk">{{ errors.kategori_produk[0] }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">Nama Produk</label>
						<div class="col-sm-6">
                            <MultiSelectVue
                                :classinvalid="{ 'is-invalid' : errors.nama_produk }"
                                :value="form.nama_produk" :taggable="true" :show-labels="false" :searchable="true" :allow-empty="true"
                                placeholder="Nama produk"
                                @selected="updateValueForm({ name : 'nama_produk', value : $event })"
                                @clear="updateValueForm({ name : 'nama_produk', value : null })"
                            />
                            <div class="invalid-feedback" v-if="errors.nama_produk">{{ errors.nama_produk[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2 ">
						<label class="col-sm-3 col-form-label">Harga Produk</label>
						<div class="col-sm-6">
                            <vue-numeric class="form-control" placeholder="Harga Produk"
                                separator=","
                                :class="{ 'is-invalid' : errors.harga }"
                                :value="form.harga"
                                @input="updateValueForm({
									name : 'harga',
									value : $event
								})"
                            />
                            <div class="invalid-feedback" v-if="errors.harga">{{ errors.harga[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<div class="col-sm-6 offset-sm-3">
                            <button @click="$store.dispatch('adddataproduk/toggleSidebar', false)" type="button" class="btn btn-danger">Batal</button>
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
import MultiSelectVue from '../../partials/select/MultiSelect.vue';
export default {
    components: {
        MultiSelectVue
    },
	data() {
		return {
            url: window.location.origin,
            selected: '',
            myValue: null,
            price: '',
            errors: {},
            options_list_produk: [],
		}
	},
    computed: {
        ...mapState('adddataproduk', {
            form: state => state.form,
            visible_sidebar: state => state.visible_sidebar
        })
    },
    methods: {
        ...mapActions('adddataproduk', {
            clearForm: 'clearForm',
            updateValueForm: 'updateValueForm',
        }),
        sendForm(){
            this.errors = {}
            let self = this;
			let formData = {
				jenis_produk : this.form.jenis_produk,
                kategori_produk : this.form.kategori_produk,
                nama_produk : this.form.nama_produk,
                harga : this.form.harga,
			}
            self.$store.dispatch('ui/setLoader', true);
            Axios.defaults.headers.common['Authorization'] = `Bearer ${self.$store.state.auth.token}`;
			Axios.post('dataproduk', formData)
				.then(response => {
                    if(response.status === 200){
                        self.$store.dispatch('adddataproduk/toggleSidebar', false);
                        self.$store.dispatch('dataproduk/getListProduk');
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
        tes(data){
            console.log('emit');
            console.log(data);
        },
    }
}
</script>
<style>
	.b-sidebar {
		width:40%;
	}
    .block.block-add-menu {
		box-shadow: none;
	}
</style>
