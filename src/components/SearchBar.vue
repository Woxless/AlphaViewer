<template lang="html">
  <b-row>
    <b-col cols="8">
      <form v-on:submit.prevent="search">
        <b-input-group prepend="search">
          <b-input id="inline-form-input-username" placeholder="Do you wanna pie?"
                    v-model="searchModel" autocomplete="off" maxlength="128" />
        </b-input-group>
      </form>
    </b-col>
  </b-row>
</template>

<script>
  export default {
    computed: {
      searchModel: {
        get() {
          return this.$store.getters.get_searchInput;
        },
        set(value) {
          this.$store.commit("set_searchInput", value);
        }
      }
    },

    methods: {
      search() {
        document.getElementById("walls").scroll(0,0)

        this.$store.commit("set_wallID", 0);
        this.$store.commit("changeLoader");
        this.$store.commit("set_apiURL");

        this.get(this.$store.getters.get_apiURL);

        this.$store.commit("clear_apiURL");
        setTimeout(this.$store.commit, 1000, "changeLoader");
      }
    }
  }
</script>

<style lang="css" scoped>
  .input-group { padding-top: 0.7rem; }

  input:focus
  {
    border-color: #ced4da;
    box-shadow: none;
  }
</style>
