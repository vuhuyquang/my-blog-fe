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
import Header from '~/layouts/Header/index.vue'
import Footer from '~/layouts/Footer/index.vue'
</script>