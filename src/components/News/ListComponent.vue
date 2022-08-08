<template>
  <div class="container mx-auto">
    <div class="grid-cols-8 border rounded">
      <div class="p-3 mt-4">
        Последние обновления
      </div>
      <ItemComponent :key="item" v-for="item in news" :item="item"/>
    </div>
  </div>
</template>

<script>
import ItemComponent from "@/components/News/ItemComponent";

export default {
  name: "ListComponent",
  components: {
    ItemComponent
  },
  props: [
      'news'
  ]
}
</script>

<style scoped>

</style>