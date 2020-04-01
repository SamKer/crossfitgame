import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import socket from './plugins/socket';
import './registerServiceWorker'

Vue.config.productionTip = false;
Vue.use(socket);
new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
