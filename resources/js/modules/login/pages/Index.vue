<template>
    <LayoutLogin>
        <main id="main-container">
            <div class="bg-image" style="background-image: url('assets/media/wallpaper-login.jpg');">
                <div class="row g-0 bg-primary-op">
                    <div class="hero-static col-md-6 d-flex align-items-center bg-body-extra-light">
                        <div class="p-3 w-100">
                            <div class="mb-3 text-center">
                                <a class="fw-bold fs-1" href="#">
                                    <span class="text-dark">Login</span><span class="text-primary"> Apps</span>
                                </a>
                            </div>
                            <div class="row g-0 justify-content-center">
                                <div class="col-sm-8 col-xl-6">
                                    <form class="js-validation-signin" action="#" method="POST" @submit.prevent="login">
                                        <div class="py-3">
                                            <div class="mb-4">
                                                <input type="text" class="form-control form-control-lg form-control-alt" placeholder="Username" v-model="username">
                                            </div>
                                            <div class="mb-4">
                                                <input type="password" class="form-control form-control-lg form-control-alt" placeholder="Password" v-model="password">
                                            </div>
                                        </div>
                                        <div class="mb-4">
                                            <button type="submit" class="btn w-100 btn-lg btn-hero btn-primary">
                                                <i class="fa fa-fw fa-sign-in-alt opacity-50 me-1"></i> Login
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hero-static col-md-6 d-none d-md-flex align-items-md-center justify-content-md-center text-md-center">
                        <div class="p-3">
                            <a class="fw-bold fs-1" href="#">
                                    <img src="assets/media/logo-pamasuka.png" alt="">
                                </a>
                            <p class="display-4 fw-bold text-white mb-3">Costumer Care Area Pamasuka</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </LayoutLogin>
</template>
<script>
import Axios from '../../../config/Axios';
import LayoutLogin from '../../../layouts/LayoutLogin.vue'
import { mapActions } from 'vuex'
export default {
    data() {
        return {
            username: null,
            password: null,
        }
    },
    components: {
        LayoutLogin
    },
    methods: {
        ...mapActions('AUTH', {
            setTokenUser: 'setTokenUser'
        }),
        login(){
            let self = this;
            Axios.post('login', {
                username: this.username,
                password: this.password,
            })
            .then(function(response){
                self.setTokenUser(response.data)
                self.$router.push({ path: '/' });
            })
            .catch(function(error){
                console.log(error.response.data)
            });

        }
    },
}
</script>
<style>

</style>
