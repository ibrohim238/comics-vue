<template>
  <div>
    <select
        id="default"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="select"
        @change="changeRoute"
        required
    >
      <option
          :key="chapter"
          v-for="chapter in chapters"
          :value="chapter"
      >
        {{ chapter.volume + ' Том ' + chapter.number + ' Глава'}}
      </option>
    </select>
  </div>
</template>

<script>
import RepositoryFactory from "@/services/repository-factory";
import Chapter from "@/services/classes/Chapter";

const chapterRepository = RepositoryFactory.get('chapter')

export default {
  name: "SelectComponent",
  props: {
    chapter: Chapter
  },
  data() {
    return {
      chapters: [],
    }
  },
  computed: {
    select() {
      return this.chapters.find(chapter => chapter.id === this.chapter.id)
    }
  },
  methods: {
    fetchChapters(slug) {
      chapterRepository.index(slug)
          .then(chapters => {
            this.chapters = chapters
          })
          .catch(error => {
            console.log(error);
            return error;
          })
    },
    changeRoute() {
      this.$router.push({ name: 'chapter.show', params: {
        slug: this.select.manga.slug, id: this.select.id
      } })
    }
  },
  mounted() {
    this.fetchChapters(this.chapter.manga.slug)
    console.log(this.select);
  },
}
</script>

<style scoped>

</style>