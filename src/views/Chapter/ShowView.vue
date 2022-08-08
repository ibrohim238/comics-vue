<template>
  <div v-if="! loading">
    <ChapterLayout v-show="chapter" :chapter="chapter">
      <MediaListComponent :media="chapter.media"/>
    </ChapterLayout>
  </div>
  <div v-else>
    Загрузка...
  </div>
</template>

<script>
import MediaListComponent from "@/components/Chapter/Show/MediaListComponent";
import ChapterLayout from "@/layouts/ChapterLayout";
import RepositoryFactory from "@/services/repository-factory";
import Chapter from "@/services/classes/Chapter";

const chapterRepository = RepositoryFactory.get('chapter')

export default {
  name: "ShowView",
  components: {
    ChapterLayout,
    MediaListComponent,
  },
  data() {
    return {
      chapter: new Chapter(),
      loading: false
    }
  },
  methods: {
    get(id) {
      this.loading = true
      chapterRepository.show(id)
          .then((chapter) => {
           this.chapter = chapter
          })
          .catch(error => {
            console.log(error);
            return error;
          })
          .finally(() => {
            this.loading = false
          })
    },
  },
  mounted() {
    this.get(this.$route.params.chapterId)
  }
}
</script>

<style scoped>

</style>