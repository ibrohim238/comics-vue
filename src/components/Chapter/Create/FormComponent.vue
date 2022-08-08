<template>
  <div class="container mx-auto border rounded">
    <div class="m-5">
      <div class="grid gap-6 md:grid-cols-2">
        <InputFieldComponent
            v-model="chapter.volume"
        >
          Том
        </InputFieldComponent>
        <InputFieldComponent
          v-model="chapter.number"
      >
        Номер
      </InputFieldComponent>
      </div>
      <InputFieldComponent
          v-model="chapter.name"
      >
        Название
      </InputFieldComponent>
      <InputFieldComponent
          v-model="chapter.price"
      >
        Цена
      </InputFieldComponent>
      <UploadComponent
          class="py-2"
          :multiple="true"
          v-model="chapter.media"
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
import InputFieldComponent from "@/components/UI/InputFieldComponent";
import ButtonComponent from "@/components/UI/ButtonComponent";
import UploadComponent from "@/components/UI/UploadComponent";
import RepositoryFactory from "@/services/repository-factory";
import Chapter from "@/services/classes/Chapter";

const chapterRepository = RepositoryFactory.get('chapter')

export default {
  name: "FormComponent",
  components: {
    ButtonComponent,
    InputFieldComponent,
    UploadComponent
  },
  data() {
    return {
      errors: {},
      chapter: new Chapter(),
      loading: false
    }
  },
  methods: {
    onSubmit() {
      try {
        this.loading = true
        chapterRepository.store(this.chapter)

        this.$route.push({ name: 'manga.index' })
      } catch (error) {
        this.errors = error.messages
      } finally {
        this.loading = false
      }
    }
  },
  mounted() {
    this.chapter.mangaSlug = this.$route.params.mangaSlug
  }
}
</script>

<style scoped>

</style>