import { createStore } from "vuex";

export default createStore({
  state: {
    loading: false,
    keadaanAwal: "",
    error: "",
  },
  mutations: {
    load(state, data) {
      if (state.keadaanAwal == null) {
        state.loading = data;
      } else {
        state.loading = false;
      }
    },
    keadaanAwal(state, dataCuaca) {
      state.keadaanAwal = dataCuaca;
    },
    err(state, dataerr) {
      state.error = dataerr;
    },
  },
  actions: {
    takeData({ commit }, payload) {
      commit("load", payload.dataLoad);
      const data = async () => {
        try {
          const takeDataCuaca = await fetch(
            `http://api.openweathermap.org/data/2.5/weather?q=${payload.inputan}&appid=80125c62b3af243b78b7c6fdb4d76408&lang=id`
          );
          const takeDataJson = await takeDataCuaca.json();
          if (takeDataJson.cod === 200) {
            commit("keadaanAwal", takeDataJson);
          } else {
            commit("err", takeDataJson.message);
          }
        } catch (err) {
          console.log(err);
        }
      };
      data();
    },
  },
});
