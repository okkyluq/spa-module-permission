<template>
    <nav id="sidebar" aria-label="Main Navigation">
        <div class="bg-header-dark">
            <div class="content-header bg-white-5">
                <a class="fw-semibold text-white tracking-wide" href="index.html">
                    <span class="smini-visible"> CCAP </span>
                    <span class="smini-hidden">
                        CC<span class="opacity-75">AP</span>
                    </span>
                </a>
                <div>
                    <button type="button" class="btn btn-sm btn-alt-secondary" @click="setHeaderModeDark">
                        <i :class="[(header_mode_dark ? 'fa fa-toggle-on' : 'fa fa-toggle-off')]"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-secondary" @click="setModeDark">
                        <i  :class="[(mode_dark ? 'fa fa-moon' : 'far fa-moon')]"></i>
                    </button>
                    <button type="button" class="btn btn-sm btn-alt-secondary d-lg-none" data-toggle="layout" data-action="sidebar_close">
                        <i class="fa fa-times-circle"></i>
                    </button>
                </div>
            </div>
        </div>

        <div class="js-sidebar-scroll">
            <div class="content-side">
                <NavigationMenu />
            </div>
        </div>
    </nav>
</template>
<script>
import NavigationMenu from './NavigationMenu.vue'
import { mapActions, mapState } from 'vuex'
export default {
    components: {
        NavigationMenu
    },
    computed: {
        ...mapState('ui', {
            sidebar_active : state => state.sidebar_active,
            header_mode_dark: state => state.header_mode_dark,
            mode_dark: state => state.mode_dark
        })
    },
    methods: {
        ...mapActions('ui', {
            setHeaderModeDark: 'setHeaderModeDark',
            setModeDark: 'setModeDark'
        })
    },
}
</script>
<style lang="">

</style>
