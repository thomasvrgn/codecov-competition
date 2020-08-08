<template>
  <div class="root">
    <Navbar />
    test
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

export default Vue.extend({
  components: {
    Navbar
  }
})
</script>
