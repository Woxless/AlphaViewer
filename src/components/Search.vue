<template lang="html">
  <div class="row">
    <div id="search-tab" class="col-9 block">
      <form v-on:submit.prevent="get_search">
        <input v-model="search_input" v-on:input="hello" class="input" type="search" placeholder="Do you wanna pie?" maxlength="128">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search_api_url: ""
    }
  },
  computed: {
    search_input: {
      get() {
        return this.$store.getters.set_search_input
      },
      set(value) {
        this.$store.commit("set_search_input", value);
      }
    }
  },
  methods: {
    hello() {
      console.log(this.$store.getters.get_search_input)
    },
    get_search() {
      this.search_api_url = this.$store.getters.get_API.url + "?auth=" +
                            this.$store.getters.get_API.key + "&method=search&term=" +
                            this.$store.getters.set_search_input + "&page=" + this.$store.getters.get_page;

      this.$store.commit("set_is_Search", true);
      this.$http.get(this.search_api_url).then((response) => {
        if(response.data.success) {
          this.$store.commit("set_Wall", response)
        } else {
          alert(response.data.error)
        }
      })
      .finally(() =>{
        setTimeout(this.$store.commit, 1000, "set_is_Search", false);
      })
    }
  }
}
</script>

<style lang="css">
.block
{
  background-color: #ffff;
  border-style: solid;
  border-width: 1px;
  border-color: #E6E6FA;
  border-color: Lavender;
  border-color: rgb(230,230,250);
}

.input
{
  border: 0;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #f5f5f5;
  background-color: WhiteSmoke;
  background-color: rgb(245,245,245);
}
</style>

<style lang="css" scoped>
#search-tab
{
  z-index: 100;
  height: 55px;
}

input[type="search"]
{
  width: 64vw;
  margin-top: 10px;
  padding-right: 15px;
  padding-left: 30px;
}
</style>
