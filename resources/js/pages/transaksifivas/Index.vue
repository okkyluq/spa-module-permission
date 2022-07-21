<!-- view_transaksi_fivas
create_transaksi_fivas
edit_transaksi_fivas
delete_transaksi_fivas
export_transaksi_fivas
import_transaksi_fivas -->
<template>
    <layout-admin>
        <div class="content">
            <div class="block block-rounded" :class="{'block-mode-loading' : $store.state.ui.loader}">
                <div class="block-header block-header-default">
                    <h3 class="block-title">
                        Transaksi Fivas
                    </h3>
                    <div class="block-options">
                        <button type="button" class="btn btn-success" v-if="checkAcces('create_transaksi_fivas')"
                            @click="$store.dispatch('addtransaksifivas/toggleSidebar', true)"
                        ><i class="fas fa-plus"></i> Transaksi Fivas</button>
                    </div>
                </div>
                <div class="block-content">
                    <b-table bordered hover :fields="thead" :items="list_transaksifivas" thead-class="table-dark" show-empty >
                        <template #head(action)="data">
                            <i class="fa fa-cogs"></i>
                        </template>
                        <template #empty="scope">
                            <div class="text-center">
                                <p class="fw-semibold mb-1 text-danger"><i class="far fa-times-circle"></i>  Data Kosong !</p>
                            </div>
                        </template>

                        <template #cell(jenis_transaksi)="data">
                            <div class="text-center">
                                {{ data.item.label_jenis_transaksi }}
                            </div>
                        </template>

                        <template #cell(transaksi)="data">
                            <div class="text-start">
                                <ul>
                                    <li v-for="item in data.item.detail_transaksi" :key="item.id"><strong>{{ item.produk.nama_produk }} - {{ item.harga | currency('Rp.', 0)}}</strong></li>
                                </ul>
                            </div>
                        </template>

                        <template #cell(total)="data">
                            <div class="text-start">
                                <strong >{{ data.item.detail_transaksi.reduce((accumulator, object) => { return accumulator + parseInt(object.harga); }, 0) | currency('Rp.', 0) }}</strong>
                            </div>
                        </template>

                        <template #cell(action)="data">
                             <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-primary" @click="!checkAcces('edit_transaksi_fivas') || editData(data.item.id)"
                                    :class="!checkAcces('edit_transaksi_fivas') ? 'disabled' : ''"
                                >
                                    <i class="fa fa-edit"></i>
                                </button>
                                <button type="button" class="btn btn-sm btn-danger" @click="!checkAcces('edit_transaksi_fivas') || deleteItem(data.item.id)"
                                    :class="!checkAcces('delete_transaksi_fivas') ? 'disabled' : ''"
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
								@change="getListTransaksiFivas"
							></b-pagination>
						</div>
						<div class="col-sm-6 text-end">
							<p> <strong>{{ meta.from }}</strong> dari <strong>{{ meta.last_page }}</strong> Halaman (Total Data: <strong>{{ meta.total }}</strong>)</p>
						</div>
					</div>
                </div>
            </div>
            <CreateTransaksiFivas />
            <EditTransaksiFivas />
        </div>
    </layout-admin>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import CreateTransaksiFivas from './Create.vue';
import EditTransaksiFivas from './Edit.vue';
import LayoutAdmin from '../../layouts/LayoutAdmin.vue'
import Axios from '../../config/Axios'
export default {
    components: {
        LayoutAdmin, CreateTransaksiFivas, EditTransaksiFivas
    },
    data() {
        return {
            thead: [
                {key: 'date', label: 'Date', class:'text-center', thStyle: 'width:10%;'},
                {key: 'msisdn', label: 'MSISDN', class:'text-center', thStyle: 'width:10%;'},
                {key: 'jenis_transaksi', label: 'Jenis', class:'text-center', thStyle: 'width:10%;'},
                {key: 'transaksi', label: 'Transaksi', class:'text-center'},
                {key: 'total', label: 'Total', class:'text-center', thStyle: 'width:10%;'},
                {key: 'action', label: 'Action', class:'text-center', thStyle: 'width:5%;'},
            ],
        }
    },
    computed:{
        ...mapState('transaksifivas', {
            list_transaksifivas: state => state.list_transaksifivas,
            meta: state => state.meta
        })
    },
    methods: {
        ...mapActions('transaksifivas', {
            getListTransaksiFivas: 'getListTransaksiFivas'
        }),
        ...mapActions('edittransaksifivas', {
            editData: 'editData'
        }),
        deleteItem(id){
            let self = this;
			self.$swal.fire({
				icon: 'warning',
				title: 'Apakah Anda Yakin Ingin Menghapus Transaksi ?',
				showDenyButton: true,
				confirmButtonText: 'Iya, Hapus !',
				denyButtonText: `Tidak, Jangan Hapus !`,
			}).then((result) => {
				if (result.isConfirmed) {
                    self.$store.dispatch('ui/setLoader', true, {root:true});
                    Axios.defaults.headers.common['Authorization'] = `Bearer ${self.$store.state.auth.token}`;
                    Axios.delete(`transaksifivas/${id}`)
                    .then(function(response){
                        console.log(response)
                        self.$swal.fire('Berhasil Menghapus !', '', 'success')
                        self.getListTransaksiFivas();
                    })
                    .catch(function(error){
                        console.log(error)
                    })
                    .finally(() => self.$store.dispatch('ui/setLoader', false, {root:true}));
				}
			})
		}
    },
    mounted() {
        this.redirectIfNotAcces('view_transaksi_fivas')
        this.getListTransaksiFivas();
    },
}
</script>
