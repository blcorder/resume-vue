import Vue from 'vue'
import App from './App.vue'
import router from './router/index'

Vue.config.productionTip = false;

// import MintUI from 'mint-ui'
// import 'mint-ui/lib/style.css'
// Vue.use(MintUI);

import {Button, Badge} from 'mint-ui'

Vue.component(Button.name, Button);
Vue.component(Badge.name, Badge);

new Vue({
    render: h => h(App),
    router,
}).$mount('#app');
