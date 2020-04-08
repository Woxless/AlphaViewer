<template lang="html">
  <b-row>
    <b-col v-if="isClick" cols="11">
      <b-img v-bind:src="walls[wallID].url_thumb"
             fluid alt="Selected Image"></b-img>

      <hr>

      <b-list-group>
        <b-list-group-item>
          <p>
            <b> Width: </b> {{ walls[wallID].width }}
          </p>
        </b-list-group-item>

        <b-list-group-item>
          <p>
            <b> Height: </b> {{ walls[wallID].height }}
          </p>
        </b-list-group-item>
      </b-list-group>

      <div class="buttons">
        <b-button v-on:click="hello" block squared variant="primary">
          Download image
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  methods: {
    hello() {
      document.getElementById("walls").scroll(0,0)
      this.$store.commit("changeLoader");
      
      this.download(
        this.walls[this.wallID].url_image,
        this.walls[this.wallID].file_type
      );
    }
  },
  computed: {
    wallID() {
      return this.$store.getters.get_wallID;
    },
    walls() {
      return this.$store.getters.get_wallpapersInfo.wallpapers;
    },
    isClick() {
      return this.$store.getters.get_isClick;
    }
  }
}
</script>

<style lang="css" scoped>
  .row
  {
    position: absolute;
    overflow: hidden;
    width: 35vw;
    height: 100vh;
    z-index: 200;
    right: 0;
    top: 0;
    padding-top: 0.4rem;
    overflow-y: scroll;
  }

  .buttons { margin-top: 0.9rem; }
  img { margin-top: 0.4rem; }
  p { margin: 0; }

</style>
