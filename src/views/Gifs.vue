<template>
  <div class="container">
    <h1 class="text-center m-3">Gifs</h1>
    <hr />
    <div class="row">
      <div class="col-12">
        <div class="m-3 w100">
          <GifCard :gif="gifs" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GifCard from "@/components/GifCard.vue";

export default {
  name: "Gifs",
  components: { GifCard },
  data: () => ({
    gifs: {},
  }),
  methods: {
    async getGifs() {
      const { data } = await this.axios.get(
        "https://api.giphy.com/v1/gifs/random?api_key=aFNFkgVW4NfEgRc3oq3MrGwU56oVnCjh"
      );
      this.gifs = data.data;
    },
  },
  created() {
    this.getGifs();
  },
};
</script>