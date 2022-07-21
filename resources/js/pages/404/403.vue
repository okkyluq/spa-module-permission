<template>
    <layout-admin>
        <div class="content">
            <div class="row">
                <div class="col-md-12">
                    <div class="flex-grow-1 d-flex align-items-center p-5 bg-body-light">
                        <div class="w-100">
                            <p class="text-danger fs-4 fw-bold text-uppercase mb-2"> 403 Error </p>
                            <h1 class="fw-bold mb-2"><i class="fa fa-exclamation-triangle"></i> Akses Terlarang</h1>
                            <p class="fs-4 fw-medium text-muted mb-5">
                                Maaf Anda Tidak Bisa Mengakses Halaman Karena Anda Tidak Memiliki Hak Akses Kehalaman Tersebut.
                            </p>
                            <router-link to="/" class="btn btn-lg btn-alt-danger">
                                <i class="fa fa-arrow-left opacity-50 me-1"></i> Kembali Ke Dashboard
                            </router-link>
                        </div>
                      </div>
                </div>
            </div>
        </div>
    </layout-admin>
</template>

<script>
    import LayoutAdmin from '../../layouts/LayoutAdmin.vue'
    export default {
        components: {
            LayoutAdmin
        },

    }
</script>
