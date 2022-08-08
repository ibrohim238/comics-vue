<template>
  <DefaultLayout>
    <NavComponent/>
    <FormComponent/>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from "@/layouts/DefaultLayout";
import FormComponent from "@/components/Chapter/Create/FormComponent";
import NavComponent from "@/components/Chapter/Create/NavComponent";

export default {
  name: "CreateView",
  components: {
    NavComponent,
    DefaultLayout,
    FormComponent
  },
}
</script>

<style scoped>

</style>