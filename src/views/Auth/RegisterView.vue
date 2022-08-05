<template>
  <DefaultLayout>
    <FormComponent/>
  </DefaultLayout>
</template>


<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import FormComponent from "@/components/Auth/Register/FormComponent";

export default {
  name: "RegisterView",
  components: {
    DefaultLayout,
    FormComponent
  }
}
</script>

<style scoped>

</style>