<template>
  <DefaultLayout>
    <FormComponent/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import FormComponent from "@/components/Auth/Login/FormComponent";

export default {
  name: "LoginView",
  components: {
    DefaultLayout,
    FormComponent,
  }
}
</script>

<style scoped>

</style>