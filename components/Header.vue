<template>
  <div class="flex flex-col mt-16 mx-auto lg:flex-row lg:w-10/12">
    <div class="flex flex-auto justify-center w-9/12 mx-auto lg:order-last">
      <img src="@/assets/images/first_section.svg" class="lg:w-full lg:h-full lg:max-w-full lg:block" alt="">
    </div>
    <div class="flex flex-auto justify-center mt-16 lg:items-center">
      <div class="container text-center lg:text-left">
        <h1 class="text-gray-900 text-4xl font-bold w-1/2 text-center mx-auto lg:text-left lg:mx-0 lg:w-full lg:text-5xl">
          Develop healthier code.
        </h1>
        <p class="text-lg font-light w-9/12 mx-auto mt-8 lg:mx-0 text-gray-800 lg:text-xl lg:w-full">
          Improve your code review workflow and quality. Codecov provides highly integrated tools to group, merge, archive, and compare coverage reports.
          <br /><br />
          Free for open source. Plans starting at $10/user per month.
        </p>
        <button class="bg-blue-600 text-white px-4 py-3 mt-8 rounded-full hover:bg-blue-700">
          Get Started
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  
})
</script>