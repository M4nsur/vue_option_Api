import { createStore } from "vuex";
import date from "@/date/stack";
import blackList from "@/date/blackList";
export default createStore({
  state: {
    stack: date,
    blackListUsers: blackList,
  },
  getters: {
    getStack(state) {
      return state.stack;
    },
    getBlackList(state) {
      return state.blackListUsers;
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
