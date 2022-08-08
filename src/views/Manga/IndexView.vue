<template>
  <DefaultLayout>
    <NavComponent/>
    <ListComponent
        v-if="! loading"
        :mangas="mangas"
    />
    <div v-else>
      Загрузка...
    </div>
  </DefaultLayout>
</template>

<script>
import ListComponent from "@/components/Manga/Index/ListComponent";
import DefaultLayout from "@/layouts/DefaultLayout";
import NavComponent from "@/components/Manga/Index/NavComponent";
import RepositoryFactory from "@/services/repository-factory";

const mangaRepository = RepositoryFactory.get('manga')

export default {
  name: "IndexView",
  components: {
    NavComponent,
    DefaultLayout,
    ListComponent
  },
  data() {
    return {
      mangas: [],
      loading: false
    }
  },
  methods: {
    getAll() {
      this.loading = true
      mangaRepository.index()
          .then((mangas) => {
            this.mangas = mangas
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
    this.getAll()
  }

}
</script>

<style scoped>

</style>