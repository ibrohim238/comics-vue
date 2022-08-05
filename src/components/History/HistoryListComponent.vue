<template>
  <div class="container mx-auto">
    <div class="grid-cols-8 border rounded">
      <div class="p-3 mt-4">
        Последние обновления
      </div>
      <HistoryItemComponent :key="history" v-for="history in histories" :history="history"/>
    </div>
  </div>
</template>

<script>
import HistoryItemComponent from "@/components/History/HistoryItemComponent";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "HistoryListComponent",
  components: {
    HistoryItemComponent
  },
  computed: {
    ...mapGetters('history', [
        'histories'
    ])
  },
  methods: {
    ...mapActions('history', [
        'getAll'
    ])
  },
  created() {
    this.getAll()
  }
}
</script>

<style scoped>

</style>