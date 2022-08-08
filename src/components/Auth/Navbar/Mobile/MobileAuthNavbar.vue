<template>
  <div class="pt-4 pb-3 border-t border-gray-700">
    <div class="flex items-center px-5">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded-full" :src="user.avatar.src" alt="" />
      </div>
      <div class="ml-3">
        <div class="text-base font-medium leading-none text-white">{{ user.name }}</div>
        <div class="text-sm font-medium leading-none text-gray-400">{{ user.email }}</div>
      </div>
      <button type="button" class="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span class="sr-only">View notifications</span>
        <BellIcon class="h-6 w-6" aria-hidden="true" />
      </button>
    </div>
    <div class="mt-3 px-2 space-y-1">
      <router-link to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Your Profile</router-link>
      <router-link to="item.href" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Settings</router-link>
      <button @click="logout" class="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700">Sign out</button>
    </div>
  </div>
</template>

<script setup>
  import { BellIcon } from '@heroicons/vue/outline'
</script>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "MobileAuthNavbar",
  computed: {
    ...mapGetters('auth', [
      'user'
    ])
  },
  methods: {
    ...mapActions('auth', [
        'logout'
    ])
  }
}
</script>

<style scoped>

</style>