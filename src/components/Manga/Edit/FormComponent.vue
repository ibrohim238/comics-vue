<template>
  <div class="container mx-auto border rounded">
    <div class="m-5">
      <InputFieldComponent
          v-model="manga.name"
      >
        Название
      </InputFieldComponent>
      <InputFieldComponent
          v-model="manga.description"
      >
        Описание
      </InputFieldComponent>
      <CheckboxComponent
          v-model="manga.isPublished"
      >
        Опубликовать
      </CheckboxComponent>
      <Multiselect
          mode="tags"
          v-model="manga.tags"
          :searchable="true"
          :options="tags"
      />
      <UploadComponent
          class="py-2"
          v-model="manga.media"
      />
      <ButtonComponent
          @click="onSubmit"
      >
        Отправить
      </ButtonComponent>
    </div>
  </div>
</template>

<script>
import Multiselect from "@vueform/multiselect"
import UploadComponent from "@/components/UI/UploadComponent";
import InputFieldComponent from "@/components/UI/InputFieldComponent";
import CheckboxComponent from "@/components/UI/CheckboxComponent";
import ButtonComponent from "@/components/UI/ButtonComponent";
import RepositoryFactory from "@/services/repository-factory";
import Manga from "@/services/classes/Manga";

const mangaRepository = RepositoryFactory.get('manga')

export default {
  name: "FormComponent",
  components: {
    ButtonComponent,
    CheckboxComponent,
    UploadComponent,
    Multiselect,
    InputFieldComponent
  },
  data() {
    return {
      errors: {},
      manga: new Manga(),
      tags: [],
      loading: false
    }
  },

  methods: {
    onSubmit() {
      try {
        this.loading = true
        mangaRepository.update(this.manga)

        this.$router.push({ name: 'manga.show', params: { slug: this.manga.slug } })
      } catch (errors) {
        this.errors = errors.message
      } finally {
        this.loading = false
      }
    },
    fetchManga(slug) {
      this.loading = true
      mangaRepository.show(slug)
          .then((manga) => {
            manga.tags = manga.tags.map(tag => tag.id)
            manga.media = null

            this.manga = manga
          })
          .finally(() => {
            this.loading = false
          })
    },
    getTags() {
      this.loading = true
      mangaRepository.getTags()
          .then((tags) => {
            this.tags = tags.map(tag => {
              return {
                value: tag.id,
                label: tag.name
              }
            })
          })
          .catch(error => {
            console.log(error);
          })
          .finally(() => {
            this.loading = false
          })
    }
  },
  mounted() {
    this.fetchManga(this.$route.params.mangaSlug)
    this.getTags()
  }
}
</script>

<style scoped>

</style>