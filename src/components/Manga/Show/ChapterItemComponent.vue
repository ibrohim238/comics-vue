<template>
    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
      <router-link class="block" :to="{ name: 'chapter.show', params: { mangaSlug: chapter.manga.slug, chapterId: chapter.id } }">
        <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
          Том {{ chapter.volume }} Номер {{ chapter.number }} - {{ chapter.name }}
        </th>
      </router-link>
      <td class="py-4 px-6">
        {{ chapter.team.name }}
      </td>
      <td class="py-4 px-6">
        {{ chapter.created_at }}
      </td>
      <td class="py-4 px-6">

      </td>
      <td class="py-4 px-6 text-right">
        <router-link :to="{ name: 'chapter.edit', params: { mangaSlug: chapter.manga.slug, chapterId: chapter.id } }" class="font-medium text-blue-600 dark:text-blue-500 hover:underline">
          Edit
        </router-link>
      </td>
    </tr>
</template>

<script>
export default {
  name: "ChapterItemComponent",
  props: {
    chapter: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>

</style>