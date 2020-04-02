<template>
  <div id="app">
    <div class="container-fluid">
      <Search />
      <Wallpapers />
      <PageNavigator />
      <WallpaperInfo />
    </div>
  </div>
</template>

<script>
import Search from "@/components/Search.vue";
import WallpaperInfo from "@/components/WallpaperInfo.vue";
import PageNavigator from "@/components/PageNavigator.vue";
import Wallpapers from "@/components/Wallpapers.vue";

export default {
  name: 'App',
  components: {
    Search, WallpaperInfo,
    PageNavigator, Wallpapers
  }
}
</script>

<style lang="css">
  body { overflow: hidden; }

  input:focus { outline: none; }

  input::-webkit-search-decoration,
  input::-webkit-search-cancel-button,
  input::-webkit-search-results-button,
  input::-webkit-search-results-decoration { display: none; }
</style>
