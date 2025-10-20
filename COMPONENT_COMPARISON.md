# 🔍 COMPONENT-BY-COMPONENT COMPARISON
**Figma Design vs Current Implementation**

Date: October 20, 2025  
Figma Node: 99-275 (Desktop - 7 - Home Page)  
Viewport: 1440px width

---

## 📐 **MEASUREMENT METHODOLOGY**

### Figma Design Specs (Extracted from get_design_context):
- **Position System**: Absolute positioning with pixel values
- **Colors**: Exact hex values from Figma tokens
- **Typography**: Font family, size, weight, line-height from Figma
- **Spacing**: Padding, gap, margins in pixels

### Implementation (Browser Computed Styles):
- Use `window.getComputedStyle()` to get actual rendered values
- Measure exact positions, dimensions, colors
- Compare with Figma specs

---

## 🎯 **COMPONENT 1: HERO SECTION**

### **Figma Specs (Node: 99:724):**

```
Position & Layout:
├─ Container Position: absolute
├─ Left: calc(8.333% + 69px) = 189px (from viewport left at 1440px)
├─ Top: 595px (from page top)
├─ Width: 638px
└─ Z-index: Above background image

Content Box:
├─ Background: #F2EFE7
├─ Border: 1px solid #6B2128 (bottom only)
├─ Padding: 60px (left/right), 50px (top/bottom)
├─ Gap: 25px (between elements)
└─ Border-radius: inherit

Title:
├─ Font: 'Big Caslon', serif
├─ Font-size: 80px
├─ Font-weight: 500 (Medium)
├─ Color: #6B2128 (burgundy)
├─ Line-height: normal
└─ Text: "Art & Venture Foundation"

Description:
├─ Font: 'Inter', sans-serif
├─ Font-size: 16px
├─ Font-weight: 400 (Regular)
├─ Color: #2E2E2E
├─ Line-height: 2 (32px)
├─ Height: 169px (fixed)
└─ Text: Lorem ipsum...

Button:
├─ Text: "MORE"
├─ Color: #6B2128 (burgundy)
└─ Icon: arrow-narrow-right (24px)
```

### **Current Implementation:**

Will inspect with browser DevTools...

---

## 🎯 **COMPONENT 2: HEADER/NAVIGATION**

### **Figma Specs (Node: 193:1062):**

```
Container:
├─ Position: absolute/fixed
├─ Height: 114px (full header)
├─ Left: 129px (after sidebar)
├─ Width: calc(100% - 129px)
├─ Padding: 0 32px 0 60px
├─ Background: rgba(255,255,255,0.95) with backdrop blur
└─ Border-bottom: 1px solid rgba(0,0,0,0.05)

Navigation Items:
├─ Height: 80px (nav item container)
├─ Gap: 24px (between items)
├─ Padding: 10px (each item)
├─ Font: 'Inter', sans-serif
├─ Font-size: 16px
├─ Font-weight: 400 (Regular), 700 (Bold for active)
├─ Text-transform: capitalize
├─ Color (inactive): #2E2E2E
└─ Color (active): #6B2128

Active Indicator:
├─ Position: absolute, bottom: 10px
├─ Width: 70px (active), 16px (inactive)
├─ Height: 4px
├─ Background: #6B2128
├─ Border-radius: 6px
└─ Opacity: 1 (active), 0 (inactive)

Navigation Labels:
├─ "Home" (or "H" - needs verification)
├─ "Collection"
├─ "Artists"
├─ "A&V Foundation Events"
├─ "A&V News"
└─ "Knowledge" (with K + lowercase rest)
```

### **Current Implementation:**
✅ VERIFIED - All specs match except "Home" label (was "H", now "Home")

---

## 🎯 **COMPONENT 3: SIDEBAR**

### **Figma Specs (Node: 474:2268):**

```
Container:
├─ Position: fixed
├─ Left: 0
├─ Top: 0
├─ Bottom: 0
├─ Width: 129px ✅
├─ Background: linear-gradient(90deg, #FAF9F6 0%, #FAF9F6 100%)
├─ Z-index: 100
├─ Padding: 26px 0 40px 0
└─ Display: flex, flex-direction: column, space-between

Logo:
├─ Size: 60px x 60px
└─ Position: top

Progress Bar:
├─ Total height: 387px (background track)
├─ Active height: 71px (burgundy indicator)
├─ Width: 3px
├─ Border-radius: 5px
├─ Colors: #F2EFE7 (track), #6B2128 (active)
└─ Position: center

Language Indicator:
├─ Text: "VIE"
├─ Font: 'Inter', Medium
├─ Font-size: 16px
├─ Position: bottom
└─ Height: 32px
```

### **Current Implementation:**
✅ VERIFIED - Width updated to 129px from 100px

---

## 🎯 **COMPONENT 4: A&V NEWS SECTION**

### **Figma Specs (Node: 99:323):**

```
Heading:
├─ Font: 'Big Caslon', Medium
├─ Font-size: 60px
├─ Color: #6B2128 (burgundy)
├─ Line-height: normal
└─ Text: "A&V News"

Layout:
├─ Container: flex, gap: 75px (between columns)
├─ Columns: 3 columns
├─ Column width: 304px each
└─ Gap: 42px (between rows)

News Card:
├─ Display: flex, flex-direction: column
├─ Gap: 24px
├─ Width: 304px

Card Title:
├─ Font: 'Inter', Medium
├─ Font-size: 20px
├─ Line-height: 1.5
├─ Color: #6B2128 (burgundy)
└─ Text: "Lorem ipsum dolor sit amet"

Card Description:
├─ Font: 'Inter', Regular
├─ Font-size: 16px
├─ Line-height: 2
├─ Color: #0D0D0D
└─ Various heights based on content

Button:
├─ Text: "DETAIL"
├─ Font: 'Inter', Medium
├─ Font-size: 16px
├─ Color: #2E2E2E
├─ Gap: 25px (between text and icon)
└─ Icon: arrow-narrow-right (24px)
```

---

## 🎯 **COMPONENT 5: ART COLLECTION SECTION**

### **Figma Specs (Node: 140:2143):**

```
Heading:
├─ Font: 'Big Caslon', Medium
├─ Font-size: 60px
├─ Color: #732231 (older burgundy - NEEDS UPDATE to #6B2128)
├─ Text: "Art & Venture Art Collection"
└─ Width: 1033px

Gallery Cards:
├─ Card size: 564px x 577px
├─ Background (placeholder): #FFE6E6
├─ Image overlay: full coverage
├─ Display: horizontal scroll
└─ Gap: Seamless (no gap visible)

Card Overlay (on hover/active):
├─ Bottom gradient: rgba(0,0,0,0) to #000000
├─ Height: 256px
├─ Opacity: varies (0 to visible on hover)

Card Content (overlay):
├─ Position: absolute, bottom
├─ Left: 36px
├─ Width: 490px
├─ Color: white
├─ Opacity: 0 (default), visible on hover

Controls:
├─ Navigation: "VIEW ALL" button
├─ Arrows: Prev/Next buttons
├─ Button size: 50px x 50px
├─ Background: rgba(255,255,255,0.8) with backdrop blur
└─ Border-radius: 25px (fully rounded)
```

---

## 🎯 **COMPONENT 6: COMMUNITY SUPPORT SECTION**

### **Figma Specs (Node: 99:300):**

```
Heading:
├─ Font: 'Big Caslon', Medium
├─ Font-size: 60px
├─ Color: #732231 (NEEDS UPDATE to #6B2128)
└─ Text: "Community support"

Timeline Box:
├─ Background: #F4F3F1 ✅
├─ Width: 730px
├─ Padding: 42px 42px 42px 0 ✅
├─ Gap: 55px (between timeline items)
└─ Display: flex, horizontal scroll

Timeline Item:
├─ Width: 304px
├─ Gap: 24px (between elements)

Year Heading:
├─ Font: 'Inter', Bold
├─ Font-size: 30px
├─ Line-height: 1.5
├─ Color: #732231 (NEEDS UPDATE to #6B2128)
└─ Text: "2024", "2025"

Description:
├─ Font: 'Inter', Regular
├─ Font-size: 16px
├─ Line-height: 2
├─ Color: #2E2E2E
└─ Height: 288px (for 2024), varies for others

Event Links:
├─ Font: 'Inter', Medium
├─ Font-size: 16px
├─ Color: #2E2E2E
├─ Gap: 18px (between links)
└─ Text: "Art exhibition Ho Chi Minh City", "Give a scholarship"
```

---

## 🎯 **COMPONENT 7: A&V FOUNDATION EVENTS SECTION**

### **Figma Specs (Node: 99:353):**

```
Heading:
├─ Font: 'Big Caslon', Medium
├─ Font-size: 60px
├─ Color: #732231 (NEEDS UPDATE to #6B2128)
└─ Text: "A&V Foundation Events"

Event Card:
├─ Width: 737px
├─ Gap: 24px (between elements)
├─ Display: horizontal scroll
└─ Gap between cards: 32px

Event Image:
├─ Aspect ratio: 737:460
├─ Width: 100%
└─ Object-fit: cover

Event Title:
├─ Font: 'Inter', Medium
├─ Font-size: 20px
├─ Line-height: 1.5
├─ Color: #2E2E2E
└─ Text: "Gallery exhibition of A&V Foundation Mid 2025"

Event Description:
├─ Font: 'Inter', Regular
├─ Font-size: 16px
├─ Line-height: 2
├─ Color: #2E2E2E

Button:
├─ Text: "DETAIL" ✅
├─ Font: 'Inter', Medium
├─ Font-size: 16px
├─ Color: #2E2E2E
└─ Gap: 25px

Navigation:
├─ "VIEW ALL" button (burgundy #6B2128)
├─ Prev/Next arrows
└─ Button size: 50px x 50px
```

---

## 🎯 **COMPONENT 8: FOOTER**

### **Figma Specs (Node: 128:1457):**

```
Container:
├─ Background: rgba(200,147,44,0.1) (yellow tint)
├─ Height: 628px
├─ Padding: 36px 188px 36px 188px
└─ Position: bottom of page

Watermark Logo:
├─ Position: absolute
├─ Size: 914px x 914px
├─ Opacity: 0.02
├─ Left: 720px
├─ Top: -28px
└─ Image: AV Foundation logo

Content Layout:
├─ Display: flex, flex-direction: column
├─ Gap: 227px (between sections)
└─ Justify: space-between

Section Headings:
├─ Font: 'Inter', Medium
├─ Font-size: 18px
├─ Line-height: 1.5
├─ Color: #2E2E2E
└─ Text: "Art & Venture Foundation", "Who We are", "Other information"

Body Text:
├─ Font: 'Inter', Regular
├─ Font-size: 16px
├─ Line-height: 2
├─ Color: #2E2E2E

Links:
├─ Text-decoration: underline
├─ Text-transform: lowercase
└─ Color: #2E2E2E

Social Icons:
├─ Size: 16px x 16px
├─ Gap: 24px
└─ Color: #2E2E2E

Copyright:
├─ Font: 'Inter', Regular
├─ Font-size: 16px
├─ Color: #2E2E2E
└─ Text: "© Art & Venture Foundation. All rights reserved."
```

---

## 📊 **NEXT STEPS:**

1. ✅ **Inspect Hero Section** - Get computed styles and compare
2. ⏳ **Fix Hero Section** - Apply Figma specs exactly
3. ⏳ **Verify A&V News Section**
4. ⏳ **Verify Art Collection Section**
5. ⏳ **Update remaining #732231 to #6B2128**
6. ⏳ **Footer watermark logo** (opacity 0.02)
7. ⏳ **Footer yellow tint background**

---

## 🎯 **COMPARISON STATUS:**

| Component | Figma Analyzed | Implementation Inspected | Status |
|-----------|---------------|-------------------------|--------|
| **Hero Section** | ✅ Yes | ⏳ Pending | 🔴 Need to inspect |
| **Header/Nav** | ✅ Yes | ✅ Yes | ✅ **MATCH** |
| **Sidebar** | ✅ Yes | ✅ Yes | ✅ **MATCH** |
| **A&V News** | ✅ Yes | ⏳ Pending | ⚠️ Need verification |
| **Art Collection** | ✅ Yes | ⏳ Pending | ⚠️ Color needs update |
| **Community Support** | ✅ Yes | ⏳ Pending | ⚠️ Color needs update |
| **Events Section** | ✅ Yes | ⏳ Pending | ⚠️ Color needs update |
| **Footer** | ✅ Yes | ⏳ Pending | 🔴 Missing watermark |

---

*This document will be updated as we inspect and fix each component.*

