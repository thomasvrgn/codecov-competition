<template>
  <div class="container mx-auto text-center mt-40">
    <h1 class="text-2xl font-bold">
      We proudly support
    </h1>
    <div class="container mx-auto">
      <span class="font-bold mt-8 block text-xl">
        industry leaders
      </span>
      <div class="flex flex-col mt-8">
        <div class="flex flex-initial justify-center my-4 mx-auto" v-for="path in industries_files" :key=path>
          <img :srcset="require(`@/assets/images/industries/${path}`)" style="filter: grayscale(100%)" alt="" class="w-1/3">
        </div>
      </div>
    </div>
    <div class="container mx-auto">
      <span class="font-bold mt-12 mb-12 block text-xl">
        and top open source projects
      </span>
      <div class="flex flex-col mt-8">
        <div class="flex flex-initial justify-center my-4 mx-auto" v-for="path in open_source_files" :key=path>
          <img :srcset="require(`@/assets/images/opensource/${path}`)" style="filter: grayscale(100%)" alt="" class="w-1/3">
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