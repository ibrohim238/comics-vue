<template>
  <div class="p-3">
    <div class="relative">
       <router-link :to="{ name: 'manga.show', params: { mangaSlug: manga.slug } }">
         <div>
           <img :src="manga.media?.src" :alt="manga.name">
           <h4>{{ manga.name }}</h4>
         </div>
       </router-link>
    </div>
  </div>
</template>

<script>
import RepositoryFactory from "@/services/repository-factory";

const mangaRepository = RepositoryFactory.get('manga')

export default {
  name: "DetailComponent",
  props: [
      'manga'
  ],
  methods: {
    delete(slug) {
      mangaRepository.delete(slug)
          .then(() => {

          })
          .catch(error => {
            console.log(error);
          })
    },
  }
}
</script>

<style scoped>

</style>