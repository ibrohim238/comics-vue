<template>
  <DefaultLayout>
    <NavComponent/>
    <ListComponent
        v-show="mangas"
        :mangas="mangas"
    />
  </DefaultLayout>
</template>

<script>
import ListComponent from "@/components/Manga/Index/ListComponent";
import DefaultLayout from "@/layouts/DefaultLayout";
import NavComponent from "@/components/Manga/Index/NavComponent";
import {mapActions, mapGetters} from "vuex";

export default {
  name: "IndexView",
  components: {
    NavComponent,
    DefaultLayout,
    ListComponent
  },
  computed: {
    ...mapGetters('manga', [
      'mangas'
    ])
  },
  methods: {
    ...mapActions('manga', [
      'getAll'
    ]),
  },
  mounted() {
    this.getAll()
  }

}
</script>

<style scoped>

</style>