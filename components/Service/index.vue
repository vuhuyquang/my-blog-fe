<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 container-service">
      <div class="service-item px-5 py-20 bg-white text-dark flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="../../assets/icon/web-development.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Phát triển Web</h3>
          <p>Xây dựng và phát triển các ứng dụng web.</p>
        </div>
      </div>
      <div class="service-item px-5 py-20 bg-[#1e1e1e] text-white flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="../../assets/icon/web-design.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Viết Tool</h3>
          <p>Tạo ra các công cụ tự động, tối ưu hóa quy trình làm việc.</p>
        </div>
      </div>
      <div class="service-item px-5 py-20 bg-white flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="../../assets/icon/coin-svgrepo-com.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Blockchain</h3>
          <p>Xây dựng ứng dụng tiền điện tử và hợp đồng thông minh.</p>
        </div>
      </div>
      <div class="service-item px-5 py-20 bg-[#fdcb6e] text-dark flex flex-col gap-5">
        <div>
          <img height="80" width="80" src="../../assets/icon/writing.svg" />
        </div>
        <div class="flex flex-col gap-5">
          <h3 class="heading mb-3 service-name">Viết Blog</h3>
          <p>Chia sẻ kiến thức, tạo kết nối với độc giả và tác giả thông qua các bài viết.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped src="./styles.css"></style>
