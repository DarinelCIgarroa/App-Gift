<template>
  <div class="container mt-3">
    <h1 class="text-center">Stickers</h1>
    <hr />
    <div class="search">
      <Search @searchCategory="getGifs" />
    </div>
    <div class="row">
      <div class="content-card">
        <div v-show="loading" class="loading">
            <Loading />
        </div>
        <StickerCard v-for="sticker in stickers" :key="sticker.id" :sticker="sticker" class="m-3" />
      </div>
    </div>
  </div>
</template>

<script>
import StickerCard from "@/components/StickerCard.vue";
import Search from "../components/Search.vue";
import Loading from "../components/Loading.vue";

export default {
  name: "Stickers",
  components: { StickerCard, Search, Loading },
  data: () => ({
    stickers: {},
    loading: null,
  }),
  methods: {
    async getGifs(search = "naruto") {
      this.loading = true;
      const { data } = await this.axios.get(
        `https://api.giphy.com/v1/stickers/search?q=${search}&api_key=aFNFkgVW4NfEgRc3oq3MrGwU56oVnCjh`
      );
      this.stickers = data.data;
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
