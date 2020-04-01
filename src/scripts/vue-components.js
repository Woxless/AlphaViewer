var search = new Vue({
  el: '#app',
  data: {
    search: "",
    wallpapers: [
      {width: "200", height: "300", url_image: "https://artfiles.alphacoders.com/134/13428.jpg", url_thumb: "https://artfiles.alphacoders.com/134/thumb-13428.jpg", url_page: "https://art.alphacoders.com/arts/view/13428"},
      {width: "500", height: "600", url_image: "https://artfiles.alphacoders.com/739/73990.jpg", url_thumb: "https://artfiles.alphacoders.com/739/thumb-73990.jpg", url_page: "https://art.alphacoders.com/arts/view/73990"},
      {width: "300", height: "700", url_image: "https://artfiles.alphacoders.com/120/120927.jpg", url_thumb: "https://artfiles.alphacoders.com/120/thumb-120927.jpg", url_page: "https://art.alphacoders.com/arts/view/120927"},
      {width: "900", height: "1200", url_image: "https://artfiles.alphacoders.com/176/17691.jpg", url_thumb: "https://artfiles.alphacoders.com/176/thumb-17691.jpg", url_page: "https://art.alphacoders.com/arts/view/17691"},
      {width: "200", height: "300", url_image: "https://artfiles.alphacoders.com/134/13428.jpg", url_thumb: "https://artfiles.alphacoders.com/134/thumb-13428.jpg", url_page: "https://art.alphacoders.com/arts/view/13428"},
      {width: "500", height: "600", url_image: "https://artfiles.alphacoders.com/739/73990.jpg", url_thumb: "https://artfiles.alphacoders.com/739/thumb-73990.jpg", url_page: "https://art.alphacoders.com/arts/view/73990"},
      {width: "300", height: "700", url_image: "https://artfiles.alphacoders.com/120/120927.jpg", url_thumb: "https://artfiles.alphacoders.com/120/thumb-120927.jpg", url_page: "https://art.alphacoders.com/arts/view/120927"},
      {width: "900", height: "1200", url_image: "https://artfiles.alphacoders.com/176/17691.jpg", url_thumb: "https://artfiles.alphacoders.com/176/thumb-17691.jpg", url_page: "https://art.alphacoders.com/arts/view/17691"},
      {width: "200", height: "300", url_image: "https://artfiles.alphacoders.com/134/13428.jpg", url_thumb: "https://artfiles.alphacoders.com/134/thumb-13428.jpg", url_page: "https://art.alphacoders.com/arts/view/13428"},
      {width: "500", height: "600", url_image: "https://artfiles.alphacoders.com/739/73990.jpg", url_thumb: "https://artfiles.alphacoders.com/739/thumb-73990.jpg", url_page: "https://art.alphacoders.com/arts/view/73990"},
      {width: "300", height: "700", url_image: "https://artfiles.alphacoders.com/120/120927.jpg", url_thumb: "https://artfiles.alphacoders.com/120/thumb-120927.jpg", url_page: "https://art.alphacoders.com/arts/view/120927"},
      {width: "900", height: "1200", url_image: "https://artfiles.alphacoders.com/176/17691.jpg", url_thumb: "https://artfiles.alphacoders.com/176/thumb-17691.jpg", url_page: "https://art.alphacoders.com/arts/view/17691"}
    ],
    isWallpaper: false,
    wallpaper: {
      thumb: "./src/assets/preset.png",
      wxh: "~ Neko is rule ~"
    },
    page: 1
  },
  methods: {
    toSearch: function() {
      alert(this.search);
    },
    goTo: function() {
      alert(this.page);
    },
    goNav: function(type) {
      if(type == "left"){
        this.page = this.page - 1;
      } else {
        this.page = this.page + 1;
      }
    },
    getInfo: function (wallpaper) {
      this.isWallpaper = !(this.isWallpaper);
      this.wallpaper = wallpaper;
    }
  }
})
