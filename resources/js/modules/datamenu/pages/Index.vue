<template>
    <layout-admin>
        <div class="content">
            <div class="block block-rounded" :class="{'block-mode-loading' : $store.state.UI.loader}">
                <div class="block-header block-header-default">
                    <h3 class="block-title">Data Menu</h3>
                    <div class="block-options">
                        <button type="button" class="btn btn-success" v-if="checkAcces('create_data_menu')"
                            @click="$store.dispatch('DatamenuStoreAdd/toggleSidebar', true)"
                        ><i class="fas fa-plus"></i> Tambah Data</button>
                    </div>
                </div>
                <div class="block-content">
                    <table class="table table-bordered" >
                        <thead class="table-dark">
                            <tr>
                                <th width="80">No.</th>
                                <th>Title Menu</th>
                                <th>URL</th>
                                <th width="80" class="text-center">Icon</th>
                                <th width="120" class="text-center">Status</th>
                                <th width="120" class="text-center">Created By</th>
                                <th width="60" class="text-center"><i class="fa fa-cog"></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(isi, index) in list_menu.data" :key="isi.id">
                                <td>{{ index+1 }}</td>
                                <td>{{ isi.text_menu }}</td>
                                <td>
                                    <a href="#"><i class="fa fa-link"></i> {{ isi.url }}</a>
                                </td>
                                <td class="text-center"><i :class="isi.icon"></i></td>
                                <td class="text-center">
                                    <span class="badge"
                                        :class="isi.active === 'true' ? 'bg-success' : 'bg-warning'"
                                    >
                                        {{isi.active === 'true' ? 'Active' : 'Non Active'}}
                                    </span>
                                </td>
                                <td class="text-center">{{ isi.user.name }}</td>
                                <td class="text-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-primary"
                                            :class="!checkAcces('edit_data_menu') ? 'disabled' : ''"
                                        >
                                            <i class="fa fa-edit"></i>
                                        </button>
                                        <button type="button" class="btn btn-sm btn-danger"
                                            :class="!checkAcces('delete_data_menu') ? 'disabled' : ''"
                                        >
                                            <i class="fa fa-trash"></i>
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="row">
						<div class="col-sm-6">
							<b-pagination
								:value="list_menu.current_page"
								:total-rows="list_menu.total"
								:per-page="list_menu.per_page"
								prev-text="Prev"
								next-text="Next"
								@change="getListMenu"
							></b-pagination>
						</div>
						<div class="col-sm-6 text-end">
							<p> <strong>{{ list_menu.from }}</strong> dari <strong>{{ list_menu.last_page }}</strong> Halaman (Total Data: <strong>{{ list_menu.total }}</strong>)</p>
						</div>
					</div>
                </div>
            </div>
            <CreateMenu />
        </div>
    </layout-admin>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LayoutAdmin from '../../../layouts/LayoutAdmin.vue'
import CreateMenu from './Create.vue'
export default {
    components: {
        LayoutAdmin, CreateMenu
    },
    data() {
        return {

        }
    },
    computed:{
        ...mapState('DatamenuStoreIndex', {
            list_menu: state => state.list_menu
        })
    },
    methods: {
        ...mapActions('DatamenuStoreIndex', {
            getListMenu: 'getListMenu'
        })
    },
    mounted() {
        // this.redirectIfNotAcces('view_data_menu')
        this.getListMenu();
    },
}
</script>
