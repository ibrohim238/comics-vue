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

export default {
  name: "FormComponent",
  components: {
    ButtonComponent,
    InputFieldComponent,
    UploadComponent
  },
  data() {
    return {
      chapter: {
        volume: null,
        number: null,
        name: '',
        price: null,
        media: []
      }
    }
  },
}
</script>

<style scoped>

</style>