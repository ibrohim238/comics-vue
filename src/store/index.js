import { createStore } from 'vuex'
import auth from '@/store/modules/auth'
import manga from '@/store/modules/manga'
import chapter from "@/store/modules/chapter";
import history from "@/store/modules/history";

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    auth,
    manga,
    chapter,
    history,
  }
})
