<template>
  <DefaultLayout>
    <HistoryComponent/>
  </DefaultLayout>
</template>

<script>
import HistoryComponent from "@/components/History/HistoryListComponent";
import DefaultLayout from "@/layouts/DefaultLayout";

export default {
  name: 'HomeView',
  components: {
    DefaultLayout,
    HistoryComponent,
  }
}
</script>
