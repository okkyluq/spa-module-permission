import Vue from 'vue'

export default Vue.mixin({
    methods: {
        redirectIfNotAcces: function(permision){
            if(this.$store.state.AUTH.permission.indexOf(permision) === -1){
                this.$router.push({name: '403'})
            }
        }
    }
});
