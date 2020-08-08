<template>
  <div class="container mx-auto text-center mt-40">
    <h1 class="text-2xl font-bold">
      We proudly support
    </h1>
    <div class="container mx-auto">
      <span class="font-bold mt-8 block text-xl">
        industry leaders
      </span>
      <div class="flex flex-col flex-wrap mt-8 lg:flex-row lg:w-10/12 lg:mx-auto justify-center lg:space-x-16">
        <div class="flex flex-initial justify-center my-4 mx-auto lg:flex-none" v-for="path in industries_files" :key=path>
          <img :srcset="require(`@/assets/images/industries/${path}`)" style="filter: grayscale(100%)" alt="" class="w-1/3 lg:w-24 object-contain">
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <span class="font-bold mt-12 mb-12 block text-xl">
        and top open source projects
      </span>
      <div class="flex flex-col flex-wrap mt-8 lg:flex-row lg:w- lg:mx-auto justify-center lg:w-full">
        <div class="flex flex-initial justify-center my-4 lg:flex-none mx-8 lg:w-24" v-for="path in open_source_files" :key=path>
          <img :srcset="require(`@/assets/images/opensource/${path}`)" style="filter: grayscale(100%)" alt="" class="w-1/3 lg:max-w-full lg:w-full lg:h-auto object-contain lg:block lg:relative">
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import fs from 'fs'
export default Vue.extend({
  data: () => ({
    industries_files: [
      'alteryx.svg',
      'august.svg',
      'axa.svg',
      'godaddy.svg',
      'grab.svg',
      'pg.svg',
      'scale.svg',
      'the_washington_post.svg',
      'tile.svg'
    ],
    open_source_files: [
      'ansible.svg',
      'apache.svg',
      'flutter.svg',
      'grafana.svg',
      'hashicorp.svg',
      'hugging_face.svg',
      'kubernetes.svg',
      'nodejs.svg',
      'python.svg',
      'sentry.svg',
      'vim.svg',
      'vuejs.svg',
      'webpack.svg'
    ]
  })
})
</script>