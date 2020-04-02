import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    api_url: "https://wall.alphacoders.com/api2.0/get.php",
    api_key: "388a6788ee9df19ff0abc683bd297df3",
    search_input: "",
    page: 1,
    is_Search: false,
    wallpapers: [],
    wallpaper_index: 0
  },
  mutations: {
    set_search_input: (state, value) => {
      state.search_input = value;
    },
    set_page: (state, value) => {
      state.page = value;
    },
    set_Wall: (state, response) => {
      state.wallpapers = response.data.wallpapers;
    },
    set_is_Search: (state, value) => {
      state.is_Search = value;
    },
    set_wallpaper_index: (state, value) => {
      state.wallpaper_index = value;
    }
  },
  actions: {
  },
  getters: {
    set_search_input: (state) => {
      return state.search_input
    },
    get_page: (state)=>{
      return state.page;
    },
    get_Wall: (state)=>{
      return state.wallpapers;
    },
    get_API: (state)=>{
      return {
        url: state.api_url,
        key: state.api_key
      }
    },
    get_is_Search: (state) => {
      return state.is_Search;
    },
    get_wallpaper_index: (state) => {
      return state.wallpaper_index;
    }
  },
  modules: {
  }
})
