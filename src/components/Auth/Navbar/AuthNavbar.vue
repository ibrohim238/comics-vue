<template>
  <div class="hidden md:block">
    <div class="ml-4 flex items-center md:ml-6">
      <button type="button" class="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
        <span class="sr-only">View notifications</span>
        <BellIcon class="h-6 w-6" aria-hidden="true" />
      </button>

      <!-- Profile dropdown -->
      <Menu as="div" class="ml-3 relative">
        <div>
          <MenuButton class="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full" :src="user.avatar.src" alt="" />
          </MenuButton>
        </div>
        <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
          <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            <MenuItem v-slot="{ active }">
              <router-link to="item.routeName" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Your Profile</router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <router-link to="item.routeName" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Settings</router-link>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <button @click="logout" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">Sign out</button>
            </MenuItem>
          </MenuItems>
        </transition>
      </Menu>
    </div>
  </div>
</template>

<script setup>
  import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
  import { BellIcon } from '@heroicons/vue/outline'
</script>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AuthNavbar",
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