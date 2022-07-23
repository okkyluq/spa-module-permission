<template>
	<div class="select-g-container" :class="{'is-invalid' : has_error}" v-click-outside="hideDropDown">
		<div class="select-g-selected d-flex" @click.prevent="showDropdown">
			<!-- <span class="select-g-icon">
				<i :class="icon"></i>
			</span> -->
			<div class="select-g-selected">
				<span v-if="default_value != null && default_value.id != null && default_value.value != null">{{ default_value.value | hideText(limit_text_display) }}</span>
				<span v-else style="font-weight:normal;color:#868e96">{{ placeholder }}</span>
				<i v-if="default_value != null && default_value.id != null && default_value.value != null" class="text-danger fa fa-times-circle" @click="clearSelected"></i>
				<i v-else class="fa fa-caret-down"></i>
			</div>
		</div>
		<div class="select-g-dropdown" v-show="show_dropdown">
			<div class="select-g-search">
				<input type="text" :placeholder="placeholder_search" id="inputsearchselectg" ref="inputsearchselectg" v-model="search_text" @input="onSearch" autocomplete="off">
				<i class="fa fa-spinner fa-spin" v-if="loader"></i>
			</div>
			<ul class="select-g-list-option">
				<li v-for="(item, index) in list_item" :key="index" @click="setSelected(item)" v-html="highlight_text(item[text_key], search_text)"></li>
			</ul>
			<div class="select-g-no-result" v-show="!list_item || !list_item.length" v-if="search_text">
				<span>{{ text_no_result }}</span>
			</div>
		</div>
	</div>
</template>
<script>
import Axios from '../config/Axios'
import store from '../store'
let _ = require('lodash');
export default {
	props: {
		id_key: {
			type: String,
			default: null,
		},
		text_key: {
			type: String,
			default: null,
		},
		default_value: {
			type: Object,
			default: null,
		},
		url: {
			type: String,
			default: null,
		},
		limit_text_display: {
			type: Number,
			default: 18,
		},
		icon: {
			type: String,
			default: 'fa fa-ban'
		},
		text_no_result: {
			type: String,
			default : 'No Result'
		},
		placeholder: {
			type: String,
			default: 'Pencarian'
		},
		placeholder_search: {
			type: String,
			default: 'Pencarian'
		},
        has_error: {
            type: Boolean,
            default: false
        }
	},
	data() {
		return {
			loader: false,
			show_dropdown: false,
			selected_value : {
				id: this.default_value?.id || null,
				value: this.default_value?.value || null,
			},
			search_text: null,
			list_item: null,
		}
	},
	filters: {
		hideText(text, limit_text){
			let limit = limit_text;
			let display_text = text.length >= limit ? text.substring(0, (limit - 3)) + '...' : text;
			return display_text;
		},

	},
	methods: {
		highlight_text(text,query){
			if(!query) {
				return text;
			}
			return text.replace(new RegExp(query, "gi"), match => {
				return '<span class="highlightText">' + match + '</span>';
			});
		},
		clearSelected(){
			this.selected = null;
			this.$emit('setSelected', null);
		},
		showDropdown(){
			this.show_dropdown = !this.show_dropdown;
			this.$nextTick(() => this.$refs.inputsearchselectg.focus())
		},
		hideDropDown(){
			this.show_dropdown = false;
			this.search_text = null;
			this.list_item = null;
		},
		onSearch(e){
			let key = e.target.value;
			if(key.length){
				this.search(key, this);
			}
		},
		search: _.debounce((search, vm) => {
			vm.loader = true;
			vm.list_item = null;
            Axios.defaults.headers.common['Authorization'] = `Bearer ${vm.$store.state.AUTH.token}`;
			Axios.get(`${vm.url}?q=${escape(search)}`)
			.then(res => {
				if(res.status == 200){
					vm.list_item = res.data;
				}
			})
			.catch(error => {
				alert(error);
				return false;
			})
			.finally(() => vm.loader = false);
		}, 350),
		setSelected(item){
			// this.default_value = {
			// 	id: item[this.id_key],
			// 	value: item[this.text_key]
			// },
			this.show_dropdown = false;
			this.search_text = null;
			this.$emit('setSelected', {
				id: item[this.id_key],
				value: item[this.text_key]
			});
		}
	},
}
</script>
<style>
	.select-g-container {
		position: relative;
	}
	.select-g-selected .select-g-icon {
		display: flex;
		align-items: center;
		padding: 0.375rem 0.75rem;
		font-size: 1rem;
		font-weight: 400;
		line-height: 1.5;
		color: #343a40;
		text-align: center;
		white-space: nowrap;
		background-color: #edf0f7;
		border: 1px solid #d1d8ea;
		border-radius: 0.25rem;
		border-top-right-radius: 0;
    	border-bottom-right-radius: 0;
		border-right: none;
	}

	.select-g-selected .select-g-selected {
		position: relative;
		width: 100%;
		padding: 0.375rem 0;
		margin-bottom: 0;
		line-height: 1.5;
		color: #343a40;
		background-color: transparent;
		padding-left: 10px;
		border: 1px solid #d1d8ea;
		border-top-right-radius: 0.25rem;
		border-bottom-right-radius: 0.25rem;
		white-space: nowrap;
		overflow: hidden;
  		text-overflow: clip;
	}

	.select-g-selected .select-g-selected span {
		font-weight: bold;
		content: "";
		display: inline-flex;
	}

	.select-g-selected .select-g-selected:hover {
		cursor: pointer;
	}

	.select-g-selected .select-g-selected i {
		position: absolute;
		right: 10px;
		line-height: 1.5;
		color: #999999;
	}

	.select-g-selected .select-g-selected i:hover {
		cursor: pointer;
	}

	.select-g-dropdown {
		width: 100%;
		z-index: 200;
		position: absolute;
		display: block;
		background-color: #fff;
		transform: translateY(3px);
		border-left: none;
		border-right: none;
		line-height: 1.75;
		border-radius: 4px;
		box-shadow: 0 0 0 1px rgb(89 105 129 / 10%), 0 3px 20px 0 rgb(89 105 129 / 30%), 0 1px 2px 0 rgb(0 0 0 / 5%);
		overflow: hidden;
		color: inherit;
		padding: 0;
		margin: 0;
	}

	.select-g-dropdown .select-g-search {
		position: relative;
		padding: 5px 5px;
	}

	.select-g-dropdown .select-g-search input {
		width: 100%;
		border: 1px solid #cfd7e6;
		border-radius: 4px;
		line-height: 1.5;
		font-size: inherit;
		line-height: inherit;
		padding: 0 10px;
		height: 35px;
	}

	.select-g-dropdown .select-g-search i {
		position: absolute;
		right: 15px;
		line-height: 2;
		color: #999999;
	}

	.select-g-dropdown .select-g-search input:focus {
		/* border:1px solid #1263be; */
		box-shadow:0 0 0 2px #1262be9a;
		outline: none;
	}

	.select-g-dropdown ul.select-g-list-option {
		list-style-type:none;
		padding-left: 0px;
		margin-bottom: 0px !important;
	}

	.select-g-dropdown ul.select-g-list-option li {
		padding: 8px;
	}

	.select-g-dropdown ul.select-g-list-option li:hover {
		cursor: pointer;
		background-color: #1263be;
		color: #fff;
		font-weight: bold;
	}

	.select-g-no-result {
		margin-left: 5px;
	}

	.highlightText {
		background: yellow;
	}


</style>
