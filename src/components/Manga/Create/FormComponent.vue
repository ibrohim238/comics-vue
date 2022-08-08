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
      loading: false,
      tags: []
    }
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
    this.getTags()
  }
}
</script>

<style scoped>

</style>