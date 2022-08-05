<template>
  <ChapterLayout v-show="chapter" :chapter="chapter">
    <MediaListComponent :media="chapter.media"/>
  </ChapterLayout>
</template>

<script>
import MediaListComponent from "@/components/Chapter/Show/MediaListComponent";
import {mapActions, mapGetters} from "vuex";
import ChapterLayout from "@/layouts/ChapterLayout";

export default {
  name: "ShowView",
  components: {
    ChapterLayout,
    MediaListComponent,
  },
  computed: {
    ...mapGetters('chapter', [
      'chapter'
    ])
  },
  methods: {
    ...mapActions('chapter', [
      'get'
    ]),
  },
  mounted() {
    this.get(this.$route.params.chapterId)
  }
}
</script>

<style scoped>

</style>