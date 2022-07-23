<template>
    <li class="nav-main-item" :class="{ 'open' : menu_open }" @click="open_menu"  v-if="permission.indexOf('view_'+slug) !== -1">
        <a class="nav-main-link nav-main-link-submenu" v-if="!single_menu">
			<i class="nav-main-link-icon" :class="icon"></i>
			<span class="nav-main-link-name">{{ title }}</span>
		</a>
        <router-link class="nav-main-link" :to="link" v-else>
            <i class="nav-main-link-icon" :class="icon"></i>
			<span class="nav-main-link-name">{{ title }}</span>
        </router-link>
        <ul class="nav-main-submenu" v-if="!single_menu">
			<li class="nav-main-item" v-for="item in childs" :key="item.id" v-if="permission.indexOf('view_'+item.SlugMenu) !== -1">
				<router-link :to="item.url" class="nav-main-link">
                <i class="nav-main-link-icon" :class="item.icon"></i>
					<span class="nav-main-link-name">{{ item.text_menu }}</span>
				</router-link>
			</li>
		</ul>
    </li>
</template>
<script>
import { mapState } from 'vuex'
export default {
    props: {
        slug: String,
        title: String,
		icon: String,
		link: String,
		childs: Array,
		single_menu: Boolean
    },
    data() {
        return {
			menu_open: false
		}
    },
    computed: {
        ...mapState('AUTH', {
            permission: state => state.permission
        }),
    },
    methods: {
        open_menu(){
			if(!this.single_menu){
				this.menu_open = !this.menu_open;
			}
		},
		openLinkChild(link){
			this.$router.push(link)
		}
    }
}
</script>
<style>
	.nav-main-item:hover {
		cursor: pointer;
	}
</style>
