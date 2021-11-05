<template>
  <form @submit.prevent="searchCategory">
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
  name: "Search",
  data: () => ({
    search: "",
  }),
  methods: {
    searchCategory() {
      this.$emit("searchCategory", this.search);
    },
  },
};
</script>


<style scoped>
.input-search{
  width: 250px;
}
</style>