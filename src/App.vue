<template>
  <div id="app" >
    <b-container fluid>
      <SearchBar />
      <WallpaperBar />
      <InfoBar />
      <NavBar />
    </b-container>
  </div>
</template>

<script>
import SearchBar from "./components/SearchBar.vue";
import InfoBar from "./components/InfoBar.vue";
import NavBar from "./components/NavBar.vue";
import WallpaperBar from "./components/WallpaperBar.vue";


export default {
  name: 'App',
  components: {
    SearchBar, InfoBar,
    NavBar, WallpaperBar
  }
}
</script>

<style>
  @import "./styles/basic.css";
</style>
