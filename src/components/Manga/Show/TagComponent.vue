<template>
  <div>
    <router-link
        v-for="tag in tags"
        :key="tag"
        to=""
    >
    <span class="mr-1 mb-1 inline-block bg-gray-200 rounded-full rounded-lg">
      {{ tag.name }}
    </span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "TagComponent",
  props: {
    tags: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>

</style>