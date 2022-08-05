<template>
  <DefaultLayout>
    <div class="container mx-auto">
      <DetailComponent
          v-show="manga"
          :manga="manga"
      />
      <ChapterListComponent
          v-show="manga"
          :manga="manga"
      />
    </div>
  </DefaultLayout>
</template>

<script>
import {mapActions, mapGetters} from "vuex";
import DefaultLayout from "@/layouts/DefaultLayout"
import DetailComponent from "@/components/Manga/Show/DetailComponent";
import ChapterListComponent from "@/components/Manga/Show/ChapterListComponent";

export default {
  name: "ShowView",
  components: {
    DefaultLayout,
    DetailComponent,
    ChapterListComponent
  },
  computed: {
    ...mapGetters('manga', [
      'manga'
    ])
  },
  methods: {
    ...mapActions('manga', [
      'get'
    ])
  },
  mounted() {
    this.get(this.$route.params.mangaSlug)
  }
}
</script>

<style scoped>

</style>