<template>
    <layout-admin>
        <div class="content">
            <div class="block block-rounded" :class="{'block-mode-loading' : $store.state.ui.loader}">
                <div class="block-header block-header-default">
                    <h3 class="block-title">
                        Data Import MyGrapari
                    </h3>
                    <div class="block-options">
                        <button type="button" class="btn btn-success" v-if="checkAcces('import_import_mygrapari')"
                        ><i class="fas fa-plus"></i> Import Data</button>
                    </div>
                </div>
                <div class="block-content">
                    <b-table bordered hover :fields="thead" :items="list_importmygrapari.data" thead-class="table-dark" show-empty >
                        <template #empty="scope">
                            <div class="text-center">
                                <p class="fw-semibold mb-1 text-danger"><i class="far fa-times-circle"></i>  Data Kosong !</p>
                            </div>
                        </template>

                        <template #cell(tanggal)="data">
                            {{ data.item.date | moment("DD/MM/YYYY") }}
                        </template>

                        <template #cell(location)="data">
                            {{ data.item.location }}
                        </template>

                        <template #cell(transaction_id)="data">
                            {{ data.item.transaction_id }}
                        </template>

                        <template #cell(transaction_type)="data">
                            {{ data.item.transaction_type }}
                        </template>

                        <template #cell(msisdn)="data">
                            {{ data.item.msisdn }}
                        </template>

                        <template #cell(result_topic)="data">
                            {{ data.item.result_topic }}
                        </template>


                    </b-table>
                    <div class="row">
						<div class="col-sm-6">
							<b-pagination
								:value="list_importmygrapari.current_page"
								:total-rows="list_importmygrapari.total"
								:per-page="list_importmygrapari.per_page"
								prev-text="Prev"
								next-text="Next"
								@change="getListImportMyGrapari"
							></b-pagination>
						</div>
						<div class="col-sm-6 text-end">
							<p> <strong>{{ list_importmygrapari.from | number('0,0')}}</strong> dari <strong>{{ list_importmygrapari.last_page | number('0,0') }}</strong> Halaman (Total Data: <strong>{{ list_importmygrapari.total | number('0,0') }}</strong>)</p>
						</div>
					</div>
                </div>
            </div>
        </div>
    </layout-admin>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import LayoutAdmin from '../../layouts/LayoutAdmin.vue'
export default {
    components: {
        LayoutAdmin
    },
    data() {
        return {
            thead: [
                {key: 'tanggal', label: 'Tanggal', class:'text-center', thStyle: 'width:12%;'},
                {key: 'location', label: 'Location', class:'text-center', thStyle: 'width:15%;'},
                {key: 'transaction_id', label: 'Transaction ID', class:'text-left', thStyle: 'width:20%;'},
                {key: 'transaction_type', label: 'Transaction Type', class:'text-left', thStyle: 'width:20%;'},
                {key: 'msisdn', label: 'MSISDN', class:'text-center', thStyle: 'width:15%;'},
                {key: 'result_topic', label: 'Result Topic', class:'text-center'},
            ],
        }
    },
    computed:{
        ...mapState('dataimportmygrapari', {
            list_importmygrapari: state => state.list_importmygrapari
        })
    },
    methods: {
        ...mapActions('dataimportmygrapari', {
            getListImportMyGrapari: 'getListImportMyGrapari'
        })
    },
    mounted() {
        this.redirectIfNotAcces('view_import_mygrapari')
        this.getListImportMyGrapari();
    },
}
</script>
