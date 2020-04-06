const HelloJs = require('hellojs/dist/hello.all.min');
const VueHello = require('vue-hellojs');
require('dotenv').config();

HelloJs.init({
  google: process.env.VUE_APP_GOOGLE_APP_CLIENT_ID,
  facebook: process.env.VUE_APP_FACEBOOK_APP_CLIENT_ID
}, {
  redirect_uri: 'authcallback/'
});

export {
    VueHello,
    HelloJs
};