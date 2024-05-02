<template>
  <div class="space-y-60">
    <Header />

    <main class="container w-screen max-w-full content-custom">
      <NuxtPage />
    </main>

    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '../components/Header/index.vue'
import Footer from '../components/Footer/index.vue'
</script>