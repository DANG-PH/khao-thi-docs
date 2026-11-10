# Tài liệu Khảo thí

Tài liệu chung của nhóm phát triển phân hệ Khảo thí, xuất bản bằng GitHub Pages:
https://dang-ph.github.io/khao-thi-docs/

## Cấu trúc

```
index.html                          Mục lục, liệt kê mọi tài liệu
nghiep-vu/tong-quan-nghiep-vu.html  KT-NV-01: hệ thống đang chạy thế nào, kèm thực hành trên bản demo
nghiep-vu/dac-ta-tinh-nang.html     KT-DT-01: các tính năng sắp phát triển
huong-dan/so-tay-ngan-hang-de.html  Trang chuyển hướng (sổ tay cũ đã gộp vào KT-NV-01)
assets/                             CSS dùng chung (trắng đen) và script vẽ sơ đồ
.github/workflows/xuat-ban.yml      Đẩy lên main thì tự cập nhật trang
```

Nhóm tài liệu mới nên đặt theo thư mục, ví dụ `ke-hoach/`, `giao-viec/`, `tien-do/`.

## Thêm hoặc sửa tài liệu

1. Tạo file `.html` trong thư mục phù hợp. Sao chép phần `<head>` của một trang có sẵn để dùng chung `assets/tai-lieu.css`.
2. Sơ đồ luồng viết bằng Mermaid trong thẻ `<pre class="mermaid">`, kèm `<script type="module" src="../assets/so-do.js"></script>` ở cuối trang như `nghiep-vu/tong-quan-nghiep-vu.html`.
3. Thêm một mục vào danh sách trong `index.html`.
4. Commit và push lên `main`. Workflow sẽ đẩy sang nhánh `gh-pages`, trang cập nhật sau khoảng 1 phút.

Nếu workflow không chạy, xuất bản tay bằng: `git push origin main:gh-pages`.

## Lưu ý

Repo công khai: không đưa mật khẩu, khóa bí mật, token, dữ liệu cá nhân của sinh viên hay cán bộ lên đây.
