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

import './draggable';
import './charts/iotcomms';
// import './charts/pie';
import './charts/latency';
import './charts/server_cpu';
import './charts/server_memory';
import './charts/client_cpu';

Vue.config.productionTip = false;

new Vue({ store }).$mount('#iotcomms-app');

window.Vue = Vue;
