# 📐 Kiểm Tra Kích Thước Viewport & Layout

**Ngày:** October 20, 2025  
**Browser:** Chrome DevTools MCP  
**Test URL:** http://localhost:3002

---

## ✅ Viewport Check

| Metric            | Figma Design     | Current Browser | Status       |
| ----------------- | ---------------- | --------------- | ------------ |
| **Width**         | 1440px           | 1440px          | ✅ **MATCH** |
| **Height**        | Variable         | 900px           | ✅ OK        |
| **Design System** | Desktop (1440px) | Desktop         | ✅ Correct   |

**✅ Viewport khớp hoàn toàn với Figma design (1440px)**

---

## 📏 Layout Dimensions Comparison

### 1. Sidebar

| Property       | Figma (Node 99-275) | Current Implementation | Difference                    |
| -------------- | ------------------- | ---------------------- | ----------------------------- |
| **Width**      | **129px**           | **100px**              | ❌ **-29px** (22.5% narrower) |
| **Display**    | Fixed, visible      | Fixed, visible         | ✅ OK                         |
| **Position**   | Left: 0             | Left: 0                | ✅ OK                         |
| **Background** | Gradient mix        | Solid color            | ⚠️ Different                  |

**🔴 CRITICAL:** Sidebar hiện tại là **100px**, Figma yêu cầu **129px**!

---

### 2. Header/Navigation Bar

| Property          | Figma                 | Current                | Difference   | Status       |
| ----------------- | --------------------- | ---------------------- | ------------ | ------------ |
| **Width**         | 1311px (1440 - 129)   | 1340px (1440 - 100)    | +29px        | ⚠️ Too wide  |
| **Height**        | 114px                 | 80px                   | -34px        | ❌ Too short |
| **Left Position** | 129px (after sidebar) | 100px                  | -29px        | ❌ Too close |
| **Position**      | Fixed top             | Fixed top              | ✅ OK        |
| **Background**    | Transparent/none      | rgba(255,255,255,0.95) | ⚠️ Different |

**🔴 ISSUES:**

- Header height: 80px → Should be **114px** (+34px)
- Header left: 100px → Should be **129px** (+29px)
- Header width will auto-adjust when sidebar is fixed

---

### 3. Main Content Container (.App)

| Property         | Figma                 | Current    | Status                |
| ---------------- | --------------------- | ---------- | --------------------- |
| **Padding Left** | 129px (sidebar width) | 100px      | ❌ Wrong              |
| **Padding Top**  | 114px (header height) | 80px       | ❌ Wrong              |
| **Max Width**    | 1440px                | Responsive | ⚠️ Different approach |

**🔴 CRITICAL:**

- Content offset sai do sidebar và header dimensions sai
- Tất cả content bị shift left 29px so với Figma

---

### 4. Hero Section (First Screen)

**Figma Design:**

```
Hero Container:
- Position: absolute
- Top: 114px (below header)
- Left: calc(8.333% + 69px) ≈ 189px from left edge
- Width: 638px

Hero Card:
- Background: #F2EFE7 (beige)
- Padding: 50px 60px
- Border-bottom: 1px solid #6B2128
- Text color: Dark (not white!)
```

**Current Implementation:**

```
Hero element: null (không tìm thấy .hero trong viewport)
Hero content: null (không tìm thấy .hero__content)
```

**❌ PROBLEM:** Hero section không render hoặc không có class `.hero`

Có thể do:

1. Hero đang scroll out of viewport
2. Hero component chưa mount
3. Class names khác
4. Page chưa load xong

---

## 🎯 Detailed Measurements vs Figma

### Figma Layout Calculations (1440px viewport)

```
┌────────────────────────────────────────────────────────┐
│                    1440px Total Width                  │
├──────┬─────────────────────────────────────────────────┤
│      │                                                 │
│      │  Header/Nav Area                                │
│ 129px│  Left: 129px                                    │
│      │  Width: 1311px (1440 - 129)                     │
│ Side │  Height: 114px                                  │
│ bar  │  Padding: 0 32px 0 60px                         │
│      │                                                 │
│      ├─────────────────────────────────────────────────┤
│      │                                                 │
│      │  Content Area                                   │
│      │  Top: 114px (after header)                      │
│      │  Left: calc(8.333% + 69px) ≈ 189px            │
│      │    = 129px sidebar + 60px padding              │
│      │                                                 │
│      │  Hero Card:                                     │
│      │  - Width: 638px                                 │
│      │  - Starts at X: 189px                          │
│      │  - Ends at X: 827px                            │
│      │                                                 │
└──────┴─────────────────────────────────────────────────┘
```

### Current Layout (Actual Measurements)

```
┌────────────────────────────────────────────────────────┐
│                    1440px Total Width                  │
├─────┬──────────────────────────────────────────────────┤
│     │                                                  │
│     │  Header/Nav Area                                 │
│100px│  Left: 100px                                     │
│     │  Width: 1340px (1440 - 100) ← TOO WIDE         │
│Side │  Height: 80px ← TOO SHORT                       │
│bar  │  Padding: varies                                 │
│     │                                                  │
│     ├──────────────────────────────────────────────────┤
│     │                                                  │
│     │  Content Area                                    │
│     │  Top: 80px (after header) ← WRONG               │
│     │  Left: 100px ← SHIFTED LEFT 29px               │
│     │                                                  │
│     │  Hero: Not found in viewport                     │
│     │                                                  │
│     │                                                  │
└─────┴──────────────────────────────────────────────────┘
```

---

## 🔴 Critical Dimension Issues

### Issue 1: Sidebar Width Mismatch

**Impact:** HIGH - Affects entire layout

```
Figma:   129px
Current: 100px
Diff:    -29px (22.5% narrower)
```

**Cascading Effects:**

- Header starts 29px too early (left: 100px instead of 129px)
- Main content shifted left by 29px
- All section offsets wrong
- Navigation feels cramped

**Fix Required:**

```css
/* Current */
.sidebar {
  width: 100px;
}

/* Should be */
.sidebar {
  width: 129px;
}
```

---

### Issue 2: Header Height Mismatch

**Impact:** HIGH - Visual hierarchy wrong

```
Figma:   114px
Current: 80px
Diff:    -34px (29.8% shorter)
```

**Effects:**

- Navigation items feel cramped
- Less breathing room
- Active underline position might be off
- Content starts too early vertically

**Fix Required:**

```css
/* Current */
.header {
  height: 80px;
}

/* Should be */
.header {
  height: 114px;
}
```

---

### Issue 3: Content Offset Chain Reaction

**Because of wrong sidebar + header dimensions:**

```
Current Layout Math:
- Content Left: 100px
- Content Top: 80px
- Hero expected at: X=100px, Y=80px

Figma Layout Math:
- Content Left: 129px + 60px padding = 189px
- Content Top: 114px
- Hero expected at: X=189px, Y=114px

Difference:
- X offset: -89px (shifted left)
- Y offset: -34px (shifted up)
```

**Result:** Entire content area misaligned with Figma grid!

---

## 📊 Percentage Accuracy

### Width Accuracy

| Element        | Accuracy | Grade                   |
| -------------- | -------- | ----------------------- |
| Viewport       | 100%     | ✅ Perfect              |
| Sidebar        | 77.5%    | ❌ Poor                 |
| Header Width   | 97.8%    | ✅ Good (will auto-fix) |
| Content Offset | 52.9%    | ❌ Poor                 |

### Height Accuracy

| Element     | Accuracy | Grade   |
| ----------- | -------- | ------- |
| Header      | 70.2%    | ❌ Poor |
| Content Top | 70.2%    | ❌ Poor |

**Overall Dimension Accuracy: 77.2%** ⚠️

---

## 🛠️ Required Fixes (In Order)

### Fix 1: Update Sidebar Width (CRITICAL)

```css
/* File: src/components/Sidebar/Sidebar.css */

.sidebar {
  width: 129px; /* was 100px */
  /* ... rest stays same ... */
}
```

**Impact:** This will automatically cascade to fix header position.

---

### Fix 2: Update Header Height

```css
/* File: src/components/Header/Header.css */

.header {
  height: 114px; /* was 80px */
  /* ... adjust navigation items vertical centering ... */
}

.header__nav-item {
  height: 114px; /* match header height */
}
```

---

### Fix 3: Update App Container Offsets

```css
/* File: src/App.css */

@media (min-width: 1025px) {
  .App {
    padding-left: 129px; /* was 100px */
    padding-top: 114px; /* was 80px */
  }
}
```

---

### Fix 4: Update All Content Section Offsets

Many components use `calc(8.333% + XXpx)` for left positioning.

**Current calculation assumes sidebar width in the padding.**

**Figma uses:**

```css
left: calc(8.333% + 69px);
/* Where: 8.333% ≈ 120px at 1440px
 * Total left = 120px + 69px = 189px
 * Which is: 129px (sidebar) + 60px (padding)
 */
```

Check these files:

- Art Collection section
- Community Support section
- Events section
- News section
- Hero positioning

---

## ✅ What's Already Correct

1. **Viewport Width** - Perfect 1440px match
2. **Sidebar Position** - Left: 0 correct
3. **Sidebar Display** - Fixed, visible
4. **Header Position** - Fixed (just needs width/height adjustment)
5. **General Responsive Setup** - Good meta viewport tag

---

## 📋 Action Checklist

### Phase 1: Dimension Fixes (30 min)

- [ ] **Update Sidebar Width**

  - [ ] Change `.sidebar` width: 100px → 129px
  - [ ] Test sidebar doesn't overflow
  - [ ] Check vertical progress bar still fits

- [ ] **Update Header Height**

  - [ ] Change `.header` height: 80px → 114px
  - [ ] Adjust `.header__nav-item` height to match
  - [ ] Verify active underline position (bottom: 10px)
  - [ ] Check navigation items vertical centering

- [ ] **Update App Container**
  - [ ] Change padding-left: 100px → 129px
  - [ ] Change padding-top: 80px → 114px
  - [ ] Test on desktop breakpoint only

### Phase 2: Content Offset Fixes (30 min)

- [ ] **Review all section left positions**

  - [ ] Check Hero section positioning
  - [ ] Check Art Collection offset
  - [ ] Check Community Support offset
  - [ ] Check Events section offset
  - [ ] Check News section offset

- [ ] **Update calc() formulas if needed**
  - [ ] Review `calc(8.333% + 69px)` usage
  - [ ] Ensure consistent with new sidebar width

### Phase 3: Visual Verification (15 min)

- [ ] **Take screenshots at 1440px**
- [ ] **Compare side-by-side with Figma**
- [ ] **Measure key elements with DevTools**
- [ ] **Check all breakpoints still work**

---

## 🎯 Expected Results After Fixes

### Before (Current):

```
Sidebar: 100px
Header: 80px @ left 100px
Content: starts at (100px, 80px)
```

### After (Fixed):

```
Sidebar: 129px  ✅
Header: 114px @ left 129px  ✅
Content: starts at (189px, 114px)  ✅
```

**Improvement:** From 77.2% → 98%+ accuracy! 🎯

---

## 💡 Additional Notes

### Why These Dimensions Matter

1. **Visual Hierarchy** - Figma's 114px header gives more breathing room
2. **Content Grid** - 129px sidebar creates proper alignment system
3. **Professional Feel** - Correct spacing = polished look
4. **Design Intent** - Narrower sidebar = more content focus

### Responsive Considerations

These dimension changes only affect **desktop (1440px+)**:

```css
/* Mobile/Tablet keeps current behavior */
@media (max-width: 1024px) {
  .sidebar {
    /* Collapsed or hidden */
  }
  .App {
    padding-left: 0;
    padding-top: 60px; /* mobile header */
  }
}
```

---

## 🔄 Testing Plan

After making dimension changes:

1. **Desktop 1440px** - Primary target, should be pixel-perfect
2. **Desktop 1920px** - Verify wider screens
3. **Laptop 1366px** - Check near-desktop breakpoint
4. **Tablet 1024px** - Ensure responsive kicks in properly
5. **Mobile 768px** - Should be unaffected

---

**Next Step:** Bạn muốn tôi bắt đầu implement các fixes này? Tôi sẽ update theo thứ tự ưu tiên! 🚀
