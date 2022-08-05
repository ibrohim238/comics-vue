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
import { mapActions, mapGetters } from "vuex";
import UploadComponent from "@/components/UI/UploadComponent";
import InputFieldComponent from "@/components/UI/InputFieldComponent";
import CheckboxComponent from "@/components/UI/CheckboxComponent";
import ButtonComponent from "@/components/UI/ButtonComponent";

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
      manga: {
        name: '',
        description: '',
        isPublished: false,
        tags: [],
        media: [

        ]
      },
    }
  },
  computed: {
    ...mapGetters('manga', [
        'tags'
    ])
  },
  methods: {
    ...mapActions('manga', [
        'store',
        'getTags'
    ]),
    onSubmit() {
      this.store(this.manga)
    }
  },
  mounted() {
    this.getTags()
  }
}
</script>

<style scoped>

</style>