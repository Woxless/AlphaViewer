export default {
  install(Vue, store) {
    Vue.prototype.$myMethod = function () {
      console.log('Be happy my dear friend!');
    },
    Vue.prototype.get = (api_url) => {
      Vue.axios.get(api_url)
      .then((response) => {
        if(response.data.success) {
          store.commit("set_wallpapersInfo", {
            wallpapers: response.data.wallpapers,
            pages: Math.ceil(response.data.total_match / 30)
          });
        } else { alert(response.data.error); }
        })
      .catch(function (error) { alert(error); })
    },
    Vue.prototype.download = (wallpaper, type) => {
      Vue.axios({
        url: wallpaper,
        method: 'GET',
        responseType: 'blob', // important
      })
      .then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute(
          'download',
          'alphaWalls-' + getRandomArbitrary(6,10) + "." + type
        );
        document.body.appendChild(link);
        link.click();

        setTimeout(store.commit, 1000, "changeLoader");

        console.log("Complete")
      });

      function getRandomArbitrary(min, max) {
          return Math.random() * (max - min) + min;
      }
    }
  }
}
