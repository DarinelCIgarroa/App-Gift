<template>
  <div class="card" style="width: 18rem">
    <img
      loader="lazy"
      :src="gif.images.downsized.url"
      class="card-img-top"
      :alt="gif.title"
    />
    <div class="card-body">
      <h5 class="card-title">{{ gif.title }}</h5>
      <p class="card-text">
       Creador: {{ gif.slug}}
      </p>
      <!-- <a :href="#" class="btn btn-primary">Go somewhere</a> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "Gifcard",
  props: {
    gif: {
      type: Object,
      required: true,
    },
  },
};
</script>