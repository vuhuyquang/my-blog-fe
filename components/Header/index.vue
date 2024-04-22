<template>
  <header class="drop-shadow-xl bg-white text-[14px] text-[black]">
    <nav
      class="container mx-auto px-5 h-[76px] flex justify-between items-center"
    >
      <div class="grid grid-flow-col auto-cols-max gap-2">
        <img
          class="border-solid border-2 border-[#e84118] p-[1px] rounded-full"
          height="44"
          width="44"
          src="https://mir-s3-cdn-cf.behance.net/user/50/1148755320017.617fd8ae2afe4.jpg"
          alt="avatar"
        />
        <div class="grid grid-rows-2 gap-1">
          <span class="font-bold">Quang Vu Huy</span>
          <div>
            <span class="text-slate-600 font-normal">Lập trình viên</span>
          </div>
        </div>
      </div>
      <ul class="flex gap-[2rem] font-semibold tracking-[2px]">
        <li class="hover:text-[#fdcb6e] transition delay-[45ms] text-navba">
          <NuxtLink to="/">TRANG CHỦ</NuxtLink>
        </li>
        <li class="hover:text-[#fdcb6e] transition delay-[45ms] text-navba">
          <NuxtLink to="/bai-viet">BÀI VIẾT</NuxtLink>
        </li>
        <li class="hover:text-[#fdcb6e] transition delay-[45ms] text-navba">
          <NuxtLink to="/lien-he">LIÊN HỆ</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script lang="ts" setup></script>

<style scoped src="./styles.css"></style>