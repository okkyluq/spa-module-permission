<template>
    <ul class="nav-main">
        <!-- <ChildNavigationMenu
            title="Dashboard"
            icon="fa fa-laptop"
            link="/"
            :single_menu="true"
        /> -->

        <li class="nav-main-item">
            <router-link class="nav-main-link" to="/">
                <i class="nav-main-link-icon fa fa-laptop"></i>
                <span class="nav-main-link-name">Dashboard</span>
            </router-link>
        </li>

        <!-- <ChildNavigationMenu
            title="Pengaturan"
            icon="fas fa-sliders-h"
            :single_menu="false"
            link="#"
            :child="[
                {title: 'Manajemen User', link: 'manajemen-user', icon: 'fa fa-folder'},
                {title: 'Manajemen Modul', link: 'manajemen-modul', icon: 'fa fa-folder'},
                {title: 'Otoritas Modul', link: 'otoritas-modul', icon: 'fa fa-folder'},
            ]"
        /> -->

        <ChildNavigationMenu v-for="menu in all_menu" :key="menu.id"
            :slug="menu.SlugMenu"
            :title=menu.text_menu
            :icon=menu.icon
            :single_menu="!menu.childs.length  > 0"
            :link=menu.url
            :childs="menu.childs"
        />


    </ul>
</template>
<script>
import Axios from '../config/Axios';
import { mapState, mapActions } from 'vuex';
import ChildNavigationMenu from './ChildNavigationMenu.vue'
export default {
    components: {
        ChildNavigationMenu
    },
    data() {
        return {

        }
    },
    computed: {
        ...mapState('UI', {
            all_menu : state => state.menu_all
        }),
    },
    methods: {
        ...mapActions('UI', {
            setMenuAll: 'setMenuAll'
        })
    },
    mounted() {
        let self = this;
        if(this.all_menu === null){
            Axios.defaults.headers.common['Authorization'] = `Bearer ${this.$store.state.AUTH.token}`;
            Axios.get('getmenuuser')
            .then(function(response){
                self.setMenuAll(response.data);
            })
            .catch(function(error){
                console.log(error)
            });
        }

    },
}
</script>
