<template>
    <div>
        <v-select
            placeholder="Masukan Nama Produk"
            taggable
            :filterable="true"
            :options="options"
            @search="onSearch"
            :value="value"
            @option:selected="$emit('selected', $event)"
            @option:deselecting="$emit('tes')"
        >
            <!-- <template #selected-option="{ nama_produk }">
                <span v-if="options.findIndex((list) => list === nama_produk)">{{ nama_produk }} <em class="text-danger fw-bold">New</em></span>
                <span v-else>{{ nama_produk }}</span>
            </template> -->

        </v-select>
    </div>
</template>
<script>
import Axios from '../config/Axios';
export default {
    props: ['value', 'label'],
    data() {
        return {
            options: [],
        }
    },
    methods: {
        tes(data){
            console.log(data)
        },
        onSearch(search, loading) {
            this.options = [];
            if(search.length) {
                loading(true);
                this.search(loading, search, this);
            }
        },
        search: _.debounce((loading, search, vm) => {
            Axios.defaults.headers.common['Authorization'] = `Bearer ${vm.$store.state.auth.token}`;
            Axios.get('dataproduk/getdataprodukbyname', {params: { q: search }})
                .then(response => {
                    console.log(response.data);
                    vm.options = response.data.map(list => list.nama_produk);
                    loading(false);
                })
                .catch(error => {
                    console.log(error);
                })
        }, 350)
    },
    mounted() {
        // this.$emit("option:selected", tes);
    },
}
</script>
<style>
    input.vs__search::placeholder {
        color: #6c757d;
    }
</style>
