<template lang="html">
  <div id="walls" class="flex-grid">
    <b-container>
      <b-row v-if="loader">
        <b-col class="loader-container d-flex justify-content-center" cols="12">
           <div class="loader"></div>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="(image,index) in walls"
               cols="4" v-on:click="select(index)" v-bind:key="index">
          <img class="card-img" v-bind:src="image.url_thumb">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  methods: {
    select(value) {
      this.$store.commit("set_wallID", value);
    }
  },
  computed: {
    walls() {
      return this.$store.getters.get_wallpapersInfo.wallpapers;
    },
    loader() {
      return this.$store.getters.loader
    }
  }
}
</script>

<style lang="css" scoped>
  .flex-grid
  {
    overflow-y: scroll;
    width: 63.9vw;
    height: 85vh;
  }

  .col-4 { padding: 0; padding: 1rem; height: 12rem; }
  .card-img { max-width: 20rem; }


  .loader-container
  {
    z-index: 3000;
    height: 90vh;
    margin-top: 25%;
    background: white;
  }

  .loader
  {
    border: 0.4rem solid #f3f3f3;
    border-top: 0.4rem solid #3498db;
    border-radius: 50%;
    width: 5rem;
    height: 5rem;
    animation: spin 2s linear infinite;
  }

  @keyframes spin
  {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>
