# Tài liệu Khảo thí

Tài liệu chung của nhóm phát triển phân hệ Khảo thí, xuất bản bằng GitHub Pages:
https://dang-ph.github.io/khao-thi-docs/

## Cấu trúc

```
index.html                          Mục lục, liệt kê mọi tài liệu
huong-dan/so-tay-ngan-hang-de.html  Onboarding BA, Tester: ngân hàng câu hỏi, ma trận, bộ đề, nhập điểm
.github/workflows/xuat-ban.yml      Đẩy lên main thì tự cập nhật trang
```

Nhóm tài liệu mới nên đặt theo thư mục, ví dụ `ke-hoach/`, `giao-viec/`, `tien-do/`.

## Thêm hoặc sửa tài liệu

1. Tạo file `.html` trong thư mục phù hợp. Sao chép phần `<head>` và `<style>` của một trang có sẵn để giữ cùng giao diện.
2. Sơ đồ luồng viết bằng Mermaid trong thẻ `<pre class="mermaid">`, kèm đoạn `<script type="module">` ở cuối trang như `huong-dan/so-tay-ngan-hang-de.html`.
3. Thêm một mục vào danh sách trong `index.html`.
4. Commit và push lên `main`. Workflow sẽ đẩy sang nhánh `gh-pages`, trang cập nhật sau khoảng 1 phút.

Nếu workflow không chạy, xuất bản tay bằng: `git push origin main:gh-pages`.

## Lưu ý

Repo công khai: không đưa mật khẩu, khóa bí mật, token, dữ liệu cá nhân của sinh viên hay cán bộ lên đây.
