<template>
  <form @submit.prevent="searchData">
    <div class="mb-3">
      <input
        v-model="search"
        type="text"
        class="form-control input-search text-center"
        placeholder="what do you want to look for?"
      />
    </div>
    <button type="submit" class="btn btn-sm btn-dark">Search Gif</button>
  </form>
</template>

<script>
export default {
  name: "SearchData",
  data: () => ({
    search: "",
  }),
  methods: {
    searchData() {
      this.$emit("search", this.search);
    },
  },
};
</script>


<style scoped>
.input-search{
  width: 250px;
}
</style>