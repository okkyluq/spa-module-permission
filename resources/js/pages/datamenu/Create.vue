<template>
    <b-sidebar title="Sidebar" no-close-on-esc no-close-on-backdrop backdrop bg-variant="white" backdrop-variant="dark" no-header right
        @hidden="clearForm" @shown="clearForm" :visible="visible_sidebar"
    >
        <div class="block block-add-menu px-5 py-2" :class="{'block-mode-loading' : $store.state.ui.loader}">
			<h2 class="content-heading">Buat Data Menu</h2>
			<div class="row">
				<div class="col-sm-12">
					<div class="row mb-2 ">
						<label class="col-sm-3 col-form-label">Text Menu</label>
						<div class="col-sm-6">
							<input type="text" class="form-control" name="text_menu" placeholder="Text Menu" autocomplete="off"
                                :class="{ 'is-invalid' : errors.text_menu }"
                                :value="form.text_menu"
                                @input="updateValueForm({
									name : 'text_menu',
									value : $event.target.value
								})"
                            >
                            <div class="invalid-feedback" v-if="errors.text_menu">{{ errors.text_menu[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">Parent Menu</label>
						<div class="col-sm-6">
                            <SelectG
                                :has_error="errors.parent_menu"
								id_key="id"
								text_key="text_menu"
								:default_value="form.parent_menu"
								:limit_text_display="18"
								icon="fas fa-wallet"
								url="getmenu"
								placeholder="Pilih Parent"
								text_no_result="Parent Tidak Ditemukan"
								@setSelected="(data) => updateValueForm({
									name : 'parent_menu',
									value : data
								})"
							/>
                            <div class="invalid-feedback" v-if="errors.parent_menu">{{ errors.parent_menu[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">URL Menu</label>
						<div class="col-sm-6">
							<input type="text" class="form-control text-primary" name="url_menu" placeholder="Url Menu" autocomplete="off"
                                :value="form.url_menu"
                                :class="{ 'is-invalid' : errors.url_menu }"
                                @input="updateValueForm({
									name : 'url_menu',
									value : $event.target.value
								})"
                            >
							<div class="text-primary" v-if="form.url_menu">
                                result : {{ `${text_link}` }}/{{`${form.url_menu}` }}
                            </div>
                            <div class="invalid-feedback" v-if="errors.url_menu">{{ errors.url_menu[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">Status</label>
						<div class="col-sm-6 mt-2">
							<div class="form-check form-check-inline">
                                <input class="form-check-input" type="checkbox" autocomplete="off"
                                    :checked="form.status_menu"
                                    @change="updateValueForm({
                                        name : 'status_menu',
                                        value : $event.target.checked
                                    })"
                                >
                                <label class="form-check-label">Active</label>
                            </div>
						</div>
					</div>
                    <div class="row mb-2">
						<label class="col-sm-3 col-form-label">Icon</label>
						<div class="col-sm-6">
                            <vfa-picker :value="form.icon"
								@input="updateValueForm({
									name : 'icon',
									value : `fa fa-`+$event
								})"
                                :class="{ 'is-invalid' : errors.icon }"
							>
                                <template v-slot:activator="{ on }">
									<div class="input-group">
										<input :value="form.icon" type="text" class="form-control" @click="on" placeholder="Pilih Icon" autocomplete="off">
										<span class="input-group-text">
											<i :class="form.icon"></i>
										</span>
									</div>
                                </template>
                            </vfa-picker>
                            <div class="invalid-feedback" v-if="errors.icon">{{ errors.icon[0]  }}</div>
						</div>
					</div>
                    <div class="row mb-2">
                        <table class="table table-bordered" id="tabel-otoritas">
                            <thead>
                                <tr class="table-dark">
                                    <th colspan="6" class="text-center">Otoritas Menu</th>
                                </tr>
                                <tr>
                                    <th class="text-center">View</th>
                                    <th class="text-center">Create</th>
                                    <th class="text-center">Edit</th>
                                    <th class="text-center">Delete</th>
                                    <th class="text-center">Export</th>
                                    <th class="text-center">Import</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td class="text-center">
                                        <input class="form-check-input" type="checkbox" :checked="form.otoritas.view"
                                            @change="updateValueFormOtoritas({
                                                name : 'view',
                                                value : $event.target.checked
                                            })"
                                        >
                                    </td>
                                    <td class="text-center">
                                        <input class="form-check-input" type="checkbox" :checked="form.otoritas.create"
                                            @change="updateValueFormOtoritas({
                                                name : 'create',
                                                value : $event.target.checked
                                            })"
                                        >
                                    </td>
                                    <td class="text-center">
                                        <input class="form-check-input" type="checkbox" :checked="form.otoritas.edit"
                                            @change="updateValueFormOtoritas({
                                                name : 'edit',
                                                value : $event.target.checked
                                            })">
                                    </td>
                                    <td class="text-center">
                                        <input class="form-check-input" type="checkbox" :checked="form.otoritas.delete"
                                            @change="updateValueFormOtoritas({
                                                name : 'delete',
                                                value : $event.target.checked
                                            })"
                                        >
                                    </td>
                                    <td class="text-center">
                                        <input class="form-check-input" type="checkbox" :checked="form.otoritas.export"
                                            @change="updateValueFormOtoritas({
                                                name : 'export',
                                                value : $event.target.checked
                                            })"
                                        >
                                    </td>
                                    <td class="text-center">
                                        <input class="form-check-input" type="checkbox" :checked="form.otoritas.import"
                                            @change="updateValueFormOtoritas({
                                                name : 'import',
                                                value : $event.target.checked
                                            })"
                                        >
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div class="row mb-2">
						<div class="col-sm-12 text-end">
                            <button @click="$store.dispatch('adddatamenu/toggleSidebar', false)" type="button" class="btn btn-danger">Batal</button>
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
import SelectG from '../../partials/SelectG';
import Axios from '../../config/Axios';
export default {
    components: {
        SelectG
    },
	data() {
		return {
			text_link: window.location.origin,
            errors: {},
		}
	},
    computed: {
        ...mapState('adddatamenu', {
            form: state => state.form,
            visible_sidebar: state => state.visible_sidebar
        })
    },
    methods: {
        ...mapActions('adddatamenu', {
            clearForm: 'clearForm',
            updateValueForm: 'updateValueForm',
            updateValueFormOtoritas: 'updateValueFormOtoritas'
        }),
        sendForm(){
            this.errors = {}
            let self = this;
			let formData = {
				text_menu : this.form.text_menu,
                parent_menu : this.form.parent_menu?.id || null,
                url_menu : this.form.url_menu,
                status_menu : this.form.status_menu,
                icon : this.form.icon,
                otoritas : {
                    view: this.form.otoritas.view.toString(),
                    create: this.form.otoritas.create.toString(),
                    edit: this.form.otoritas.edit.toString(),
                    delete: this.form.otoritas.delete.toString(),
                    export: this.form.otoritas.export.toString(),
                    import: this.form.otoritas.import.toString(),
                }
			}
            self.$store.dispatch('ui/setLoader', true);
            Axios.defaults.headers.common['Authorization'] = `Bearer ${self.$store.state.auth.token}`;
			Axios.post('datamenu', formData)
				.then(response => {
                    if(response.status === 200){
                        self.$store.dispatch('adddatamenu/toggleSidebar', false);
                        self.$store.dispatch('datamenu/getListMenu');
                    }
				})
				.catch(error => {
					self.errors = error.response.data.errors;
					console.log(error);
				})
				.finally(() => self.$store.dispatch('ui/setLoader', false));
        },
        tes(data){
            console.log(data);
        }
    },
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
