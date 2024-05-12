<template>
  <div class="space-y-60">
    <Header />
    
    <main class="container mx-auto w-screen max-w-full content-custom">
      <NuxtPage />
    </main>
    
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/common/Header/index.vue'
import Footer from '~/components/common/Footer/index.vue'
</script>