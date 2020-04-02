<template lang="html">
  <div class="row">
    <div id="fixed-btns" class="col-9 block">
      <b-icon-chevron-left class="icons" />
      <form v-on:submit.prevent="get_search">
        <input class="input" type="text" v-model.number="page_number" maxlength="3">
      </form>
      <b-icon-chevron-right class="icons" />
    </div>
  </div>
</template>

<script>
export default {

  methods: {
    get_search() {
      this.search_api_url = this.$store.getters.get_API.url + "?auth=" +
                            this.$store.getters.get_API.key + "&method=search&term=" +
                            this.$store.getters.set_search_input + "&page=" + this.$store.getters.get_page;

      this.$store.commit("set_is_Search", true);
      this.$http.get(this.search_api_url).then((response) => {
        if(response.data.success) {
          console.log(this.search_api_url)
          this.$store.commit("set_Wall", response)
        } else {
          alert(response.data.error)
        }
      })
      .finally(() =>{
        setTimeout(this.$store.commit, 1000, "set_is_Search", false);
      })
    }
  },
  computed: {
    page_number: {
      get() {
        return this.$store.getters.get_page;
      },
      set(value) {
        this.$store.commit("set_page", value);
      }
    }
  }
}
</script>

<style lang="css" scoped>
#fixed-btns
{
  z-index: 100;
  position: fixed;
  width: 67vw;
  height: 35px;
  bottom: 0;
}

.icons
{
  width: 22px;
  height: 22px;
}

form
{
  display: inline-block;
}

input[type="text"]
{
  width: 75px;
  text-align: center;
}

@media (min-width: 817px) {
  input[type="text"]
  {
    margin-left: 25vw;
    margin-right: 25vw;
  }
}
@media (min-width: 1200px) {
  input[type="text"]
  {
    margin-left: 26.5vw;
    margin-right: 26.5vw;
  }
}

@media (min-width: 1300px) {
  input[type="text"]
  {
    margin-left: 27.5vw;
    margin-right: 27.5vw;
  }
}
</style>
