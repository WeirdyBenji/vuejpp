/* eslint-disable */
import Vue from 'vue';
import App from './App';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import router from './router';

Vue.use(Vuetify);

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
