<template>
  <div class="root">
    <Navbar />
    <Header />
    <Features />
    <Merge />
    <Review />
    <Support />
    <Protection />
  </div>
</template>

<style scoped>
.root {
  min-height: 100vh;
  background-image: linear-gradient(11deg,rgba(247,247,249,0) 50%,#e2e7f1);
}
</style>

<script lang="ts">
import Vue from 'vue'
import Navbar from '@/components/Navbar.vue'
import Header from '@/components/Header.vue'
import Features from '@/components/Features.vue'
import Merge from '@/components/sections/Merge.vue'
import Review from '@/components/sections/Review.vue'
import Support from '@/components/Support.vue'
import Protection from '@/components/Protection.vue'

export default Vue.extend({
  components: {
    Navbar,
    Header,
    Features,
    Merge,
    Review,
    Support,
    Protection
  }
})
</script>
