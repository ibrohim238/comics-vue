<template>
  <div class="pt-4 pb-3 border-t border-gray-700">
    <div class="mt-3 px-2 space-y-1">
      <router-link v-for="item in userNavigation" :key="item.name" :to="{ name: item.routeName}" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">{{ item.name }}</router-link>
    </div>
  </div>
</template>

<script setup>
const userNavigation = [
  { name: 'Sign in', routeName: 'login' },
  { name: 'Sign up', routeName: 'register' },
]

</script>

<script>

export default {
  name: "MobileGuestNavbar"
}
</script>

<style scoped>

</style>