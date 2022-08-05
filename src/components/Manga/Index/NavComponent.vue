<template>
  <nav class="container mx-auto shadow py-4 rounded-md flex">
    <span class="text-lg ml-2">Список манг</span>
    <div class="ml-auto">
      <router-link class="p-3" :to="{ name: 'manga.create' }">
        Создать
      </router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavComponent"
}
</script>

<style scoped>

</style>