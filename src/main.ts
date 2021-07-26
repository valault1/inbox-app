import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import MainConnection from './db-access/MainConnection';

// Import custom theming
// REPLACED by a line in vue.config.js
//import './app.scss'


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.config.productionTip = false

console.log("calling main...");
new MainConnection().main();

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
