/* ==========================================================================
   DATA.JS — Đây là nơi DUY NHẤT bạn cần chỉnh sửa để thêm nội dung mới.
   Không cần biết lập trình, chỉ cần sao chép 1 khối (giữa { và }) và sửa lại
   thông tin bên trong. Nhớ giữ đúng dấu phẩy, dấu ngoặc kép "..." và ngoặc { }.

   Hướng dẫn lấy đường dẫn file (PDF / audio) từ Google Drive nằm trong
   README.md ở thư mục gốc — mục "Cách thêm tài liệu mới".
   ========================================================================== */

const CONTENT = {

  /* ------------------------------------------------------------------
     1) GIÁO TRÌNH — mỗi khối {...} là một bộ giáo trình.
        "category" PHẢI trùng với một trong 5 giá trị bên dưới để nút lọc
        trên trang Giáo trình hoạt động đúng:
          "Giáo trình chuẩn HSK 2.0"
          "Giáo trình chuẩn HSK 3.0"
          "Giáo trình Hán ngữ"
          "Giáo trình Boya"
          "Giáo trình Msutong"
     ------------------------------------------------------------------ */
  courses: [
    // === CÁC KHÓA HỌC HSK 2.0 (CẤP ĐỘ CỤ THỂ) ===
    {
      id: "hsk1",
      title: "HSK 1 — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK1 2.0",  // TRÙNG với sub-filter
      description: "150 từ vựng cơ bản, ngữ âm và mẫu câu giao tiếp đơn giản.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" },
        { label: "Sách bài tập", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: [
        { name: "Bài 1 — Chào hỏi 你好", src: "assets/audio/hsk1-bai1.mp3" },
        { name: "Bài 2 — Giới thiệu", src: "assets/audio/hsk1-bai2.mp3" }
      ]
    },
    {
      id: "hsk2",
      title: "HSK 2 — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK2 2.0",
      description: "300 từ vựng, các mẫu câu thông dụng trong đời sống.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: [
        { name: "Bài 1 — Gia đình", src: "assets/audio/hsk2-bai1.mp3" }
      ]
    },
    {
      id: "hsk3",
      title: "HSK 3 — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK3 2.0",
      description: "600 từ vựng, bắt đầu học các đoạn văn ngắn.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "hsk4-ha",
      title: "HSK 4 Hạ — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK4 hạ 2.0",
      description: "900 từ vựng, luyện đọc hiểu và viết đoạn văn.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "hsk4-thuong",
      title: "HSK 4 Thượng — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK4 thượng 2.0",
      description: "Tiếp nối cấp 4 Hạ, mở rộng từ vựng và ngữ pháp.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "hsk5-ha",
      title: "HSK 5 Hạ — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK5 hạ 2.0",
      description: "2500 từ vựng, đọc hiểu văn bản dài và viết luận.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "hsk5-thuong",
      title: "HSK 5 Thượng — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK5 thượng 2.0",
      description: "Hoàn thiện kỹ năng đọc viết cấp độ 5.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "hsk6-ha",
      title: "HSK 6 Hạ — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK6 hạ 2.0",
      description: "5000+ từ vựng, đọc báo, xem tin tức bằng tiếng Trung.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "hsk6-thuong",
      title: "HSK 6 Thượng — Giáo trình chuẩn HSK 2.0",
      category: "Giáo trình chuẩn HSK6 thượng 2.0",
      description: "Hoàn thiện toàn bộ hệ thống HSK 2.0 cấp 6.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    
    // === CÁC KHÓA HỌC KHÁC (GIỮ NGUYÊN) ===
    {
      id: "hsk30",
      title: "HSK 3.0 — Sơ cấp 1 (Cấp 1)",
      category: "Giáo trình chuẩn HSK 3.0",
      description: "Bám sát khung năng lực HSK 3.0 mới, 500 từ vựng cấp 1–2.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: [
        { name: "Bài 1 — Ôn tập", src: "assets/audio/hsk30-bai1.mp3" }
      ]
    },
    {
      id: "hanngu",
      title: "Hán ngữ — Quyển 1",
      category: "Giáo trình Hán ngữ",
      description: "Giáo trình Hán ngữ kinh điển, luyện đủ 4 kỹ năng.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "boya",
      title: "Boya Hán ngữ — Sơ cấp 1",
      category: "Giáo trình Boya",
      description: "Giáo trình Boya dành cho người mới bắt đầu.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    },
    {
      id: "msutong",
      title: "Msutong Hán ngữ — Sơ cấp 1",
      category: "Giáo trình Msutong",
      description: "Giáo trình Msutong dùng cho sinh viên quốc tế.",
      materials: [
        { label: "Giáo trình chính", type: "PDF", url: "https://drive.google.com/file/d/FILE_ID/preview" }
      ],
      audios: []
    }
  ],

  /* ------------------------------------------------------------------
     2) TRÒ CHƠI — mỗi khối {...} là một trò chơi HTML tự tạo
        Đặt file trò chơi (.html) trong thư mục /games rồi ghi tên file vào "file"
     ------------------------------------------------------------------ */
  games: [
    {
      id: "ghep-tu",
      title: "Ghép từ — Pinyin",
      hanzi: "配",
      description: "Ghép chữ Hán với phiên âm Pinyin đúng trong thời gian giới hạn.",
      tag: "Từ vựng · HSK 1–2",
      file: "games/ghep-tu-pinyin.html"
    }
    // Thêm trò chơi mới: sao chép khối trên, đổi id/title/file cho trò chơi kế tiếp
  ],

  /* ------------------------------------------------------------------
     3) VIDEO — nhóm theo chủ đề. Mỗi video là YouTube hoặc TikTok.
        - YouTube: chỉ cần "id" là mã video (đoạn sau ?v= trong đường link)
        - TikTok: dùng "url" là link đầy đủ tới video TikTok
     ------------------------------------------------------------------ */
  videoTopics: [
    {
      topic: "Giao tiếp hằng ngày",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Chào hỏi và tự giới thiệu bằng tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
      ]
    },
    {
      topic: "Phát âm & Thanh điệu",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "4 thanh điệu cơ bản trong tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
      ]
    },
    {
      topic: "Văn hoá Trung Hoa",
      videos: [
        {
          platform: "tiktok",
          url: "https://www.tiktok.com/@tiktok/video/7000000000000000000",
          title: "Tết Nguyên Đán ở Trung Quốc",
          thumb: ""
        }
      ]
    },
    {
      topic: "Văn mẫu",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Cách viết bài văn miêu tả bằng tiếng Trung",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
        // Thêm video giảng/đọc văn mẫu khác vào đây, theo mẫu YouTube hoặc TikTok ở trên
      ]
    },
    {
      topic: "Âm nhạc",
      videos: [
        {
          platform: "youtube",
          id: "dQw4w9WgXcQ",
          title: "Học tiếng Trung qua bài hát 月亮代表我的心",
          thumb: "https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"
        }
        // Thêm MV / bài hát tiếng Trung khác vào đây
      ]
    }
    // Thêm chủ đề mới: sao chép cả khối { topic: ..., videos: [...] }
  ]
};
