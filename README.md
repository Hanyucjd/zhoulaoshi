# Học Tiếng Trung Cùng Cô — Website ôn luyện tiếng Trung

Website tĩnh (không cần máy chủ/backend), gồm 3 phần: **Giáo trình**, **Trò chơi**, **Video**.
Đưa lên **GitHub Pages** miễn phí, học sinh chỉ cần một đường link để vào học.

---

## 1. Cấu trúc thư mục

```
├── index.html            trang chủ
├── giao-trinh.html        trang Giáo trình
├── tro-choi.html          trang Trò chơi
├── video.html             trang Video
├── assets/
│   ├── css/style.css      giao diện (không cần sửa)
│   ├── js/data.js         ★ NỘI DUNG — sửa file này để thêm bài học/trò chơi/video
│   ├── js/main.js         logic hiển thị (không cần sửa)
│   ├── audio/             để file .mp3 của giáo trình vào đây
│   └── docs/              (tuỳ chọn) để file PDF vào đây nếu không dùng Google Drive
└── games/                 để các file trò chơi .html tự tạo vào đây
```

**Bạn chỉ cần chỉnh sửa file `assets/js/data.js`** để thêm/sửa/xoá nội dung. Không cần đụng tới các file khác.

---

## 2. Cách thêm một khoá học mới (phần Giáo trình)

Mở `assets/js/data.js`, tìm mục `courses:`, sao chép một khối `{ ... }` có sẵn, dán thêm vào và sửa lại thông tin:

```js
{
  id: "boya-so-cap-2",                 // mã riêng, không trùng với khối khác
  title: "Boya Hán ngữ — Sơ cấp 2",
  category: "Giáo trình Boya",         // PHẢI đúng một trong 5 giá trị bên dưới
  description: "Mô tả ngắn về khoá học",
  materials: [
    { label: "Giáo trình chính", type: "PDF", url: "ĐƯỜNG DẪN FILE PDF" },
    { label: "Sách bài tập",     type: "PDF", url: "ĐƯỜNG DẪN FILE PDF" }
  ],
  audios: [
    { name: "Bài 1 — ...", src: "assets/audio/ten-file.mp3" }
  ]
}
```

`category` phải là **đúng một trong 5 giá trị** sau (để nút lọc trên trang Giáo trình hoạt động):
- `"Giáo trình chuẩn HSK 2.0"`
- `"Giáo trình chuẩn HSK 3.0"`
- `"Giáo trình Hán ngữ"`
- `"Giáo trình Boya"`
- `"Giáo trình Msutong"`

Nếu bạn muốn thêm một bộ giáo trình hoàn toàn khác (ví dụ "Giáo trình Đương đại"), nhớ thêm luôn một nút lọc mới trong `giao-trinh.html` (mục `filter-row`), theo mẫu các nút chip có sẵn.

### Lấy đường dẫn PDF từ Google Drive (khuyên dùng — không giới hạn dung lượng trên GitHub)
1. Tải file PDF lên Google Drive.
2. Chuột phải vào file → **Chia sẻ** → đổi thành **"Bất kỳ ai có đường liên kết"** (Anyone with the link).
3. Sao chép link, dạng: `https://drive.google.com/file/d/1AbCDeFGhIJ.../view?usp=sharing`
4. Lấy đoạn mã ở giữa (`1AbCDeFGhIJ...`), ghép vào theo mẫu sau rồi dán vào `url`:
   ```
   https://drive.google.com/file/d/1AbCDeFGhIJ.../preview
   ```
   (đổi `/view...` thành `/preview` — bản `preview` cho phép học sinh xem trực tiếp trên web thay vì bị chuyển hướng.)

### Thêm file audio
Đặt file `.mp3` vào thư mục `assets/audio/`, sau đó khai báo trong `audios` với `src: "assets/audio/ten-file.mp3"`. File audio nhỏ (vài MB/bài) tải lên GitHub bình thường; nếu giáo trình có nhiều audio dung lượng lớn, cân nhắc host trên Google Drive tương tự PDF và dùng link `.../uc?export=download&id=...` thay cho `src`.

---

## 3. Cách thêm một trò chơi mới (phần Trò chơi)

1. Tạo file trò chơi bằng HTML/CSS/JS (tự viết, hoặc dùng file `games/ghep-tu-pinyin.html` có sẵn làm mẫu để chỉnh sửa từ vựng).
2. Đặt file `.html` đó vào thư mục `games/`.
3. Mở `assets/js/data.js`, thêm một khối vào mục `games:`:
   ```js
   {
     id: "noi-tu",
     title: "Nối từ theo chủ đề",
     hanzi: "词",              // 1 chữ Hán hiển thị làm biểu tượng
     description: "Mô tả ngắn cách chơi",
     tag: "Từ vựng · HSK 2",
     file: "games/ten-file-tro-choi.html"
   }
   ```
Trò chơi sẽ hiện trong danh sách và mở ngay trong khung nổi (không rời trang web) khi học sinh bấm vào.

---

## 4. Cách thêm video mới (phần Video)

Mở `assets/js/data.js`, tìm mục `videoTopics:`.

- **Thêm video vào chủ đề có sẵn**: thêm 1 khối vào mảng `videos` của chủ đề đó.
- **Thêm chủ đề mới**: sao chép cả khối `{ topic: "...", videos: [...] }`.

**Video YouTube** — chỉ cần mã video (đoạn sau `v=` trong đường link YouTube):
```js
{ platform: "youtube", id: "dQw4w9WgXcQ", title: "Tên video", thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg" }
```

**Video TikTok** — dùng link đầy đủ của video:
```js
{ platform: "tiktok", url: "https://www.tiktok.com/@ten_kenh/video/1234567890123456789", title: "Tên video" }
```

Khi học sinh bấm vào, video phát ngay trong khung nổi trên trang web — không bị chuyển sang YouTube.com hay TikTok.com.

---

## 5. Đưa web lên GitHub Pages (miễn phí)

1. Tạo tài khoản tại [github.com](https://github.com) (nếu chưa có).
2. Tạo một **repository** mới, ví dụ đặt tên `hoc-tieng-trung`.
3. Tải toàn bộ nội dung thư mục này lên repository đó (dùng nút **"Add file → Upload files"** trên GitHub, kéo thả cả thư mục vào).
4. Vào **Settings → Pages** của repository.
5. Ở mục **Source**, chọn nhánh `main` và thư mục `/root`, bấm **Save**.
6. Sau 1–2 phút, GitHub sẽ cấp một đường link dạng:
   `https://ten-tai-khoan.github.io/hoc-tieng-trung/`
   Gửi link này cho học sinh là các em vào học được ngay.

Mỗi lần bạn sửa `assets/js/data.js` (thêm bài học/trò chơi/video) và tải file mới lên GitHub, trang web sẽ tự cập nhật sau khoảng 1 phút — không cần làm lại gì thêm.

---

## 6. Một vài lưu ý

- File `games/ghep-tu-pinyin.html` là trò chơi mẫu (ghép chữ Hán với Pinyin) — mở file này bằng trình soạn thảo văn bản, tìm mục `WORDS` gần cuối để đổi bộ từ vựng theo bài học của bạn.
- Nhúng TikTok hoạt động tốt nhất khi trình duyệt của học sinh không chặn script bên thứ ba; nếu video TikTok không hiện, trang vẫn có nút liên kết dự phòng có thể bổ sung thêm nếu cần.
- Toàn bộ giao diện dùng tiếng Việt, có thể đổi câu chữ trực tiếp trong các file `.html` nếu muốn.
