import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "s",
    password: "a",
    isLoading: false,
    loginSuccess: false,
  },
  mutations: {
    checkAuthorization(state, payload) {
      state.loginSuccess =
        payload.username == state.username &&
        payload.password == state.password;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
  },
  actions: {
    login({ commit, state }, payload) {
      commit("setLoading", true);
      commit("checkAuthorization", payload);
      setTimeout(() => {
        commit("setLoading", false);

        if (state.loginSuccess) router.push("/about");
        else { alert("Kullanıcı Adı veya Şifre Yanlış..") }
      }, 3000);
    },
  },
  modules: {},
});
