<template lang="html">
  <div class="navbar d-flex justify-content-center">
    <b-pagination v-on:input="click" :total-rows="pages"
                  v-model="searchPages" :per-page="1" />
  </div>
</template>

<script>
export default {
  computed: {
    searchPages: {
      get() {
        return this.$store.getters.get_searchPages;
      },
      set(value) {
        this.$store.commit("set_searchPages", value);
      }
    },
    pages() {
      return this.$store.getters.get_wallpapersInfo.pages;
    }
  },
  methods: {
    click() {
      document.getElementById("walls").scroll(0,0)

      this.$store.commit("set_wallID", 0);
      this.$store.commit("changeLoader");
      this.$store.commit("set_apiURL");

      this.get(this.$store.getters.get_apiURL);

      this.$store.commit("clear_apiURL");
      setTimeout(this.$store.commit, 2000, "changeLoader");
    }
  }
}
</script>

<style lang="css" scoped>
  .navbar
  {
    position: absolute;
    z-index: 9999;
    background: white;
    bottom: 0.01rem;
    width: 63.9vw;
  }

</style>
