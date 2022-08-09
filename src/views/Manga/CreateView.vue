<template>
  <DefaultLayout>
    <FormComponent
        ref="form"
    />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import FormComponent from "@/components/Manga/Create/FormComponent";
import RepositoryFactory from "@/services/repository-factory";

const mangaRepository = RepositoryFactory.get('manga')

export default {
  name: "CreateView",
  components: {
    FormComponent,
    DefaultLayout
  },
  methods: {
    onSubmit() {
      try {
        this.loading = true
        mangaRepository.store(this.manga)
        console.log(this.manga);

        this.$router.push({ name: 'manga.index' })
      } catch(errors) {
        this.errors = errors.messages
      } finally {
        this.loading = false
      }
    },
  }
}
</script>

<style scoped>

</style>