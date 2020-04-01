var search = new Vue({
  el: '#search-tab',
  data: {
    search: ''
  },
  methods: {
    toSearch: function() {
      alert(this.search);
    }
  }
})
