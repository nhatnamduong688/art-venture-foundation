# Testing Checklist - Compare with Figma

Server đang chạy tại: **http://localhost:3001/**

## 🎯 Pages để kiểm tra với Chrome DevTools

### ✅ Completed Pages

#### 1. Homepage - Desktop-7
- **URL**: http://localhost:3001/
- **Figma**: https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF?node-id=1-2
- **Key Points**:
  - [ ] Hero section với content box bên trái
  - [ ] Padding: 188px cho tất cả sections
  - [ ] ArtCollection có navigation arrows
  - [ ] CommunitySupport không có image bên phải
  - [ ] Header có search icon và language toggle (EN/VI)

#### 2. Collection Page - Desktop-9
- **URL**: http://localhost:3001/collection
- **Figma**: https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF?node-id=282-490
- **Key Points**:
  - [ ] Hero section với breadcrumbs
  - [ ] Filter tabs: New creation, Key works, People, Nature, Sculpture
  - [ ] Category filters: All, Painting, Sculpture, Photography, Digital Art
  - [ ] Masonry grid với overlays
  - [ ] Artist avatar + name trên hover

#### 3. Artists Page - Desktop-11
- **URL**: http://localhost:3001/artists
- **Figma**: https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF?node-id=282-773
- **Key Points**:
  - [ ] Large title "Artists"
  - [ ] Search box với placeholder "Tìm kiếm"
  - [ ] 3-column grid
  - [ ] Grayscale portraits
  - [ ] Artist name + artwork count
  - [ ] Hover effects

#### 4. Events Page - Desktop-13
- **URL**: http://localhost:3001/events
- **Figma**: https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF?node-id=282-987
- **Key Points**:
  - [ ] Title "A&V Events" (80px, Big Caslon)
  - [ ] Horizontal card layout
  - [ ] Image 516x368px bên trái
  - [ ] Grayscale → color on hover
  - [ ] "VIEW DETAIL" link với arrow icon
  - [ ] White card background (#ffffff)
  - [ ] Spacing: 92px giữa các cards

#### 5. News Page - Desktop-15
- **URL**: http://localhost:3001/news
- **Figma**: https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF?node-id=282-1382
- **Key Points**:
  - [ ] Title "A&V News" với search và filter button
  - [ ] Compact row layout
  - [ ] Small thumbnail 180x180px bên trái
  - [ ] Date ở góc phải
  - [ ] Border-bottom giữa các items
  - [ ] Search function hoạt động
  - [ ] Hover effect: background color change

---

## 🔍 Chrome DevTools Testing Guide

### Method 1: Overlay Figma Screenshot
1. Open page trong Chrome
2. F12 → Console
3. Paste và run:
\`\`\`javascript
// Tạo overlay container
const overlay = document.createElement('div');
overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:999999;opacity:0.5;';
const img = document.createElement('img');
img.src = 'FIGMA_SCREENSHOT_URL'; // Thay bằng screenshot URL
img.style.cssText = 'width:100%;height:100%;object-fit:contain;';
overlay.appendChild(img);
document.body.appendChild(overlay);

// Toggle opacity với phím 'o'
document.addEventListener('keydown', (e) => {
  if(e.key === 'o') overlay.style.opacity = overlay.style.opacity === '0.5' ? '0' : '0.5';
});
\`\`\`

### Method 2: Side-by-Side Comparison
1. Mở Figma trong một tab
2. Mở website trong tab khác
3. Sử dụng Window management để xem cả hai
4. So sánh:
   - **Spacing**: Padding, margins, gaps
   - **Typography**: Font sizes, weights, line-heights
   - **Colors**: Background, text, borders
   - **Layout**: Grid columns, alignment

### Method 3: Inspect Tool
1. F12 → Elements tab
2. Hover qua elements để xem:
   - Width, height
   - Padding, margin
   - Font size
3. So với Figma Dev Mode measurements

---

## 📐 Design System Reference

### Colors
- **Primary Red**: #732231
- **Background**: #f8f8f8
- **Card Background**: #ffffff
- **Text**: #000000
- **Text Secondary**: #666666
- **Border**: #e0e0e0

### Typography
- **Titles**: Big Caslon, 80px, weight 500
- **Subtitles**: Big Caslon, 30px, weight 500
- **Body**: Inter, 16px, weight 400
- **Links**: Inter, 14-16px, weight 500

### Spacing
- **Section Padding**: 188px horizontal
- **Vertical Spacing**: 120px
- **Card Gaps**: 32px - 92px
- **Element Spacing**: 16px - 24px

### Breakpoints
- Desktop: 1440px+
- Laptop: 1024px - 1439px
- Tablet: 768px - 1023px
- Mobile: < 768px

---

## 🐛 Common Issues to Check

### Layout Issues
- [ ] Padding consistency (should be 188px on desktop)
- [ ] Grid column counts match Figma
- [ ] Image aspect ratios correct
- [ ] Text overflow handling

### Typography Issues
- [ ] Font families loaded correctly
- [ ] Font sizes match design
- [ ] Line heights correct
- [ ] Letter spacing if specified

### Interactive Issues
- [ ] Hover states work
- [ ] Links navigate correctly
- [ ] Search filters data
- [ ] Transitions smooth (0.2s - 0.3s)

### Responsive Issues
- [ ] Mobile layout stacks correctly
- [ ] Images scale properly
- [ ] Text readable on all sizes
- [ ] Touch targets min 44x44px

---

## 📝 Testing Commands

\`\`\`bash
# Start dev server (already running)
npm start

# Open specific pages in browser
open http://localhost:3001/collection
open http://localhost:3001/artists
open http://localhost:3001/events
open http://localhost:3001/news

# Check for console errors
# F12 → Console tab

# Measure elements
# F12 → Elements → Computed tab
\`\`\`

---

## ⏭️ Next Steps

### Pending: Who We Are Page (Desktop-8)
- **Figma**: https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF?node-id=282-144
- Content-heavy page với text sections
- Will implement after testing current pages

---

## 📸 Quick Figma Screenshots

Để lấy screenshot cho overlay test:
1. Mở Figma → Select frame
2. Export → PNG → 2x
3. Upload lên imgur hoặc dùng local
4. Dùng URL trong overlay script

Happy Testing! 🚀

