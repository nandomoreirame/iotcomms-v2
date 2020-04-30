import Vue from 'vue';
// import VueApexCharts from 'vue-apexcharts';

import store from './store';

import Card from './components/Card';
import Workloads from './components/Workloads';
import ProtocolNetworks from './components/ProtocolNetworks';
// import Charts from './components/Charts';

// import jQuery from 'jquery';
// import 'bootstrap';
// import 'popper.js';

// Vue.use(VueApexCharts)
Vue.component('Card', Card)
Vue.component('Workloads', Workloads)
Vue.component('ProtocolNetworks', ProtocolNetworks)
// Vue.component('Charts', Charts)

import './jquery';

Vue.config.productionTip = false;

new Vue({ store }).$mount('#iotcomms-app');
