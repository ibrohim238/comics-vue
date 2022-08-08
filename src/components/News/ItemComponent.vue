<template>
  <router-link :to="{ name: 'chapter.show', params: { mangaSlug: item.chapter.manga.slug, chapterId: item.chapter.id } }">
    <div class="border border-b">
      <div class="flex">
        <div class="w-1/3">
          <img class="rounded w-24" :src="item.chapter.manga.media?.src" :alt="item.chapter.manga.name">
        </div>
        <div class="w-2/3">
          <h4 class="text-left">
            {{ item.chapter.manga.name }}
          </h4>
          <div class="flex">
            <h4>Том {{ item.chapter.volume }} Номер {{ item.chapter.number }} </h4>
            {{ item.chapter.name }}
          </div>
        </div>
        <div class="w-1/6">
          {{ item.type }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "ItemComponent",
  props: [
    'item'
  ]
}
</script>

<style scoped>

</style>