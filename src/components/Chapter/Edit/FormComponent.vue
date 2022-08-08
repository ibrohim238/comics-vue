<template>
  <div class="container mx-auto border rounded">
    <div class="m-5">
      <div class="grid gap-6 sm:grid-cols-2">
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
import Chapter from "@/services/classes/Chapter";
import RepositoryFactory from "@/services/repository-factory";

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
        chapterRepository.update(this.chapter)

        this.$route.push({ name: 'manga.show', params: { slug: this.$route.params.mangaSlug } })
      } catch (error) {
        this.errors = error.messages
      } finally {
        this.loading = false
      }
    },
    fetchChapter(id) {
      chapterRepository.show(id)
          .then(chapter => {
            this.chapter.mangaSlug = this.chapter.manga.slug
            this.chapter.teamId = this.chapter.team.id

            this.chapter = chapter
          })
          .catch(error => {
            console.log(error);
            return error
          })
    }
  },
  mounted() {
    this.fetchChapter(this.$route.params.chapterId)
  }
}
</script>

<style scoped>

</style>