export default {
  install(Vue) {
    Vue.prototype.$myMethod = function () {
      console.log('Be happy my dear friend!');
    },
    Vue.prototype.get = (api_url, store) => {
      Vue.axios.get(api_url).then((response) => {
        if(response.data.success) {
          store.commit(
            "set_wallpapers", response.data.wallpapers,
            response.data.total_match / 30
          );
        } else {
          alert(response.data.error);
        }
      })
    }
  }
}
