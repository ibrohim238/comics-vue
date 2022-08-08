<template>
  <DefaultLayout>
    <div v-if="! loading" class="container mx-auto">
      <DetailComponent
          :manga="manga"
      />
      <ChapterListComponent
          :manga="manga"
      />
    </div>
    <div v-else>
      Загрузка...
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout"
import DetailComponent from "@/components/Manga/Show/DetailComponent";
import ChapterListComponent from "@/components/Manga/Show/ChapterListComponent";
import Manga from "@/services/classes/Manga";
import RepositoryFactory from "@/services/repository-factory";

const mangaRepository = RepositoryFactory.get('manga')

export default {
  name: "ShowView",
  components: {
    DefaultLayout,
    DetailComponent,
    ChapterListComponent
  },
  data() {
    return {
      manga: new Manga(),
      loading: false
    }
  },
  methods: {
    get(slug) {
      this.loading = true
      return mangaRepository.show(slug)
          .then((manga) => {
            this.manga = manga
          })
          .catch(error => {
            console.log(error);
            return error;
          })
          .finally(() => {
            this.loading  = false
          })
    },
  },
  mounted() {
    this.get(this.$route.params.mangaSlug)
  }
}
</script>

<style scoped>

</style>