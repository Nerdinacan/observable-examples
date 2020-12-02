import Vue from 'vue'
import VueRx from 'vue-rx'
import App from './App.vue'
import router from './router'
import { initSpy } from "./debugging";

Vue.config.productionTip = false;

Vue.use(VueRx);

initSpy();

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
