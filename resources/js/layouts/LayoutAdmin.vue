<template>
    <div id="page-container" class="sidebar-dark enable-page-overlay side-scroll page-header-fixed main-content-narrow"
    :class="{'sidebar-o' : sidebar_active, 'page-header-dark' : header_mode_dark, 'dark-mode' : mode_dark  }"
    >
        <left-menu />
        <HeaderTop />
        <main id="main-container">
            <slot></slot>
        </main>
        <FooterTop />
    </div>
</template>
<script>
import LeftMenu from '../partials/LeftMenu.vue'
import HeaderTop from '../partials/Header.vue'
import FooterTop from '../partials/Footer.vue'
import { mapState } from 'vuex'

export default {
    components: {
        LeftMenu, HeaderTop, FooterTop
    },
    computed: {
        ...mapState('UI', {
            sidebar_active : state => state.sidebar_active,
            header_mode_dark: state => state.header_mode_dark,
            mode_dark: state => state.mode_dark
        })
    },
}
</script>

