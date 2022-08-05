<template>
  <header class="mb-2">
    <div class="min-h-full">
      <Disclosure as="nav" class="bg-gray-800" v-slot="{ open }">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <div class="flex items-center">
              <router-link :to="{ name: 'home' }">
                <div class="flex-shrink-0">
                  <img class="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                </div>
              </router-link>
              <div class="hidden md:block">
                <div class="ml-10 flex items-baseline space-x-4">
                  <router-link v-for="item in navigation" :key="item.name" :to="{ name: item.routeName}" class="text-gray-300 hover:bg-gray-700 hover:text-white x-3 py-2 rounded-md text-sm font-medium">{{ item.name }}</router-link>
                </div>
              </div>
            </div>
            <GuestNavbar v-if="! loggedIn"/>
            <AuthNavbar v-else/>
            <div class="-mr-2 flex md:hidden">
              <!-- Mobile menu button -->
              <DisclosureButton class="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <span class="sr-only">Open main menu</span>
                <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </DisclosureButton>
            </div>
          </div>
        </div>

        <DisclosurePanel class="md:hidden">
          <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <router-link v-for="item in navigation" :key="item.name" as="route-link" :to="{ name: item.routeName }" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">{{ item.name }}</router-link>
          </div>
          <MobileGuestNavbar v-if="! loggedIn"/>
          <MobileAuthNavbar v-else/>
        </DisclosurePanel>
      </Disclosure>
    </div>
  </header>
  <main>
    <slot/>
  </main>
  <footer>

  </footer>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { MenuIcon, XIcon } from '@heroicons/vue/outline'
import MobileGuestNavbar from "@/components/Auth/Navbar/Mobile/MobileGuestNavbar";
import GuestNavbar from "@/components/Auth/Navbar/GuestNavbar";
import AuthNavbar from "@/components/Auth/Navbar/AuthNavbar";
import MobileAuthNavbar from "@/components/Auth/Navbar/Mobile/MobileAuthNavbar";

const navigation = [
  { name: 'Каталог', routeName: 'manga.index'},
]
</script>

<script>
import {mapGetters} from "vuex";

export default {
    name: 'DefaultLayout',
    computed: {
      ...mapGetters('auth', [
          'loggedIn'
      ])
    },
}
</script>