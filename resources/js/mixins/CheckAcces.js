import Vue from 'vue'

export default Vue.mixin({
    methods: {
        checkAcces: function(permision){
            if(this.$store.state.AUTH.permission.indexOf(permision) === -1){
                return false;
            } else {
                return true;
            }
        }
    }
});
