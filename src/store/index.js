import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiURL: "https://wall.alphacoders.com/api2.0/get.php?auth=388a6788ee9df19ff0abc683bd297df3&method=search&term=",

    searchPages: 1,
    isClick: true,
    searchInput: "",
    wallpapers: []
  },

  getters: {
    get_searchInput(state) {
      return state.searchInput;
    },

    get_apiURL(state) {
      return state.apiURL;
    },

    get_wallpapers(state) {
      return {
        wallpapers: state.wallpapers,
        searchPages: state.searchPages
      }
    },

    get_isClick(state) {
      return state.isClick;
    }
  },
  mutations: {
    clear_apiURL(state) {
      state.apiURL = "https://wall.alphacoders.com/api2.0/get.php?auth=388a6788ee9df19ff0abc683bd297df3&method=search&term=";
    },

    set_apiURL(state) {
      state.apiURL = state.apiURL + state.searchInput + "&page=1";
    },

    set_searchInput(state, value) {
      state.searchInput = value;
    },

    set_wallpapers(state, walls, pages) {
      state.wallpapers = walls;
      state.searchPages = pages;
    },

    set_isClick(state) {
      state.isClick = !(state.isClick);
    }
  },

  actions: {
  },
  modules: {
  }
})
