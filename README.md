# 📱 Máy tính đơn giản

Ứng dụng máy tính bỏ túi giúp người dùng thực hiện các phép tính và đánh giá biểu thức toán học một cách nhanh chóng và chính xác.

---

## 1. 🎯 Chức năng

- Tính toán giá trị của các biểu thức toán học bao gồm: cộng, trừ, nhân, chia, lũy thừa, ngoặc và các phép toán hỗn hợp.
- Hỗ trợ nhập biểu thức toán học từ bàn phím hoặc click giao diện.

---

## 2. 🛠️ Công nghệ sử dụng

### 🔧 Thư viện tự xây dựng: **JSL**
- Một thư viện tự xây dựng cho JavaScript.
- Bao gồm các cấu trúc dữ liệu (CTDL) quan trọng: `Stack`, `Queue`, `Deque`, `Heap`, `Set`.
- Tái sử dụng dễ dàng cho các dự án JavaScript khác.

### ⚛️ React Redux
- Giao diện người dùng được xây dựng bằng **React**.
- Quản lý trạng thái ứng dụng bằng **Redux**, giúp chia tách rõ ràng giữa logic và giao diện.

### 🌐 HTML, CSS, JavaScript
- Dùng để xây dựng phần giao diện và kết nối logic tính toán với người dùng.

---

## 3. 🧱 Xây dựng thư viện **JSL**

### 📚 Stack, Queue, Deque
- Được cài đặt bằng **mảng** (`Array` trong JavaScript).
- **Stack**: Dùng mô hình LIFO (Last In First Out), sử dụng `push()` và `pop()`.
- **Queue**: Dùng mô hình FIFO (First In First Out), sử dụng `push()` và `shift()`.
- **Deque**: Cho phép thêm/xóa ở cả hai đầu, sử dụng `push()`, `pop()`, `unshift()`, `shift()`.

### 🌲 Heap, Set
- Cài đặt bằng **cây nhị phân cân bằng** – cụ thể là **Heap Tree**.
- **Heap**:
  - Dùng cho các thao tác như thêm phần tử, lấy phần tử nhỏ nhất/lớn nhất một cách hiệu quả (`O(log n)`).
  - Duy trì thuộc tính heap sau mỗi thao tác (heapify).
- **Set**:
  - Không cho phép trùng lặp phần tử.
  - Dùng cấu trúc cây nhị phân để đảm bảo tìm kiếm, thêm, xóa hiệu quả (`O(log n)`).

---

## 4. 🧮 Cơ chế tính toán biểu thức

- Ứng dụng thuật toán **Shunting Yard** để chuyển biểu thức từ dạng trung tố (infix) sang hậu tố (postfix), giúp dễ dàng tính toán qua `Stack`.
- Tham khảo chi tiết tại: [Shunting Yard Algorithm - Viblo](https://viblo.asia/p/shunting-yard-algorithm-1VgZvwXrlAw)

---

## 📜 Bản quyền

> © 2025 – Ứng dụng được phát triển bởi nhóm lập trình viên yêu thích thuật toán và cấu trúc dữ liệu.  
> Mọi quyền được bảo lưu.
