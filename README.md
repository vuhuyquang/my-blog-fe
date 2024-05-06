## src/
### components/
  - common/               # Thành phần chung được sử dụng trong toàn bộ ứng dụng
    - Header.vue            # Header component
    - Footer.vue            # Footer component
  - auth/                 # Thành phần liên quan đến xác thực và quản lý tài khoản
    - Login.vue             # Component cho trang đăng nhập
    - Register.vue          # Component cho trang đăng ký
  - ui/                   # Các thành phần giao diện người dùng
    - Button.vue            # Button component
    - Input.vue             # Input component
### pages/
  - index/
    - components/         # Components cho trang "index"
      - Banner/             # Components "Banner"
        - index.vue
        - styles.css
      - Slogan/             # Components "Slogan"
        - index.vue
        - styles.css
  - about.vue
  - contact.vue
