<template lang="html">
  <div class="row">
    <div id="wallpaper-info-tab" class="col-4 block">
      <div v-if="this.$store.getters.get_Wall.length != 0" class="row">
        <div id="thumb"
        v-bind:style="{'background-image': 'url(' +
        this.$store.getters.get_Wall[this.$store.getters.get_wallpaper_index].url_thumb + ')' }">
        </div>
        <div id="wxh-wrapper">
          <h4 class="wxh">{{
            this.$store.getters.get_Wall[this.$store.getters.get_wallpaper_index].width
            + " x " +
            this.$store.getters.get_Wall[this.$store.getters.get_wallpaper_index].height
          }}</h4>
        </div>
        <input type="button" value="Download image">
        <input type="button" value="Set as wallpaper">
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
#wallpaper-info-tab
{
  z-index: 200;
  position: absolute;
  overflow: hidden;
  height: 100vh;
  right: 0;
  top: 0;
}

#thumb
{
  width: 100%;
  height: 300px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}

#wxh-wrapper
{
  padding: 10px;
  width: 100%;
}

.wxh { text-align: center; }

input[type="button"]
{
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  margin-bottom: 2vh;
  border: 0;
}

input[type="button"]:hover
{
  background-color: #ffff;
  outline-width: 2.5px;
  outline-style: solid;
  outline-color: #f5f5f5;
  outline-color: WhiteSmoke;
  outline-color: rgb(245,245,245);
}
</style>
