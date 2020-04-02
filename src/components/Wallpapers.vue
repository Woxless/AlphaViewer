<template lang="html">
  <div id="wallpapers">
    <div v-if="this.$store.getters.get_is_Search" id="loading">
      <img src="../assets/loading.gif">
    </div>
    <div class="row">
      <div class="col-4 wall"
      v-for="(wallpaper, index) in this.$store.getters.get_Wall"
      v-bind:key="index" v-bind:style="{'background-image': 'url(' + wallpaper.url_thumb + ')' }"
      v-on:click="click(index)">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    click(index) {
      this.$store.commit("set_wallpaper_index", index);
    }
  }
}
</script>

<style lang="css" scoped>
#wallpapers
{
  width: 64vw;
  height: 93vh;
  overflow-x: hidden;
  overflow-y: scroll;
}

#loading
{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  z-index: 5000;
}

#loading img
{
  width: 26vw;
}

.wall
{
  width: 30%;
  height: 250px;
  padding: 30px;
  background-size: 200px;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
