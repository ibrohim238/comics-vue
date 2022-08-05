<template>
  <DefaultLayout>
    <FormComponent/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import FormComponent from "@/components/Manga/Create/FormComponent";

export default {
  name: "CreateView",
  components: {
    FormComponent,
    DefaultLayout
  }
}
</script>

<style scoped>

</style>