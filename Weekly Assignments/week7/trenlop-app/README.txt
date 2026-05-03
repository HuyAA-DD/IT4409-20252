ỨNG DỤNG TRA CỨU KẾT QUẢ HỌC TẬP (REACT)

1. MÔ TẢ CHƯƠNG TRÌNH
   Ứng dụng được xây dựng bằng React, cho phép người dùng nhập mã số sinh viên để tra cứu thông tin cá nhân và kết quả học tập. Dữ liệu được lấy từ hai file JSON trong thư mục public.

2. CHỨC NĂNG CHÍNH

* Nhập mã sinh viên và nhấn nút "Tra cứu"
* Hiển thị trạng thái "Đang tải..." khi đang xử lý dữ liệu
* Hiển thị thông tin sinh viên (họ tên, lớp, ngày sinh)
* Hiển thị bảng kết quả học tập (môn học, điểm quá trình, điểm cuối kỳ, học kỳ)
* Hiển thị thông báo lỗi nếu không tìm thấy sinh viên

3. CẤU TRÚC CHƯƠNG TRÌNH

* App.jsx: Quản lý state chính và xử lý logic
* SearchForm.jsx: Nhập mã sinh viên và gửi yêu cầu tra cứu
* StudentInfo.jsx: Hiển thị thông tin sinh viên
* ResultTable.jsx: Hiển thị bảng kết quả học tập

4. CÔNG NGHỆ SỬ DỤNG

* ReactJS (Hook: useState, useEffect)
* JavaScript (ES6)
* HTML/CSS cơ bản

5. CÁCH CHẠY CHƯƠNG TRÌNH
   Bước 1: Mở terminal và di chuyển vào thư mục project
   cd <tên_thư_mục_project>

Bước 2: Cài đặt thư viện (nếu chưa có)
npm install

Bước 3: Chạy ứng dụng
npm run dev

Bước 4: Mở trình duyệt tại địa chỉ hiển thị (ví dụ: http://localhost:5173)

6. DỮ LIỆU

* sinhvien.json: chứa danh sách sinh viên
* results.json: chứa kết quả học tập tương ứng

7. GHI CHÚ

* Dữ liệu được mô phỏng bằng file JSON, không sử dụng backend
* Thời gian tải được giả lập bằng setTimeout()

8. TÁC GIẢ

* Họ tên: Nguyễn Quang Huy
* Mã sinh viên: 20230039

KẾT THÚC
