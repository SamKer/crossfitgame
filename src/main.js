import Vue from 'vue';
import App from './App.vue';
import vuetify from './plugins/vuetify';
import socket from './plugins/socket';
import './registerServiceWorker';
import { VueHello, HelloJs } from './plugins/oauth';
import FlagIcon from 'vue-flag-icon';
import i18n from './i18n';
import Storage from './plugins/Storage';
import router from './router'


Vue.config.productionTip = false;


Vue.use(socket);
Vue.use(VueHello, HelloJs);
Vue.use(FlagIcon);

let defaultStorage = {
  session: false,
  user: {
    auth: false,
    name: '...?',
    locale: 'en'
  }
};
Vue.use(Storage, defaultStorage);
/*
const router = new VueRouter({
  routes: [
    { path: '/rgpc', component:  Rgpc},
    { path: '/contact', component: Contact }
  ]
} );*/

new Vue({
  vuetify,
  i18n,
  router,
  render: h => h(App)
}).$mount('#app');
