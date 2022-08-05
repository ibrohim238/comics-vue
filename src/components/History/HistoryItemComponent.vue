<template>
  <router-link :to="{ name: 'chapter.show', params: { mangaSlug: history.chapter.manga.slug, chapterId: history.chapter.id } }">
    <div class="border border-b">
      <div class="flex">
        <div class="w-1/3">
          <img v-if="history.chapter.manga.media" class="rounded w-24" :src="history.chapter.manga.media.src" :alt="history.chapter.manga.name">
        </div>
        <div class="w-2/3">
          <h4 class="text-left">
            {{ history.chapter.manga.name }}
          </h4>
          <div class="flex">
            <h4>Том {{ history.chapter.volume }} Номер {{ history.chapter.number }} </h4>
            {{ history.chapter.name }}
          </div>
        </div>
        <div class="w-1/6">
          {{ history.type }}
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "HistoryItemComponent",
  props: [
      'history'
  ]
}
</script>

<style scoped>

</style>