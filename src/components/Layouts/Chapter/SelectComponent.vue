<template>
  <div>
    <select
        id="default"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="select"
        @change="changeRoute"
        required
    >
      <option
          :key="chapter"
          v-for="chapter in chapters"
          :value="chapter"
      >
        {{ chapter.volume + ' Том ' + chapter.number + ' Глава'}}
      </option>
    </select>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "SelectComponent",
  props: {
    chapter: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters('chapter', [
        'chapters',
    ]),
    select() {
      return this.chapters.find(ch => ch.id === this.chapter.id)
    }
  },
  methods: {
    ...mapActions('chapter', [
      'getAll'
    ]),
    changeRoute() {
      this.$router.push({ name: 'chapter.show', params: {
        slug: this.select.manga.slug, id: this.select.id
      } })
    }
  },
  mounted() {
    this.getAll(this.chapter.manga.slug)
  },
}
</script>

<style scoped>

</style>