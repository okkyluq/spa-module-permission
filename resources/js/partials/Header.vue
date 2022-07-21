<template>
    <header id="page-header">
        <div class="content-header">
            <div>
                <button type="button" class="btn btn-alt-secondary me-1" @click="minimizeSidebar">
                    <i class="fa fa-fw fa-bars"></i>
                </button>
            </div>
            <div>
                <div class="dropdown d-inline-block" v-click-outside="hiddenMenuUser">
                    <button type="button" class="btn btn-alt-secondary" :class="{'show' : menu_user}" @click="setMenuUser">
                        <i class="fa fa-fw fa-user d-sm-none"></i>
                        <span class="d-none d-sm-inline-block">{{ user.name ? user.name : 'Not Found'  }}</span>
                        <i class="fa fa-fw fa-angle-down opacity-50 ms-1 d-none d-sm-inline-block"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-end p-0" :class="{'show' : menu_user}"
                        :style="menu_user ? 'position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 40px);':''"
                    >
                        <div class="bg-primary-dark rounded-top fw-semibold text-white text-center p-3">
                            User Options
                        </div>
                        <div class="p-2">
                            <a class="dropdown-item" href="javascript:void(0)">
                                <i class="far fa-fw fa-user me-1"></i> Profile
                            </a>
                            <a class="dropdown-item d-flex align-items-center justify-content-between" href="javascript:void(0)">
                                <span><i class="far fa-fw fa-envelope me-1"></i> Inbox</span>
                                <span class="badge bg-primary rounded-pill">3</span>
                            </a>
                            <a class="dropdown-item" href="javascript:void(0)">
                                <i class="far fa-fw fa-file-alt me-1"></i> Invoices
                            </a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:void(0)" data-toggle="layout" data-action="side_overlay_toggle">
                                <i class="far fa-fw fa-building me-1"></i> Settings
                            </a>
                            <div role="separator" class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" @click.prevent="logout">
                                <i class="far fa-fw fa-arrow-alt-circle-left me-1"></i> Sign Out
                            </a>
                        </div>
                    </div>
                </div>
                <div class="dropdown d-inline-block" v-click-outside="hiddenNotificationUser">
                    <button type="button" class="btn btn-alt-secondary" :class="{'show' : notification_user}" @click="setNotificationUser">
                        <i class="fa fa-fw fa-bell"></i>
                    </button>
                    <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" :class="{'show' : notification_user}"
                        :style="notification_user ? 'position: absolute; inset: 0px 0px auto auto; margin: 0px; transform: translate(0px, 40px);':''"
                    >
                        <div class="bg-primary-dark rounded-top fw-semibold text-white text-center p-3">
                            Notifications
                        </div>
                        <ul class="nav-items my-2">
                            <li>
                                <a class="d-flex text-dark py-2" href="javascript:void(0)">
                                    <div class="flex-shrink-0 mx-3">
                                    <i class="fa fa-fw fa-check-circle text-success"></i>
                                    </div>
                                    <div class="flex-grow-1 fs-sm pe-2">
                                    <div class="fw-semibold">App was updated to v5.6!</div>
                                    <div class="text-muted">3 min ago</div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <div class="p-2 border-top">
                            <a class="btn btn-alt-primary w-100 text-center" href="javascript:void(0)">
                            <i class="fa fa-fw fa-eye opacity-50 me-1"></i> View All
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>
<script>
import Axios from '../config/Axios'
import { mapActions, mapState } from 'vuex'
export default {
    computed: {
        ...mapState('ui', {
            menu_user: state => state.menu_user,
            notification_user: state => state.notification_user,
        }),
        ...mapState('auth', {
            user: state => state.user,
            token: state => state.token
        })
    },
    methods: {
        hiddenMenuUser(){
            this.menu_user === false || this.setMenuUser()
        },
        hiddenNotificationUser(){
            this.notification_user === false || this.setNotificationUser()
        },
        ...mapActions('ui', {
            minimizeSidebar : 'minimizeSidebar',
            setMenuUser: 'setMenuUser',
            setNotificationUser: 'setNotificationUser',
            setDefaultUi: 'setDefaultUi'
        }),
        ...mapActions('auth', {
            clearTokenUser: 'clearTokenUser'
        }),
        logout(){
            let self = this;
            Axios.post('logout')
            .then(function(response){
                self.setDefaultUi();
                self.clearTokenUser();
                self.$router.push({ path: '/login' });
            })
            .catch(function(error){
                console.log(error);
            });

        }
    }
}
</script>
<style>

</style>
