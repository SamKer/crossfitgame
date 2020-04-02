import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import socket from './plugins/socket';
import './registerServiceWorker';
import { VueHello, HelloJs } from './plugins/oauth';
import FlagIcon from 'vue-flag-icon';
import i18n from './i18n';
import Storage from './plugins/Storage';

Vue.config.productionTip = false;


Vue.use(socket);
Vue.use(VueHello, HelloJs);
Vue.use(FlagIcon);
Vue.use(Storage, {
  session: false,
  user: {
    name: '...?',
    locale: 'en'
  }
});

new Vue({
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app');
