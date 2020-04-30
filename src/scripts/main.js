import Vue from 'vue';
// import VueApexCharts from 'vue-apexcharts';
// import jQuery from 'jquery';
// import 'bootstrap';
// import 'popper.js';

import store from './store';

import Card from './components/Card.vue';
import Workloads from './components/Workloads.vue';
import ProtocolNetworks from './components/ProtocolNetworks.vue';

import './jquery-ui';

// Vue.use(VueApexCharts)
Vue.component('Card', Card);
Vue.component('Workloads', Workloads);
Vue.component('ProtocolNetworks', ProtocolNetworks);

Vue.config.productionTip = false;

new Vue({ store }).$mount('#iotcomms-app');
