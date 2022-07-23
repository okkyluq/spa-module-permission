<template>
    <layout-admin>
        <div class="content">
            <div class="block block-rounded" :class="{'block-mode-loading' : $store.state.UI.loader}">
                <div class="block-header block-header-default">
                    <h3 class="block-title">
                        Data Produk
                    </h3>
                    <div class="block-options">
                        <button type="button" class="btn btn-success" v-if="checkAcces('create_data_produk')"
                            @click="$store.dispatch('DataprodukStoreAdd/toggleSidebar', true)"
                        ><i class="fas fa-plus"></i> Tambah Data</button>
                    </div>
                </div>
                <div class="block-content">
                    <b-table bordered hover :fields="thead" :items="list_produk" thead-class="table-dark" show-empty >
                        <template #head(action)="data">
                            <i class="fa fa-cogs"></i>
                        </template>
                        <template #empty="scope">
                            <div class="text-center">
                                <p class="fw-semibold mb-1 text-danger"><i class="far fa-times-circle"></i>  Data Kosong !</p>
                            </div>
                        </template>

                        <template #cell(jenis_produk)="data">
                            {{ data.item.label_jenis_produk }}
                        </template>
                        <template #cell(kategori_produk)="data">
                            {{ data.item.label_kategori_produk}}
                        </template>

                        <template #cell(harga)="data">
                            {{ data.item.harga | currency('Rp.', 0)}}
                        </template>
                        <template #cell(action)="data">
                             <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-primary"
                                    :class="!checkAcces('edit_data_produk') ? 'disabled' : ''"
                                >
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-danger"
                                    :class="!checkAcces('delete_data_produk') ? 'disabled' : ''"
                                >
                                    <i class="fa fa-trash"></i>
                                </button>
                            </div>
                        </template>
                    </b-table>
                    <div class="row">
						<div class="col-sm-6">
							<b-pagination
								:value="meta.current_page"
								:total-rows="meta.total"
								:per-page="meta.per_page"
								prev-text="Prev"
								next-text="Next"
								@change="getListProduk"
							></b-pagination>
						</div>
						<div class="col-sm-6 text-end">
							<p> <strong>{{ meta.from }}</strong> dari <strong>{{ meta.last_page }}</strong> Halaman (Total Data: <strong>{{ meta.total }}</strong>)</p>
						</div>
					</div>
                </div>
            </div>
            <CreateProduk />
        </div>
    </layout-admin>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CreateProduk from './Create.vue';
import LayoutAdmin from '../../../layouts/LayoutAdmin.vue'
export default {
    components: {
        LayoutAdmin, CreateProduk
    },
    data() {
        return {
            thead: [
                {key: 'jenis_produk', label: 'Jenis Produk', class:'text-center', thStyle: 'width:15%;'},
                {key: 'kategori_produk', label: 'Kategori Produk', class:'text-center', thStyle: 'width:15%;'},
                {key: 'nama_produk', label: 'Nama Produk', class:'text-left'},
                {key: 'harga', label: 'Harga', class:'text-left', thStyle: 'width:10%;'},
                {key: 'action', label: 'Action', class:'text-center', thStyle: 'width:5%;'},
            ],
        }
    },
    computed:{
        ...mapState('DataprodukStoreIndex', {
            list_produk: state => state.list_produk,
            meta: state => state.meta
        })
    },
    methods: {
        ...mapActions('DataprodukStoreIndex', {
            getListProduk: 'getListProduk'
        })
    },
    mounted() {
        this.redirectIfNotAcces('view_data_produk')
        this.getListProduk();
    },
}
</script>
