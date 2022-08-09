<template>
  <div class="container mx-auto">
    <div class="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
      <MangaCardComponent v-for="manga in mangas" :key="manga" :manga="manga"/>
    </div>
  </div>
</template>

<script>
import MangaCardComponent from "@/components/Manga/Index/DetailComponent";

export default {
  name: "MangaListComponent",
  components: {
    MangaCardComponent
  },
  props: {
    mangas: Array
  }
}
</script>

<style scoped>

</style>