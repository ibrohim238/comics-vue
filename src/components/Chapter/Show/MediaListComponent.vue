<template>
  <div class="container mx-auto">
    <img
        v-for="image in media"
        :key="image"
        :src="image.src"
        alt=""
    >
  </div>
</template>

<script>
export default {
  name: "MediaListComponent",
  components: {

  },
  props: {
    media: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style scoped>

</style>