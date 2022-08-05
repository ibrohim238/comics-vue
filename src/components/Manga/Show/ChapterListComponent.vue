<template>
  <div class="overflow-x-auto relative shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="py-3 px-6">
            Глава
          </th>
          <th scope="col" class="py-3 px-6">
            Команда
          </th>
          <th scope="col" class="py-3 px-6">
            Дата выхода
          </th>
          <th scope="col" class="py-3 px-6">
            Цена
          </th>
          <th scope="col" class="py-3 px-6 text-right">
            <router-link :to="{ name: 'chapter.create', params: { slug: manga.slug } }">
              Create
            </router-link>
          </th>
        </tr>
      </thead>
      <tbody>
      <ChapterItemComponent
          :key="chapter"
          v-for="chapter in chapters"
          :chapter="chapter"
      />
      </tbody>
    </table>
  </div>
</template>

<script>
import ChapterItemComponent from "@/components/Manga/Show/ChapterItemComponent";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ChapterListComponent",
  components: {
    ChapterItemComponent
  },
  props: [
    'manga'
  ],
  computed: {
    ...mapGetters('chapter', [
        'chapters'
    ])
  },
  methods: {
    ...mapActions('chapter', [
        'getAll'
    ])
  },
  mounted() {
    this.getAll(this.manga.slug)
  }
}
</script>

<style scoped>

</style>