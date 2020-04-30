import Vue from 'vue';
import Vuex from 'vuex';
import { workloads, protocolNetworks } from '../data';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    workloads,
    protocolNetworks,
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
