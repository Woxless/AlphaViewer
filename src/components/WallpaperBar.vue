<template lang="html">
  <div class="flex-grid">
    <b-container>
      <b-row>
        <b-col cols="12">
           <img v-for="(wall, index) in this.$store.getters.get_wallpapers.wallpapers"
                v-bind:key="index" v-bind:src="wall" alt="">
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
  .flex-grid
  {
    overflow-y: scroll;
    width: 64.5vw;
    height: 85vh;
  }

  .col-3
  {
    padding: 0;
  }
</style>
