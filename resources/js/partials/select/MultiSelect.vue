<template>
    <multiselect :value="value" :options="options_child"
        :class="classinvalid"
        @select="$emit('selected', $event)"
        tagPlaceholder="Tekan enter untuk membuat produk"
        :taggable="taggable || false"
        :show-labels="showlabels"
        :searchable="searchable"
        :allow-empty="allowempty"
        @search-change="asyncFind"
        :placeholder="placeholder || 'Not Found'"
        @tag="addTag"
        >
        <template slot="singleLabel" slot-scope="{ option }">
            <strong>{{ option }}</strong>
            <span style="position:absolute; right:0px; font-size: 10px; cursor: pointer;" @mousedown.prevent.stop="$emit('clear')">❌</span>
        </template>
        <template><span slot="noOptions">Ketikan nama produk</span></template>
    </multiselect>
</template>
<script>
import Axios from '../../config/Axios';
export default {
    props: ['value', 'taggable', 'showlabels', 'searchable', 'allowempty', 'placeholder', 'classinvalid'],
    data() {
        return {
            myValue: null,
            options_child: [],
        }
    },
    methods: {
        tes(data){
            console.log(data)
        },
        asyncFind(query){
            Axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.auth.token}`;
            Axios.get('dataproduk/getdataprodukbyname', {params: { q: query }})
                .then(response => {
                    let respon = response.data.data;
                    this.options_child = respon.map(list => list.nama_produk);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        addTag(newTag){
            this.options_child.push(newTag)
            this.$emit('selected', newTag)
        }
    },
    computed: {

    },
}
</script>
<style>
    .is-invalid > .multiselect__tags {
        border: 1px solid #dc3545;
    }
</style>
