# 📱 Hướng Dẫn Chi Tiết Về Responsive Breakpoints

**Project:** Art & Venture Foundation  
**Last Updated:** November 14, 2024

---

## 🎯 TẦM NHÌN TỔNG QUAN

Design system sử dụng **mobile-first approach** với 8 breakpoints chính để cover từ smartphone đến 4K displays.

---

## 📐 CÁC BREAKPOINTS CHÍNH

### **Bảng Tổng Hợp**

| Breakpoint | Min Width | Max Width | Device Type | Container Padding L/R |
|------------|-----------|-----------|-------------|----------------------|
| **XS** | 320px | 479px | Small Phone | 16px / 16px |
| **SM** | 480px | 767px | Large Phone | 16px / 16px |
| **MD** | 768px | 1023px | Tablet | 20px / 20px |
| **LG** | 1024px | 1439px | Desktop | 40px / 40px |
| **XL** | 1440px | 1919px | Wide Desktop | 41px / 60px |
| **XXL** | 1920px | 2199px | Ultra Wide | 131px / 131px |
| **2XL** | 2200px | 2559px | Extra Large | 171px / 171px |
| **3XL** | 2560px | 3439px | QHD/2K | 220px / 220px |
| **4XL** | 3440px | 3839px | Ultra Wide | 300px / 300px |
| **5XL** | 3840px+ | - | 4K Display | 350px / 350px |

---

## 🔍 CHI TIẾT TỪNG BREAKPOINT

### **1. Mobile (< 768px)**

```css
:root {
  --container-padding-left: 16px;
  --container-padding-right: 16px;
}
```

**Đặc Điểm:**
- ✅ Compact layout
- ✅ Single column grids
- ✅ Touch-friendly targets (min 44px)
- ✅ Reduced spacing
- ✅ Simplified navigation

**Art Collection:**
- Card: 320px × 400px
- Zoom: scale(1.1)
- Layout: Horizontal scroll

---

### **2. Tablet (768px - 1023px)**

```css
@media (min-width: 768px) {
  :root {
    --container-padding-left: 20px;
    --container-padding-right: 20px;
  }
}
```

**Đặc Điểm:**
- ✅ 2-column layouts possible
- ✅ Increased spacing
- ✅ Larger touch targets
- ✅ More content visible

**Art Collection:**
- Card: 400px × 450px
- Zoom: scale(1.1)
- Layout: Horizontal scroll

---

### **3. Desktop (1024px - 1439px)**

```css
@media (min-width: 1024px) {
  :root {
    --container-padding-left: 40px;
    --container-padding-right: 40px;
  }
}
```

**Đặc Điểm:**
- ✅ Multi-column layouts (3-4 columns)
- ✅ Sidebar navigation visible
- ✅ Hover effects enabled
- ✅ Full desktop experience
- ✅ Sidebar: 129px left offset

**Art Collection:**
- Card: 564px × 577px
- Zoom: scale(1.1)
- Layout: Horizontal scroll with padding

---

### **4. Wide Desktop (1440px - 1919px)**

```css
@media (min-width: 1440px) {
  :root {
    --container-padding-left: 41px;   /* Figma spec */
    --container-padding-right: 60px;  /* Asymmetric! */
  }
}
```

**Đặc Điểm:**
- ⚠️ **ASYMMETRIC PADDING** (41px left, 60px right)
- ✅ Optimal viewing experience
- ✅ 4-5 column layouts
- ✅ Most common "standard" wide screen

**Art Collection:**
- Card: 600px × 577px
- Zoom: scale(1.1)
- Layout: Optimized spacing

**💡 Lưu Ý:** Đây là breakpoint từ Figma design specs!

---

### **5. Ultra Wide (1920px - 2199px)**

```css
@media (min-width: 1920px) {
  :root {
    --container-padding-left: 131px;
    --container-padding-right: 131px;
  }
}
```

**Đặc Điểm:**
- ✅ **SYMMETRIC PADDING** (131px both sides)
- ✅ Full HD experience
- ✅ Generous whitespace
- ✅ Premium, luxury feel

**Art Collection:**
- Card: 600px × 620px
- Zoom: scale(1.1)
- Padding: 140px top/bottom

---

### **6. Extra Large (2200px - 2559px)** ⭐

```css
@media (min-width: 2200px) {
  :root {
    --container-padding-left: 171px;
    --container-padding-right: 171px;
  }
}
```

**Đặc Điểm:**
- ✅ **SPECIAL LAYOUT:** Breakout grid
- ✅ Slider goes edge-to-edge (100vw)
- ✅ Content with 171px padding
- ✅ Enhanced visual impact

**Art Collection:**
- Card: **700px × 680px** (largest!)
- Zoom: **scale(1.15)** (enhanced!)
- Layout: **Full-width breakout**

**🎨 Kỹ Thuật Đặc Biệt:**
```css
.art-collection__grid {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}
```

**💡 Lý Do:**
- Cards lớn hơn cần zoom mạnh hơn để rõ ràng
- Layout breakout tạo visual drama
- Premium experience cho màn hình cao cấp

---

### **7. QHD/2K (2560px - 3439px)**

```css
@media (min-width: 2560px) {
  :root {
    --container-padding-left: 220px;
    --container-padding-right: 220px;
  }
}
```

**Đặc Điểm:**
- ✅ Super wide canvas
- ✅ 220px padding (very generous)
- ✅ Content stays centered
- ✅ Optimal readability

**Use Cases:**
- High-end monitors
- Professional displays
- Design workstations

---

### **8. Ultra Wide Monitor (3440px - 3839px)**

```css
@media (min-width: 3440px) {
  :root {
    --container-padding-left: 300px;
    --container-padding-right: 300px;
  }
}
```

**Đặc Điểm:**
- ✅ Cinema-like aspect ratio
- ✅ Massive whitespace (300px!)
- ✅ Content never too wide
- ✅ Eye-comfort priority

**Use Cases:**
- 21:9 ultra-wide monitors
- Gaming displays
- Multi-monitor setups

---

### **9. 4K Display (3840px+)**

```css
@media (min-width: 3840px) {
  :root {
    --container-padding-left: 350px;
    --container-padding-right: 350px;
  }
}
```

**Đặc Điểm:**
- ✅ Maximum padding (350px)
- ✅ Perfect for 4K UHD
- ✅ Future-proof
- ✅ Premium viewing experience

**Use Cases:**
- 4K monitors (3840 × 2160)
- 5K displays
- High-end TVs
- Professional video editing

---

## 🎨 ASYMMETRIC vs SYMMETRIC PADDING

### **Why Asymmetric at 1440px?**

```css
/* 1440px breakpoint */
--container-padding-left: 41px;   ⬅️ Figma design spec
--container-padding-right: 60px;  ⬅️ Figma design spec
```

**Lý Do:**
1. **Sidebar offset:** 129px sidebar = cần balance bằng right padding
2. **Figma specs:** Designer đã tính toán chính xác
3. **Visual balance:** Asymmetric tạo cân bằng thị giác
4. **Content flow:** Hướng user từ trái sang phải

### **Symmetric Everywhere Else**

Tất cả breakpoints khác dùng **symmetric padding** để:
- ✅ Dễ maintain
- ✅ Predictable layout
- ✅ Centered content
- ✅ Better mobile experience

---

## 🖼️ ART COLLECTION - RESPONSIVE BEHAVIOR

### **Card Sizes Evolution**

```
📱 320px   → Card: 320×400  → Zoom: 1.1  (10%)
📱 768px   → Card: 400×450  → Zoom: 1.1  (10%)
💻 1024px  → Card: 564×577  → Zoom: 1.1  (10%)
🖥️ 1440px  → Card: 600×577  → Zoom: 1.1  (10%)
🖥️ 1920px  → Card: 600×620  → Zoom: 1.1  (10%)
🖥️ 2200px+ → Card: 700×680  → Zoom: 1.15 (15%) ⭐
```

### **Layout Changes**

| Breakpoint | Layout Strategy | Padding Source |
|------------|-----------------|----------------|
| < 1024px | Fixed padding | `var(--spacing-*)` |
| 1024px+ | Dynamic padding | `var(--container-padding-*)` |
| 1440px+ | Intro/Footer padding | Separate from grid |
| 2200px+ | **Full-width grid** | **Breakout technique** |

---

## 🛠️ IMPLEMENTATION GUIDE

### **1. Sử Dụng CSS Variables**

```css
/* ✅ GOOD - Responsive tự động */
.my-section {
  padding-left: var(--container-padding-left);
  padding-right: var(--container-padding-right);
}

/* ❌ BAD - Hard-coded */
.my-section {
  padding-left: 40px;
  padding-right: 40px;
}
```

### **2. Mobile-First Media Queries**

```css
/* ✅ GOOD - Mobile first */
.element {
  width: 100%; /* Default = mobile */
}

@media (min-width: 768px) {
  .element {
    width: 50%; /* Tablet+ */
  }
}

@media (min-width: 1024px) {
  .element {
    width: 33.33%; /* Desktop+ */
  }
}

/* ❌ BAD - Desktop first */
.element {
  width: 33.33%; /* Desktop default */
}

@media (max-width: 1023px) {
  .element {
    width: 50%; /* Harder to maintain */
  }
}
```

### **3. Breakout Technique (2200px+)**

```css
/* Full-width breakout from container */
.full-width-section {
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
}

/* Content inside with padding */
.full-width-section__content {
  padding-left: var(--container-padding-left);
  padding-right: var(--container-padding-right);
}
```

**💡 Khi Nào Dùng:**
- Image galleries full-width
- Hero sections
- Slider/carousel components
- Background sections

---

## 📊 TESTING CHECKLIST

### **Manual Testing**

```
✅ 375px   (iPhone SE)
✅ 390px   (iPhone 14 Pro)
✅ 768px   (iPad Mini)
✅ 820px   (iPad Air)
✅ 1024px  (iPad Pro)
✅ 1280px  (Small Desktop)
✅ 1440px  (Standard Desktop)
✅ 1920px  (Full HD)
✅ 2200px  (Large Monitor)
✅ 2560px  (QHD)
✅ 3440px  (Ultra Wide)
✅ 3840px  (4K)
```

### **Chrome DevTools**

1. Press `F12` or `Cmd+Option+I`
2. Click Device Toolbar (`Cmd+Shift+M`)
3. Enter custom dimensions
4. Test each breakpoint
5. Check hover effects
6. Verify spacing

### **Automated Testing**

```bash
# Visual regression testing
npm run test:visual

# Responsive screenshots
npm run test:responsive
```

---

## 🎓 BEST PRACTICES

### **DO ✅**
- Use CSS custom properties for padding
- Test on real devices when possible
- Consider touch vs hover states
- Keep breakpoints consistent
- Document special cases (like 2200px)
- Think about 4K+ displays

### **DON'T ❌**
- Hard-code pixel values
- Use max-width media queries
- Forget about tablet landscape
- Ignore ultra-wide monitors
- Mix asymmetric padding arbitrarily
- Assume everyone has 1920px screen

---

## 📚 RESOURCES

### **Files**
- `/src/design-system/tokens/breakpoints.css` - All breakpoint definitions
- `/src/components/sections/ArtCollection/ArtCollection.css` - Example implementation
- `ART_COLLECTION_LARGE_SCREEN_FIX.md` - 2200px+ optimization details

### **Tools**
- Chrome DevTools Device Toolbar
- Responsively App
- BrowserStack
- Figma Design Specs

### **Documentation**
- MDN: CSS Media Queries
- CSS-Tricks: Complete Guide to Flexbox/Grid
- Material Design: Responsive Layout Grid

---

## 🎉 TÓM TẮT

**Hệ Thống Breakpoints:**
- 🎯 10 breakpoints (320px → 4K+)
- 📱 Mobile-first approach
- 🎨 Figma-aligned at 1440px
- ⚡ CSS variables for flexibility
- 🖼️ Special techniques for 2200px+

**Key Takeaways:**
1. **Use CSS variables** - Always!
2. **Test real devices** - Don't just rely on DevTools
3. **2200px is special** - Enhanced zoom + breakout layout
4. **1440px is asymmetric** - Figma design spec
5. **Think big** - Support 4K+ displays

**Responsive Done Right:**
```
Mobile → Tablet → Desktop → Wide → Ultra → 4K
  ↓        ↓        ↓         ↓       ↓      ↓
 320     768     1024      1440    1920   2200+
  ✅       ✅       ✅        ✅      ✅     ✅
```

---

**Questions?** Check individual component CSS or consult the design team!

