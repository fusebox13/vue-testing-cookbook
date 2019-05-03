import Vue from "vue";
import Vuex from "vuex";
import Example from "@/modules/vuex/Example";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    some: "thing",
    counter: 1
  },
  mutations: {
    incrementCounter(state) {
      state.counter++;
    }
  },
  modules: {
    Example
  }
});
