<template>
  <div class="p-3">
    <div class="relative">
       <router-link :to="{ name: 'manga.show', params: { mangaSlug: manga.slug } }">
         <div>
           <img v-if="manga.media" :src="manga.media.src" :alt="manga.name">
           <h4>{{ manga.name }}</h4>
         </div>
       </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailComponent",
  props: [
      'manga'
  ]
}
</script>

<style scoped>

</style>