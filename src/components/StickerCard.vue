<template>
  <div class="card" style="width: 18rem">
    <img
      loader="lazy"
      :src="sticker.images.downsized.url"
      class="card-img-top"
      :alt="sticker.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ sticker.title }}</h5>
      <p class="card-text">
        {{ sticker.slug }}
      </p>
      <!-- <a :href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Stickercard",
  props: {
    sticker: {
      type: Object,
      required: true,
    },
  },
};
</script>