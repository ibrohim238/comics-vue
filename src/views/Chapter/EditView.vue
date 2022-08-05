<template>
  <DefaultLayout>
    <FormComponent/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import FormComponent from "@/components/Chapter/Edit/FormComponent";

export default {
  name: "EditView",
  components: {
    FormComponent,
    DefaultLayout
  },

}
</script>

<style scoped>

</style>