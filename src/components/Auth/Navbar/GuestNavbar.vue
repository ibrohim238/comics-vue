<template>
  <div class="hidden md:block">
    <div class="ml-4 flex items-center md:ml-6">
        <router-link v-for="item in userNavigation" :key="item.name" :to="{ name: item.routeName }" class="text-gray-300 hover:bg-gray-700 hover:text-white x-3 p-2 rounded-md text-sm font-medium">{{ item.name }}</router-link>
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
  name: "GuestNavbar"
}
</script>

<style scoped>

</style>