# 1. Cấu trúc thư mục src
## src/
### components/
  - common/               # Thành phần chung được sử dụng trong toàn bộ ứng dụng
  - auth/                 # Thành phần liên quan đến
  - ui/                   # Các thành phần giao diện người dùng
### pages/
  - index/
    - components/         # Components cho trang "index"
      - Slogan/           # Components "Slogan"
        - index.vue
        - styles.css
    - index.vue
  - post[id].vue

---
# 2. Cấu trúc thư mục một components
## components/
  ### Slogan/
    - index.vue
    - styles.css