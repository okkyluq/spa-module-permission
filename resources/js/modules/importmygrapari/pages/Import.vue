<template>
    <b-sidebar title="Sidebar" no-close-on-esc no-close-on-backdrop backdrop bg-variant="white" backdrop-variant="dark" no-header right
        @hidden="clearForm" @shown="clearForm" :visible="visible_sidebar"
    >
        <div class="block block-add-menu px-5 py-2" :class="{'block-mode-loading' : $store.state.UI.loader}">
			<h2 class="content-heading">Import Data MyGrapari</h2>
			<div class="row">
				<div class="col-sm-12">
					<div class="row mb-2">
						<label class="col-sm-3 col-form-label">Jenis Produk</label>
						<div class="col-sm-6 mt-1">
                            <input type="file" class="form-control"
                                accept=".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                                :value="form.file"
                                @change="setFileExcel"
                            >
                            <div class="invalid-feedback" v-if="errors.jenis_produk">{{ errors.jenis_produk[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<div class="col-sm-6 offset-sm-3">
                            <button @click="$store.dispatch('ImportmygrapariStoreImport/toggleSidebar', false)" type="button" class="btn btn-danger">Batal</button>
                            <button @click="sendForm" type="button" class="btn btn-success">Import</button>
						</div>
					</div>
				</div>
			</div>
        </div>

    </b-sidebar>
</template>
<script>
import { mapState, mapActions } from 'vuex';
import Axios from '../../../config/Axios'
export default {
    components: {

    },
	data() {
		return {
            file_excel: '',
            errors: {},
		}
	},
    computed: {
        ...mapState('ImportmygrapariStoreImport', {
            form: state => state.form,
            visible_sidebar: state => state.visible_sidebar
        })
    },
    methods: {
        ...mapActions('ImportmygrapariStoreImport', {
            clearForm: 'clearForm',
            updateValueForm: 'updateValueForm',
        }),
        setFileExcel(e){
            this.file_excel = e.target.files[0]
        },
        sendForm(){
            this.errors = {}
            let formData = new FormData();
            formData.append('file_excel', this.file_excel);

            this.$store.dispatch('UI/setLoader', true);
            Axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.AUTH.token}`;
			Axios.post('importmygrapari/import', formData)
				.then(response => {
                    if(response.status === 200){
                        this.$store.dispatch('ImportmygrapariStoreImport/toggleSidebar', false);
                        this.$store.dispatch('ImportmygrapariStoreIndex/getListImportMyGrapari');
                    }
				})
				.catch(error => {
                    let errors = error.response;
                    if(errors.status === 422){
                        this.errors = errors.data.errors;
                    }
                    if(errors.status === 403){
                         this.$swal.fire({
                            icon: 'warning',
                            title: 'Peringatan',
                            text: errors.data.message,
                        })
                    }
				})
				.finally(() => this.$store.dispatch('UI/setLoader', false));
        },
        tes(data){
            console.log(data);
        },
    }
}
</script>
<style>
	.b-sidebar {
		width:40% !important;
	}
    .block.block-add-menu {
		box-shadow: none;
	}
</style>
