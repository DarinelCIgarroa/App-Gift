<template>
  <div class="container mt-3">
    <h1 class="text-center">Gifs</h1>
    <hr />
    <div class="search">
      <SearchData @search="getGifs" />
    </div>
    <div class="row">
      <div class="content-card">
        <div v-show="loading" class="loading">
            <Loading />
        </div>
        <GifCard v-for="gif in gifs" :key="gif.id" :gif="gif" class="m-3" />
      </div>
    </div>
  </div>
</template>

<script>
import GifCard from "@/components/GifCard.vue";
import SearchData from "../components/SearchData.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "Gifs",
  components: { GifCard, SearchData, Loading },
  data: () => ({
    gifs: {},
    loading: null,
  }),
  methods: {
    async getGifs(search = "naruto") {
      this.loading = true;
      const { data } = await this.axios.get(
        `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=aFNFkgVW4NfEgRc3oq3MrGwU56oVnCjh`
      );
      this.gifs = data.data;
      this.loading = false;
    },
  },
  created() {
    this.getGifs();
  },
};
</script>

<style scoped>
.search {
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-card {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}
</style>
