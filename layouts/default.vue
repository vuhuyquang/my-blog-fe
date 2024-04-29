<template>
  <div>
    <Header />

    <main class="container w-screen max-w-full">
      <NuxtPage />
    </main>

    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import Header from '../components/Header/index.vue'
</script>