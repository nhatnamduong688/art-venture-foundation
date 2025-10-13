# 🎨 Hướng Dẫn Test Component Với Figma

## 📋 Mục Lục

1. [Dev Mode Testing](#1-dev-mode-testing)
2. [Screenshot Overlay Method](#2-screenshot-overlay-method)
3. [Browser DevTools](#3-browser-devtools)
4. [Figma Inspect](#4-figma-inspect)
5. [Visual Comparison Checklist](#5-visual-comparison-checklist)

---

## 1. 📏 Dev Mode Testing

### Bước 1: Bật Dev Mode trong Figma

```
1. Mở file Figma
2. Click "Dev Mode" ở góc trên bên phải
3. Hoặc nhấn Shift + D
```

### Bước 2: Select Component cần test

```
1. Click vào Frame/Component trong Figma
2. Panel bên phải sẽ hiện thông số:
   - Width, Height
   - Position (x, y)
   - Padding, Margin
   - Font size, Line height
   - Colors (HEX codes)
```

### Bước 3: So sánh với CSS

```css
/* Ví dụ: MuseumCard */

Figma:                    CSS:
Width: 638px       →      width: 638px; ✓
Height: 545px      →      height: 545px; ✓
Top: 595px         →      top: 595px; ✓
Left: 189px        →      left: 189px; ✓
Padding: 60px      →      padding: 50px 60px; ⚠️
Font: 80px         →      font-size: 80px; ✓
```

---

## 2. 🖼️ Screenshot Overlay Method (Pixel Perfect)

### Cách sử dụng FigmaOverlay Tool:

#### Bước 1: Export screenshot từ Figma

```
1. Trong Figma, select frame cần test
2. Right click → Export
3. Format: PNG, Scale: 1x
4. Click "Export Frame"
```

#### Bước 2: Upload ảnh

```
1. Upload lên Imgur: https://imgur.com/upload
2. Copy "Direct Link" (kết thúc bằng .png)
```

#### Bước 3: Sử dụng Overlay Tool

```
1. Truy cập: http://localhost:3000/museum-card
2. Click button "👁️ Show Figma Overlay" (góc phải màn hình)
3. Paste URL ảnh vào input
4. Adjust opacity slider (0.3 - 0.5 là tốt nhất)
5. So sánh trực quan!
```

#### Tips:

- Opacity 0.5 = xem được cả 2 layer
- Opacity 0.3 = nhìn rõ code hơn
- Opacity 0.7 = nhìn rõ Figma hơn

---

## 3. 🔧 Browser DevTools

### Cách kiểm tra kích thước trên trình duyệt:

#### Chrome DevTools:

```
1. Right click vào element → Inspect
2. Tab "Elements" → chọn element
3. Tab "Computed" → xem kích thước thực tế:
   - width
   - height
   - padding
   - margin
   - position
```

#### Measure Tool:

```
1. DevTools mở
2. Ctrl/Cmd + Shift + C
3. Hover vào element
4. Xem tooltip hiện kích thước
```

#### Rulers Extension:

```
1. Chrome Web Store: "Page Ruler Redux"
2. Install extension
3. Click icon → Start measuring
4. Kéo để đo khoảng cách pixel-perfect
```

---

## 4. 🎯 Figma Inspect

### Code Generation:

```
1. Figma Dev Mode → Select element
2. Tab "Inspect" bên phải
3. Chọn "CSS" trong dropdown
4. Copy code Figma generate
5. So sánh với code của bạn
```

### Đo khoảng cách:

```
1. Dev Mode on
2. Select element đầu tiên
3. Giữ Option/Alt
4. Hover vào element thứ hai
5. Figma hiện khoảng cách màu đỏ
```

---

## 5. ✅ Visual Comparison Checklist

### Layout:

- [ ] Width match
- [ ] Height match
- [ ] Position (top, left, right, bottom)
- [ ] Padding đúng
- [ ] Margin đúng
- [ ] Gap giữa elements

### Typography:

- [ ] Font family
- [ ] Font size
- [ ] Font weight
- [ ] Line height
- [ ] Letter spacing
- [ ] Text color

### Colors:

- [ ] Background color
- [ ] Text color
- [ ] Border color
- [ ] Hover states
- [ ] Active states

### Spacing:

- [ ] Khoảng cách elements
- [ ] Padding container
- [ ] Margin sections
- [ ] Gap in flex/grid

### Images:

- [ ] Kích thước ảnh
- [ ] Object-fit (cover/contain)
- [ ] Object-position
- [ ] Border radius

### Borders & Shadows:

- [ ] Border width
- [ ] Border radius
- [ ] Box shadow
- [ ] Border color

---

## 🚀 Quick Test Commands

### Test từng component:

```bash
# Museum Card
http://localhost:3000/museum-card

# Test Page
http://localhost:3000/test

# Individual sections
http://localhost:3000/hero
http://localhost:3000/about
http://localhost:3000/collection
```

### Responsive Testing:

```
Chrome DevTools → Toggle Device Toolbar (Ctrl/Cmd + Shift + M)

Test breakpoints:
- Desktop: 1440px
- Tablet: 1024px
- Mobile: 768px
- Small: 480px
```

---

## 🎨 Color Testing

### Extract colors từ Figma:

```
1. Select element
2. Fill/Stroke trong properties
3. Copy HEX code
4. Compare với CSS
```

### Common colors trong project:

```css
Primary (Burgundy): #732231
Background (Beige): #f2f1eb
Text (Dark): #0d0d0d
Black: #000000
White: #ffffff
Gray Background: #f8f9fa
```

---

## 📱 Responsive Testing Tips

### Desktop First:

```
1. Match Figma desktop design trước
2. Test trên 1440px
3. Sau đó test responsive
```

### Breakpoint Testing:

```
1. 1440px - Desktop
2. 1024px - Tablet landscape
3. 768px - Tablet portrait
4. 480px - Mobile
5. 375px - Small mobile (iPhone SE)
```

### Real Device Testing:

```
- iPhone: Safari
- Android: Chrome
- iPad: Safari
- Desktop: Chrome, Firefox, Safari
```

---

## 🔍 Common Issues & Solutions

### Issue 1: Kích thước không match

```
✓ Check: padding, border-box
✓ Fix: box-sizing: border-box
```

### Issue 2: Position không đúng

```
✓ Check: parent position (relative/absolute)
✓ Fix: position context
```

### Issue 3: Font không giống

```
✓ Check: font-family loaded
✓ Fix: Google Fonts import
```

### Issue 4: Colors khác

```
✓ Check: HEX code
✓ Fix: copy exact từ Figma
```

---

## 🎓 Best Practices

1. **Test từ to xuống nhỏ**

   - Container → Content → Details

2. **Sử dụng Figma tokens**

   - Colors, spacing, typography

3. **Document differences**

   - Note các thay đổi so với Figma

4. **Test trên nhiều browsers**

   - Chrome, Firefox, Safari

5. **Responsive testing**
   - Desktop → Tablet → Mobile

---

## 📞 Support

Nếu có vấn đề, check:

1. Console errors
2. Network tab (images loading?)
3. CSS computed values
4. Compare with Figma Dev Mode

Happy Testing! 🎉



