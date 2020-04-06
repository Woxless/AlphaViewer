<template lang="html">
  <b-row>
    <b-col v-if="isClick" cols="11">
      <b-img src="https://www.mirf.ru/wp-content/uploads/2020/01/Deca-Dense.jpg"
             fluid alt="Selected Image"></b-img>

      <hr>

      <b-list-group>
        <b-list-group-item>
          <p>
            <b> Width: </b> 800px
          </p>
        </b-list-group-item>

        <b-list-group-item>
          <p>
            <b> Height: </b> 800px
          </p>
        </b-list-group-item>
      </b-list-group>

      <div class="buttons">
        <b-button block squared variant="primary">
          Download image
        </b-button>
        <b-button block squared variant="primary">
          Set image as Wallpaper
        </b-button>
      </div>
    </b-col>
  </b-row>
</template>

<script>
export default {
  computed: {
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
