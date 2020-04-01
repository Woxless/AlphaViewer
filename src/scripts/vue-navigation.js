var search = new Vue({
  el: '#fixed-btns',
  data: {
    pageNumber: 1
  },
  methods: {
    goTo: function() {
      alert(this.pageNumber);
    },
    goNav: function(type) {
      if(type == "left"){
        this.pageNumber = this.pageNumber - 1;
      } else {
        this.pageNumber = this.pageNumber + 1;
      }
    }
  }
})
