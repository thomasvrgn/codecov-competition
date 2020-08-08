<template>
  <nav class="bg-gray-900 pt-4 flex flex-col">
    <div class="flex flex-auto px-4 mb-4">
      <div class="flex flex-auto">
        <img src="@/assets/images/logo.svg" class="cursor-pointer" alt="">
      </div>
      <div class="flex flex-auto justify-end">
        <span class="text-white mr-2 flex items-center cursor-pointer" @click=open>
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 6C2 5.44772 2.44772 5 3 5H21C21.5523 5 22 5.44772 22 6C22 6.55228 21.5523 7 21 7H3C2.44772 7 2 6.55228 2 6Z" fill="currentColor" /><path d="M2 12.0322C2 11.4799 2.44772 11.0322 3 11.0322H21C21.5523 11.0322 22 11.4799 22 12.0322C22 12.5845 21.5523 13.0322 21 13.0322H3C2.44772 13.0322 2 12.5845 2 12.0322Z" fill="currentColor" /><path d="M3 17.0645C2.44772 17.0645 2 17.5122 2 18.0645C2 18.6167 2.44772 19.0645 3 19.0645H21C21.5523 19.0645 22 18.6167 22 18.0645C22 17.5122 21.5523 17.0645 21 17.0645H3Z" fill="currentColor" /></svg>
        </span>
      </div>
    </div>
    <div class="flex flex-auto border-t-4 border-white text-gray-600 flex-col list-none" :class="{'hidden': !opened}">
      <li class="border-b border-white px-6 py-4 hover:text-white cursor-pointer">
        Features
      </li>
      <li class="border-b border-white px-6 py-4 hover:text-white cursor-pointer">
        Pricing
      </li>
      <li class="border-b border-white px-6 py-4 hover:text-white cursor-pointer">
        Docs
      </li>
      <li class="border-b border-white px-6 py-4 hover:text-white cursor-pointer">
        Blog
      </li>
      <li class="border-b border-white px-6 py-4 hover:text-white cursor-pointer">
        Students
      </li>
      <li class="border-b border-white px-6 py-4 hover:text-white cursor-pointer">
        Login
      </li>
      <li class="border-b border-white px-6 py-4 hover:text-white cursor-pointer">
        Sign Up
      </li>
    </div>
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    opened: false
  }),
  methods: {
    open: function () {
      this.opened = !this.opened
    }
  }
})
</script>