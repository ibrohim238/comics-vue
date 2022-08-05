<template>
  <header>
    <div class="bg-gray-800">
      <div class="container mx-auto">
        <div class="flex h-16 items-center">
          <div class="mr-auto">
              <router-link
                  class="text-gray-300 hover:bg-gray-700 hover:text-white py-2 px-4 rounded-md text-sm font-medium"
                  :to="{ name: 'manga.show', params: { slug: chapter.manga.slug } }"
              >
                  {{ chapter.manga.name }}
              </router-link>
          </div>
          <div class="ml-auto">
            <SelectComponent :chapter="chapter"/>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main>
    <slot/>
  </main>
  <footer>
  </footer>
</template>

<script>
import SelectComponent from "@/components/Layouts/Chapter/SelectComponent";

export default {
  name: "ChapterLayout",
  components: {
    SelectComponent
  },
  props: {
    chapter: Object
  },
}
</script>

<style scoped>

</style>