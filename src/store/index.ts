import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"

const vuexLocal = new VuexPersistence({
  key: "typerefinery",
  storage: window.localStorage,
})

export default createStore({
  plugins: [vuexLocal.plugin],
})
