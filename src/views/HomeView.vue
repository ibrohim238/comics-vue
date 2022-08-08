<template>
  <DefaultLayout>
    <ListComponent
        :news="news"
        v-if="! loading"
    />
    <div v-else>
      Загрузка...
    </div>
  </DefaultLayout>
</template>

<script>
import ListComponent from "@/components/News/ListComponent";
import DefaultLayout from "@/layouts/DefaultLayout";
import RepositoryFactory from "@/services/repository-factory";

const newsRepository = RepositoryFactory.get('news')

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    ListComponent,
  },
  data() {
    return {
      news: [],
      loading: false
    }
  },
  methods: {
    getAll() {
      this.loading = true
      return  newsRepository.index()
          .then((news) => {
            this.news = news
          })
          .catch(error => {
            console.log(error);
            return error;
          })
          .finally(() => {
            this.loading = false
          })
    }
  },
  mounted() {
    this.getAll()
  }
}
</script>
