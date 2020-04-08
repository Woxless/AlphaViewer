import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiURL: "http://wall.alphacoders.com/api2.0/get.php?auth=388a6788ee9df19ff0abc683bd297df3&method=search&term=",

    wallID: 0,
    searchPages: 1,
    isClick: true,
    loader: false,
    searchInput: "",
    wallpapersInfo: {
      pages: 1,
      wallpapers: [ ]
    }
  },

  getters: {
    get_searchPages(state) {
      return state.searchPages
    },

    loader(state) {
      return state.loader;
    },

    get_searchInput(state) {
      return state.searchInput;
    },

    get_apiURL(state) {
      return state.apiURL;
    },

    get_wallpapersInfo(state) {
      return state.wallpapersInfo;
    },

    get_isClick(state) {
      return state.isClick;
    },

    get_wallID(state) {
      return state.wallID
    }
  },
  mutations: {
    clear_apiURL(state) {
      state.apiURL = "https://wall.alphacoders.com/api2.0/get.php?auth=388a6788ee9df19ff0abc683bd297df3&method=search&term=";
    },

    set_apiURL(state) {
      state.apiURL = state.apiURL + state.searchInput.replace(/ /g, '%20') + "&page=" + state.searchPages;
    },

    set_searchPages(state, value) {
      state.searchPages = value;
    },

    set_searchInput(state, value) {
      state.searchInput = value;
    },

    set_wallpapersInfo(state, value) {
      state.wallpapersInfo = value;
    },

    set_isClick(state) {
      state.isClick = !(state.isClick);
    },

    changeLoader(state) {
      state.loader = !(state.loader);
    },

    set_wallID(state, value) {
      state.wallID = value;
    }
  },

  actions: {
  },
  modules: {
  }
})
