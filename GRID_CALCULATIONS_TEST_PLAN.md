# 🧪 Grid Calculations - Test Plan

## ✅ Fix Implemented

**File:** `src/pages/CollectionPage/utils/gridCalculations.ts`

**Changes:**
- Fixed mobile padding: 40px → 32px (16px × 2)
- Fixed tablet padding: 120px → 80px (40px × 2)
- Fixed desktop padding: 376px → 120px (60px × 2)
- Wide screen (≥1440px) already correct ✅

---

## 📱 Test Breakpoints (Updated)

Test tại các kích thước màn hình quan trọng:

### 1. **Mobile - iPhone 14 (390px)** - Padding 16px
### 2. **Mobile - iPhone 14 Pro Max (430px)** - Padding 16px
### 3. **Tablet - iPad Mini (768px)** - Padding 40px
### 4. **Tablet - iPad (820px)** - Padding 40px
### 5. **Desktop Small (1024px)** - Padding 60px
### 6. **Desktop Medium (1280px)** - Padding 60px
### 7. **Wide (1440px)** - Padding 188px ⚠️ CHANGED
### 8. **Wide (1600px)** - Padding 188px ⚠️ NEW TEST
### 9. **Ultra (1920px)** - Padding 220px ⚠️ CHANGED
### 10. **Ultra (2560px)** - Padding 220px ⚠️ NEW TEST

---

## 🧪 Testing Procedures

### Method 1: Chrome DevTools (Recommended)

#### A. Setup
1. Mở Chrome
2. Navigate to: `http://localhost:3000/collection` (hoặc port bạn đang dùng)
3. Mở DevTools: `F12` hoặc `Cmd+Option+I` (Mac)
4. Toggle Device Toolbar: `Cmd+Shift+M` (Mac) hoặc `Ctrl+Shift+M` (Windows)

#### B. Test Each Breakpoint

**Step-by-step cho mỗi breakpoint:**

1. **Set viewport size** (ví dụ: 390 × 844 cho iPhone 14)
   - Click dropdown "Dimensions"
   - Chọn device preset HOẶC
   - Click "Edit" → Add custom device với width cụ thể

2. **Open Console** (`Cmd+Option+J`)
   - Xem debug logs từ CollectionPage (first 3 artworks)

3. **Refresh page** (`Cmd+R`)
   - Quan sát skeleton loading
   - Đợi artworks load xong

4. **Check layout:**
   - ✅ Không có layout shift khi ảnh load
   - ✅ Spacing đều giữa các artworks (24px)
   - ✅ Artwork không bị méo
   - ✅ Grid columns correct (1 trên mobile, 2 trên tablet+)

5. **Take screenshot** (optional)
   - `Cmd+Shift+5` (Mac) hoặc Snipping Tool (Windows)

---

## 📊 Expected Results

### 1. Mobile - iPhone 14 (390px)

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 358,          // 390 - 32 = 358
  aspectRatio: "1.50",       // example
  rowSpan: 56,               // (358 × 1.5 + 24) / 10
  expectedHeight: 560
}
```

**Visual Check:**
- ✅ 1 column layout
- ✅ Full width (trừ 16px padding mỗi bên)
- ✅ Artwork không overlap
- ✅ Smooth loading, no jumps

---

### 2. Mobile - iPhone 14 Pro Max (430px)

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 398,          // 430 - 32 = 398
  aspectRatio: "1.50",
  rowSpan: 62,               // (398 × 1.5 + 24) / 10
  expectedHeight: 620
}
```

---

### 3. Tablet - iPad Mini (768px)

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 332,          // (768 - 80 - 24) / 2 = 332
  aspectRatio: "1.50",
  rowSpan: 52,               // (332 × 1.5 + 24) / 10
  expectedHeight: 520
}
```

**Visual Check:**
- ✅ 2 columns layout
- ✅ 40px padding each side
- ✅ 24px gap between columns
- ✅ Artworks aligned properly

---

### 4. Tablet - iPad (820px)

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 358,          // (820 - 80 - 24) / 2 = 358
  aspectRatio: "1.50",
  rowSpan: 56,
  expectedHeight: 560
}
```

---

### 5. Desktop Small (1024px)

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 440,          // (1024 - 120 - 24) / 2 = 440
  aspectRatio: "1.50",
  rowSpan: 68,               // (440 × 1.5 + 24) / 10
  expectedHeight: 680
}
```

**Visual Check:**
- ✅ 2 columns
- ✅ 60px padding each side
- ✅ Larger artworks (more space)

---

### 6. Desktop Medium (1280px)

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 568,          // (1280 - 120 - 24) / 2 = 568
  aspectRatio: "1.50",
  rowSpan: 87,               // (568 × 1.5 + 24) / 10
  expectedHeight: 870
}
```

**Visual Check:**
- ✅ 2 columns
- ✅ Much larger artworks
- ✅ Beautiful masonry effect

---

### 7. Wide (1440px) ⚠️ FIXED

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 520,          // (1440 - 376 - 24) / 2 = 520
  aspectRatio: "1.50",
  rowSpan: 80,               // (520 × 1.5 + 24) / 10
  expectedHeight: 800
}
```

**Visual Check:**
- ✅ Dynamic width (NOT fixed container)
- ✅ 188px padding each side
- ✅ 2 columns

---

### 8. Wide (1600px) ⚠️ NEW - CRITICAL TEST

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 600,          // (1600 - 376 - 24) / 2 = 600
  aspectRatio: "1.50",
  rowSpan: 92,               // (600 × 1.5 + 24) / 10
  expectedHeight: 920
}
```

**Visual Check:**
- ✅ Larger artworks than 1440px
- ✅ Still 188px padding
- ✅ No layout shift!

---

### 9. Ultra (1920px) ⚠️ FIXED

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 728,          // (1920 - 440 - 24) / 2 = 728
  aspectRatio: "1.50",
  rowSpan: 100,              // (728 × 1.5 + 24) / 10 = 111.2 → capped at 100
  expectedHeight: 1000
}
```

**Visual Check:**
- ✅ Very large artworks (may hit MAX_ROWS cap)
- ✅ 220px padding each side
- ✅ Beautiful wide layout

---

### 10. Ultra (2560px) ⚠️ NEW - 4K MONITOR TEST

**Expected Console Log:**
```
Artwork 0: {
  columnWidth: 1048,         // (2560 - 440 - 24) / 2 = 1048
  aspectRatio: "1.50",
  rowSpan: 100,              // Will hit MAX_ROWS cap (1000px max)
  expectedHeight: 1000
}
```

**Visual Check:**
- ✅ Huge artworks
- ✅ MAX_ROWS constraint working
- ✅ 220px padding

---

## 🐛 Common Issues to Watch For

### ❌ Layout Shift
**Problem:** Artwork "jumps" when image loads
**Cause:** rowSpan calculation doesn't match actual image size
**Fix:** Check columnWidth is correct for breakpoint

### ❌ Gaps Between Artworks
**Problem:** Uneven vertical spacing
**Cause:** rowSpan too large or too small
**Fix:** Verify padding values match CSS

### ❌ Artwork Overflow
**Problem:** Image wider than container
**Cause:** Wrong columnWidth calculation
**Fix:** Check padding calculation

### ❌ Méo Ảnh
**Problem:** Image stretched or squashed
**Cause:** CSS or aspect ratio issue (not related to this fix)
**Fix:** Check CSS `object-fit` properties

---

## 📸 Visual Comparison

### Before Fix (1024px - WRONG)
```
┌─────────────────────────────────────────────┐
│  [188px padding] ... [content] ... [188px] │ ← WRONG!
│                                             │
│  ┌─────────┐     ┌─────────┐              │
│  │ Artwork │     │ Artwork │              │
│  │    A    │     │    B    │              │
│  │         │     │         │              │
│  │         │     └─────────┘              │
│  │         │                              │
│  │         │     [BIG GAP]                │
│  │         │                              │
│  └─────────┘     ┌─────────┐              │
│                  │ Artwork │              │
│                  │    C    │              │
└─────────────────────────────────────────────┘
```

### After Fix (1024px - CORRECT)
```
┌─────────────────────────────────────────────┐
│  [60px]  ....... [content] ....... [60px]  │ ← CORRECT!
│                                             │
│  ┌─────────────┐     ┌─────────────┐      │
│  │  Artwork A  │     │  Artwork B  │      │
│  │             │     │             │      │
│  │             │     └─────────────┘      │
│  │             │                          │
│  │             │     ┌─────────────┐      │
│  └─────────────┘     │  Artwork C  │      │
│                      │             │      │
│  ┌─────────────┐     └─────────────┘      │
│  │  Artwork D  │                          │
└─────────────────────────────────────────────┘
```

---

## ✅ Checklist (Updated)

Test từng breakpoint theo thứ tự:

- [ ] **390px** (iPhone 14) - 1 column, columnWidth = 358px, padding 16px
- [ ] **430px** (iPhone 14 Pro Max) - 1 column, columnWidth = 398px, padding 16px
- [ ] **768px** (iPad Mini) - 2 columns, columnWidth = 332px, padding 40px
- [ ] **820px** (iPad) - 2 columns, columnWidth = 358px, padding 40px
- [ ] **1024px** (Desktop Small) - 2 columns, columnWidth = 440px, padding 60px
- [ ] **1280px** (Desktop Medium) - 2 columns, columnWidth = 568px, padding 60px
- [ ] **1440px** (Wide) - 2 columns, columnWidth = 520px, padding 188px ⚠️
- [ ] **1600px** (Wide) - 2 columns, columnWidth = 600px, padding 188px ⚠️ CRITICAL
- [ ] **1920px** (Ultra) - 2 columns, columnWidth = 728px, padding 220px ⚠️
- [ ] **2560px** (4K) - 2 columns, columnWidth = 1048px, padding 220px ⚠️

---

## 🔄 Resize Test

**Important:** Test window resize behavior

1. Start at 390px
2. Slowly drag to increase width
3. Watch for:
   - ✅ Smooth recalculation (debounced 150ms)
   - ✅ No flash/flicker
   - ✅ Grid adapts properly at breakpoints

**Key transition points:**
- 768px: 1 column → 2 columns
- 1024px: Padding change (80px → 120px)
- 1440px: Switch to fixed container

---

## 📝 Notes

- Console logs chỉ show **first 3 artworks** (để debug)
- Nếu muốn xem tất cả, remove `if (index < 3)` check trong `CollectionPage/index.tsx`
- Debounce 150ms có thể làm resize lag một chút (intended behavior)
- Layout shift test: Throttle network to "Slow 3G" để thấy rõ loading behavior

---

## 🚀 Quick Test Script

Paste vào Console để test nhanh:

```javascript
// Get current viewport and column width
const viewport = window.innerWidth;
const grid = document.querySelector('.collection-page__grid');
const cards = document.querySelectorAll('.artwork-card-grid');

console.log('=== Grid Test ===');
console.log('Viewport:', viewport);
console.log('Grid columns:', window.getComputedStyle(grid).gridTemplateColumns);
console.log('Column gap:', window.getComputedStyle(grid).columnGap);
console.log('Total cards:', cards.length);

// Check first card
const firstCard = cards[0];
const rowSpan = firstCard.style.gridRowEnd;
console.log('First card rowSpan:', rowSpan);
```

---

## ✨ Success Criteria

Test pass khi:

1. ✅ Tất cả 8 breakpoints hiển thị đúng
2. ✅ columnWidth match expected values
3. ✅ Không có layout shift khi ảnh load
4. ✅ Spacing đều đặn giữa artworks
5. ✅ Resize smooth không lag
6. ✅ Console logs cho thấy correct calculations

---

**Happy Testing! 🎉**

Nếu phát hiện bug, note lại:
- Viewport width
- Expected columnWidth
- Actual columnWidth (from console)
- Screenshot nếu có thể

