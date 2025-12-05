# SMMO Nexus - Dashboard Tool for SimpleMMO

**SMMO Nexus** là một dashboard web hiện đại được thiết kế dành riêng cho người chơi **SimpleMMO**. Dự án cung cấp giao diện trực quan để theo dõi chỉ số nhân vật, trang bị, kỹ năng và tra cứu thông tin vật phẩm (Item Market) theo thời gian thực.

![Status](https://img.shields.io/badge/Status-Active-success)
![Operator](https://img.shields.io/badge/Operator-LuNu-blue)

## ✨ Tính năng chính

- **📊 Player Dashboard**: Hiển thị thông tin thời gian thực (Level, Guild, Gold) và các chỉ số cơ bản (Str, Def, Dex).
- **⚔️ Loadout Tracker**: Xem danh sách trang bị hiện tại đang mặc trên người.
- **⚡ Skills Monitor**: Theo dõi cấp độ và kinh nghiệm (EXP) của các kỹ năng (Mining, Crafting, etc.).
- **mag_right: Item Scanner**: Công cụ tra cứu vật phẩm nhanh chóng qua ID, hiển thị giá thị trường (thấp nhất/cao nhất), chỉ số và độ hiếm.
- **🎨 Cyberpunk UI**: Giao diện mang phong cách công nghệ (Sci-fi) với hiệu ứng động mượt mà.

## 🛠️ Công nghệ sử dụng

- **Frontend**: HTML5, Tailwind CSS (CDN), Vanilla JavaScript.
- **Backend**: Node.js, Express.js (làm Proxy Server để ẩn API Key và xử lý CORS).
- **API**: SimpleMMO Public API v1.

## 🚀 Cài đặt và Chạy dự án

### 1. Yêu cầu

- Node.js (v14 trở lên).
- API Key từ SimpleMMO (Lấy tại: Web > Preferences > API Key).

### 2. Cài đặt

```bash
# Clone dự án
git clone [https://github.com/luongnuong131/smmo-dashboard.git](https://github.com/luongnuong131/smmo-dashboard.git)

# Di chuyển vào thư mục
cd smmo-dashboard

# Cài đặt các thư viện cần thiết
npm install
```
