# 📸 Hướng Dẫn Export Hero Images - 3 Kích Cỡ

## 🎯 TÓM TẮT NHANH

Bạn cần export **1 ảnh** thành **3 kích cỡ** khác nhau:
- ✅ 1440px (Desktop)
- ✅ 1920px (Full HD)  
- ✅ 2200px (Large monitors)

---

## 📁 FOLDERS ĐÃ TẠO SẴN

```
public/images/hero/
├── 1440/          ← hero-1440.jpg
├── 1920/          ← hero-1920.jpg
└── 2200/          ← hero-2200.jpg
```

---

## 🎨 CÁCH EXPORT TỪ FIGMA

### Bước 1: Chọn Image
- Mở Figma
- Tìm image: `1600438d2130ed5f77f3753fe6e8ac02` 
- Click chọn image layer

### Bước 2: Mở Export Panel
- Bên phải Figma → Panel **Export**
- Click **+** để add export

### Bước 3: Set Export Settings (GIỮ NGUYÊN NHƯ ẢNH)
```
✅ Format: JPEG
✅ Quality: High
✅ Color profile: sRGB (save for screen)
✅ Image resampling: Detailed
✅ Ignore overlapping layers: ✓
```

### Bước 4: Add 3 Exports với Scale khác nhau

#### Export #1 - cho màn 1440px
```
Scale: 1.5x
→ Sẽ tự động tính dimensions
→ Preview khoảng 2160px wide
```

#### Export #2 - cho màn 1920px  
```
Scale: 2x
→ Sẽ tự động tính dimensions
→ Preview khoảng 2880px wide
```

#### Export #3 - cho màn 2200px
```
Scale: 2.5x
→ Sẽ tự động tính dimensions  
→ Preview khoảng 3300px wide
```

### Bước 5: Export All
- Click **Export** button
- Figma sẽ download 3 files cùng lúc

### Bước 6: Rename Files
Figma export ra với tên như: `1600438d2130ed5f77f3753fe6e8ac02-1.5x.jpg`

Bạn cần rename thành:
```
1600438d2130ed5f77f3753fe6e8ac02-1.5x.jpg  →  hero-1440.jpg
1600438d2130ed5f77f3753fe6e8ac02-2x.jpg    →  hero-1920.jpg
1600438d2130ed5f77f3753fe6e8ac02-2.5x.jpg  →  hero-2200.jpg
```

### Bước 7: Move vào Folders
```
hero-1440.jpg  →  public/images/hero/1440/
hero-1920.jpg  →  public/images/hero/1920/
hero-2200.jpg  →  public/images/hero/2200/
```

---

## 📐 DIMENSIONS DỰ KIẾN

| File | Approx Width | Approx Height | File Size |
|------|-------------|---------------|-----------|
| hero-1440.jpg | ~2160px | ~827px | 300-400KB |
| hero-1920.jpg | ~2880px | ~1100px | 500-700KB |
| hero-2200.jpg | ~3300px | ~1263px | 800KB-1MB |

*Lưu ý: Heights có thể khác nhau tùy theo crop của ảnh gốc*

---

## 🖼️ VISUAL GUIDE (Theo Screenshot Của Bạn)

```
┌─────────────────────────────────────┐
│  Figma Export Panel                 │
├─────────────────────────────────────┤
│                                     │
│  Format: [JPEG ▼]  [+ Add]         │
│                                     │
│  Scale:                             │
│  □ 1.5x  ← Export #1 (1440px)      │
│  □ 2x    ← Export #2 (1920px)      │
│  □ 2.5x  ← Export #3 (2200px)      │
│                                     │
│  Settings:                          │
│  Color profile: sRGB ▼              │
│  Quality: High ▼                    │
│  Image resampling: Detailed ▼       │
│  ☑ Ignore overlapping layers        │
│                                     │
│  [Export] button                    │
└─────────────────────────────────────┘
```

---

## ✅ FINAL CHECKLIST

Sau khi làm xong:
- [ ] Exported 3 files từ Figma
- [ ] Renamed to: hero-1440.jpg, hero-1920.jpg, hero-2200.jpg
- [ ] Moved vào đúng folders (1440/, 1920/, 2200/)
- [ ] Check file sizes < 1MB per file
- [ ] All files are JPEG format
- [ ] Quality setting = High

---

## 🚀 READY TO IMPLEMENT!

Khi bạn hoàn thành checklist trên, báo tôi biết và tôi sẽ:
1. Verify files đã đúng
2. Update Hero component để use responsive images
3. Implement `<picture>` element với proper srcset
4. Test trên 3 breakpoints
5. Optimize performance

---

## 💬 CÓ THẮC MẮC?

**Q: Tại sao dùng scale 1.5x, 2x, 2.5x?**
A: Để có retina-ready images (2x pixel density) cho từng breakpoint

**Q: Tại sao JPEG không phải WebP?**
A: JPEG đơn giản hơn, browser support tốt hơn, và với High quality thì đủ tốt

**Q: File size quá lớn thì sao?**
A: Tôi sẽ optimize sau khi bạn upload (compress without quality loss)

**Q: Aspect ratio có giữ nguyên không?**
A: Có, Figma sẽ auto scale proportionally

---

**START EXPORTING!** 🎯 Rất đơn giản thôi! 😊

