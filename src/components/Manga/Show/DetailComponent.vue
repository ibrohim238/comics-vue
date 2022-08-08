<template>
  <div class="md:flex">
    <router-link
        :to="{ name: 'manga.edit', params: { slug: manga.slug } }"
    >
      Edit
    </router-link>
    <div class="shadow-lg mb-2">
        <img  :src="manga.media?.src" :alt="manga.name" class="object-cover md:h-96 md:w-80 rounded-lg">
    </div>
    <div class="ml-6 w-full">
      <h4 class="text-left border-b mb-2">
        {{ manga.name }}
      </h4>
      <TagComponent
          class="border-b mb-2"
          :tags="manga.tags"
      />
      <h4 class="text-left">
        {{ manga.description }}
      </h4>
    </div>
  </div>
</template>

<script>
import TagComponent from "@/components/Manga/Show/TagComponent";
import Manga from "@/services/classes/Manga";

export default {
  name: "DetailComponent",
  components: {
    TagComponent
  },
  props: {
    manga: {
      type: Manga,
      default: null
    }
  }
}
</script>

<style scoped>

</style>