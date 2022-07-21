
import Vue from 'vue'
import store from '../store'

export default Vue.directive("can", {
	bind: (el, binding) => {
        if(store.state.auth.permission.indexOf(binding.value) === -1){
            el.style.display = 'none';
        }
	}
});
