<template>
  <div>
    <header class="drop-shadow-xl bg-white text-[14px] text-[black]">
      <nav class="container mx-auto px-5 h-[76px] flex justify-between items-center">
        <div class="grid grid-flow-col auto-cols-max gap-2">
          <img class="border-solid border-2 border-[#e84118] p-[1px] rounded-full" height="44" width="44" src="https://mir-s3-cdn-cf.behance.net/user/50/1148755320017.617fd8ae2afe4.jpg" alt="avatar">
          <div class="grid grid-rows-2 gap-1">
            <span class="font-semibold">Quang Vu Huy</span>
            <div>
              
            </div>
          </div>
        </div>
        <ul class="flex gap-[2rem] font-semibold tracking-[2px]">
          <li class="hover:text-[#fdcb6e] hover:uppercase"><NuxtLink to="/">TRANG CHỦ</NuxtLink></li>
          <li class="hover:text-[#fdcb6e] hover:uppercase"><NuxtLink to="/about">BÀI VIẾT</NuxtLink></li>
          <li class="hover:text-[#fdcb6e] hover:uppercase"><NuxtLink to="/product/123">LIÊN HỆ</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto">
      <NuxtPage />
    </main>

    <footer>
      <h2>Footer</h2>
    </footer>
  </div>
</template>

<script setup></script>