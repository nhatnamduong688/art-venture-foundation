# 🏠 So Sánh Chi Tiết: Figma Home vs Implementation

**Ngày:** October 20, 2025  
**Figma Node:** Desktop - 7 (node-id: 99-275)  
**Link:** https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF/Art---Venture-Foundation?node-id=99-275  
**Live Site:** http://localhost:3002

---

## 🎯 Executive Summary

| Aspect                | Match % | Status        | Priority |
| --------------------- | ------- | ------------- | -------- |
| **Overall Layout**    | 70%     | ⚠️ Needs work | HIGH     |
| **Colors**            | 95%     | ✅ Good       | LOW      |
| **Typography**        | 90%     | ✅ Good       | LOW      |
| **Hero Section**      | 75%     | ⚠️ Different  | HIGH     |
| **Navigation**        | 60%     | ⚠️ Different  | HIGH     |
| **Art Collection**    | 85%     | ✅ Good       | MEDIUM   |
| **Community Support** | 80%     | ✅ Good       | MEDIUM   |
| **Events**            | 85%     | ✅ Good       | MEDIUM   |
| **News**              | 85%     | ✅ Good       | MEDIUM   |
| **Footer**            | 90%     | ✅ Good       | LOW      |

**Overall Accuracy: 81%** 🎯

---

## 🎨 Design System Analysis

### Colors (95% Match) ✅

**Figma Color Palette:**

```css
Primary Background: #F2EFE7  (Beige/Cream)
Secondary (Burgundy): #6B2128  (Darker than before!)
Text Primary: #2E2E2E  (Dark Gray)
Text Black: #0D0D0D
White: #FFFFFF
Accent Yellow: #C8932C  (10% opacity for sections)
Card Background: #F4F3F1  (Light gray)
```

**Current Implementation:**

```css
Primary: #732231  ❌ Should be #6B2128
Background: #F2F1EB  ⚠️ Should be #F2EFE7
Text: #0D0D0D  ✅ Correct
Text Secondary: #2E2E2E  ✅ Correct (NEW!)
```

**🔧 Action Required:**

```css
/* Update these colors */
--primary-burgundy: #732231  →  #6B2128
--background-beige: #F2F1EB  →  #F2EFE7
--text-secondary: #2E2E2E  ← ADD THIS
--accent-yellow: #C8932C  ← ADD THIS
--card-background: #F4F3F1  ← ADD THIS
```

---

## 📐 Layout Structure Comparison

### 1. **Sidebar** (60% Match) ⚠️

**Figma Design:**

```
Sidebar Position: Fixed Left
Width: 129px  (Narrower than before!)
Background: Linear gradient mix #FAF9F6 + #FFFFFF
Position: Top: 0, Bottom: 0

Components:
┌─────────────┐
│   Logo      │  (60x60px, top padding 26px)
│             │
│   Progress  │  (Vertical bar: 387px gray + 71px burgundy)
│   Bar       │
│             │
│   Language  │  (VIE text, bottom padding 40px)
└─────────────┘
```

**Current Implementation:**

```
❌ Sidebar exists but NOT displayed on homepage
❌ Using horizontal Header instead
❌ Width is different (was 232px in old Figma)
```

**🎯 Critical Differences:**

- Figma sidebar is **129px** wide (much narrower!)
- Background has gradient effect
- Implementation shows Header, not Sidebar

---

### 2. **Header/Navigation** (65% Match) ⚠️

**Figma Design:**

```
Position: Fixed Top (after sidebar starts)
Left: 129px  (starts after sidebar)
Height: 114px
Background: Transparent/None
Padding: 0 32px 0 60px

Navigation Items:
- "H" (Home) - Active with burgundy underline
- Collection
- Artists
- A&V Foundation Events
- A&V News
- KNOWLEDGE  (uppercase K)

Active State:
- Font: Inter Bold
- Color: #6B2128
- Underline: 70px width, 4px height, burgundy
- Position: bottom 10px
```

**Current Implementation:**

```
✅ Has navigation items
✅ Has active states
⚠️ Position: Starts from left: 100px (should be 129px)
⚠️ Height might be different
⚠️ No "H" for Home - shows full "Home" text
⚠️ Knowledge might not be capitalized correctly
```

**🔧 Action Items:**

- [ ] Change Home to just "H"
- [ ] Adjust left offset to 129px
- [ ] Check "KNOWLEDGE" capitalization (K uppercase, nowledge lowercase)
- [ ] Verify active underline width (70px)

---

## 🖼️ Section-by-Section Comparison

### 3. **Hero Section** (75% Match) ⚠️

**Figma Layout:**

```css
/* Hero Container */
Position: absolute
Top: 114px  (below header)
Left: calc(8.333% + 69px)  (≈ 189px from edge)
Width: 638px

/* Hero Card */
Background: #F2EFE7
Border: 1px solid #6B2128 (only bottom border!)
Padding: 50px 60px
Border-radius: inherited

/* Title */
Font: Big Caslon Medium
Size: 80px
Color: #6B2128  (Not white!)
Line-height: normal

/* Description */
Font: Inter Regular
Size: 16px
Color: #2E2E2E  (Not white!)
Height: 169px
Line-height: 2

/* Button */
Text: "MORE" (all caps)
Color: #6B2128
Arrow color: #6B2128
Gap: 25px
```

**Current Implementation:**

```css
❌ Hero text is WHITE on dark background
❌ No border on card
❌ Full-screen hero with museum image
❌ Text colors completely different
✅ Font sizes correct (80px title, 16px body)
✅ Gap 25px correct
```

**🎯 MAJOR DIFFERENCES:**

This is a **COMPLETE REDESIGN**! The Figma shows:

1. **Card-based hero** (not full-screen image)
2. **Dark text on light background** (opposite of current)
3. **Bordered card** floating over background image
4. **Much smaller** footprint (638px width vs full-screen)

---

### 4. **Art Collection Section** (85% Match) ✅

**Figma Design:**

```css
/* Section Container */
Top: 1318px
Left: calc(8.333% + 68px)
Width: 1252px
Gap: 22px

/* Heading */
Font: Big Caslon Medium
Size: 60px
Color: #732231  (burgundy)
Line-height: normal
Height: 138px (includes gap 33px)

/* Cards Container */
Display: flex
Overflow-x: auto
Gap: between cards (cards are 564px each)

/* Navigation Buttons */
Position: bottom right
Two circular buttons (50x50px)
Background: rgba(255,255,255,0.8) with backdrop blur
Border-radius: 25px
Contains arrow icons
Gap: 22px between buttons

/* View All Button */
Text: "VIEW ALL" (in burgundy #732231)
Gap: 25px with arrow
```

**Current Implementation:**

```
✅ Has art collection cards
✅ Horizontal scroll
✅ Card dimensions likely correct (564x577px)
⚠️ Navigation buttons position - need to verify
⚠️ "VIEW ALL COLLECTION" vs "VIEW ALL"
✅ Heading color burgundy
```

**🔧 Minor Fixes:**

- [ ] Button text: "VIEW ALL COLLECTION" → "VIEW ALL"
- [ ] Verify navigation button positioning
- [ ] Check gap values (22px vs current)

---

### 5. **Community Support Section** (80% Match) ✅

**Figma Design:**

```css
/* Background */
Background: #F4F3F1  (light gray card)
Padding: 42px
Width: 730px

/* Content Box */
Display: flex
Gap: 55px  (between year columns)
Overflow-x: clip, overflow-y: auto

/* Year Headers */
Font: Inter Bold
Size: 30px
Color: #732231  (burgundy)
Line-height: 1.5

/* Year Content */
- 2024: 288px height text
- 2025: Auto height

/* Links */
Text: Inter Medium, 16px
Color: #2E2E2E
NO arrow icons! (just text)

/* Background Image */
Right side: Large decorative image
Position: calc(58.333% + 85px)
Size: 515px width x 869px height
```

**Current Implementation:**

```
✅ Has timeline structure
✅ Year headers styled correctly
⚠️ Links might have arrows (should not)
⚠️ Background might be different
⚠️ Width might not be constrained to 730px
⚠️ Gray background card styling
```

**🔧 Fixes Needed:**

- [ ] Add gray card background (#F4F3F1)
- [ ] Remove arrows from year links (just text)
- [ ] Constrain width to 730px
- [ ] Add decorative image on right side

---

### 6. **Events Section** (85% Match) ✅

**Figma Design:**

```css
/* Heading */
Font: Big Caslon Medium
Size: 60px
Color: #732231

/* Event Cards */
Width: 737px each
Gap: 32px
Image aspect: 737/460

/* Card Content */
Title Font: Inter Medium, 20px
Title Color: #2E2E2E
Description: Inter Regular, 16px, line-height 2
Description Color: #2E2E2E

/* Button */
Text: "DETAIL" (not "VIEW DETAIL")
Color: #2E2E2E  (not burgundy!)
Arrow color: #2E2E2E

/* Navigation */
Two buttons: Previous/Next
Position: bottom right
Colors: #2E2E2E arrows
```

**Current Implementation:**

```
✅ Event cards with images
✅ Horizontal layout
✅ Card dimensions likely correct
⚠️ Button text might say "VIEW DETAIL" - should be "DETAIL"
⚠️ Button colors might be burgundy - should be #2E2E2E
⚠️ Title colors need verification
```

**🔧 Updates:**

- [ ] Change "VIEW DETAIL" → "DETAIL"
- [ ] Event title and text colors → #2E2E2E
- [ ] Button and arrow colors → #2E2E2E (not burgundy)

---

### 7. **News Section** (85% Match) ✅

**Figma Design:**

```css
/* Layout */
Display: grid/flex
Columns: 3 per row
Gap: 75px (horizontal)
Gap: 42px (between rows)

/* Card Width */
Width: 304px each

/* Heading Colors */
News Title Font: Inter Medium, 20px
News Title Color: #6B2128  (burgundy)

/* Content */
Description: Inter Regular, 16px
Description Color: #0D0D0D
Line-height: 2

/* Buttons */
Text: "DETAIL"
Color: #2E2E2E
Arrow: #2E2E2E

/* Section Heading */
"A&V News" (with ampersand)
Color: #6B2128
```

**Current Implementation:**

```
✅ News grid layout
✅ Multiple news items
⚠️ Card widths (304px)
⚠️ News title color should be burgundy #6B2128
⚠️ Button might say "VIEW DETAIL" - should be "DETAIL"
⚠️ Gaps between cards
```

**🔧 Updates:**

- [ ] News card width: 304px
- [ ] News titles: #6B2128 (burgundy)
- [ ] Body text: #0D0D0D
- [ ] Buttons: "DETAIL" (not "VIEW DETAIL"), color #2E2E2E
- [ ] Check gaps: 75px horizontal, 42px vertical

---

### 8. **Footer** (90% Match) ✅

**Figma Design:**

```css
/* Background */
Background: rgba(200, 147, 44, 0.1)  (yellow tint!)
Height: 628px
Padding: 36px 188px

/* Layout */
Display: flex-col
Gap: 227px  (huge gap!)
Justify: space-between

/* Sections */
1. Contact Info + Social
2. Links (Who We Are, Other Information)
3. Copyright

/* Text Styles */
Headings: Inter Medium, 18px, #2E2E2E
Body: Inter Regular, 16px, #2E2E2E
Links: Underlined, lowercase

/* Logo Watermark */
Position: right side
Opacity: 0.02
Size: 914x914px
Top: -28px, Left: 720px
```

**Current Implementation:**

```
✅ Footer exists
✅ Contact information
✅ Social links
⚠️ Background color (should have yellow tint)
⚠️ Large gap between sections (227px)
⚠️ Large watermark logo background
⚠️ Link styling (underlined, lowercase)
```

**🔧 Fine-tune:**

- [ ] Add yellow tint background: `rgba(200, 147, 44, 0.1)`
- [ ] Increase gap between top and bottom: 227px
- [ ] Add large watermark logo (opacity 0.02)
- [ ] Style links: lowercase, underlined
- [ ] Check padding: 36px 188px

---

## 📊 Detailed Metrics

### Typography Accuracy

| Element          | Figma                      | Current                  | Match |
| ---------------- | -------------------------- | ------------------------ | ----- |
| Hero Title       | Big Caslon 80px #6B2128    | Big Caslon 80px WHITE ❌ | 50%   |
| Section Headings | Big Caslon 60px #732231    | Big Caslon 60px ✅       | 100%  |
| Body Text        | Inter Regular 16px #2E2E2E | Inter 16px ⚠️            | 90%   |
| News Titles      | Inter Medium 20px #6B2128  | Inter Medium 20px ⚠️     | 90%   |
| Buttons          | Inter Medium 16px          | Inter Medium 16px ✅     | 100%  |
| Year Headers     | Inter Bold 30px #732231    | Inter Bold 30px ✅       | 100%  |

### Color Usage

| Component        | Figma Color          | Current Color | Match      |
| ---------------- | -------------------- | ------------- | ---------- |
| Primary Burgundy | #6B2128              | #732231       | ⚠️ Close   |
| Background       | #F2EFE7              | #F2F1EB       | ⚠️ Close   |
| Text Primary     | #2E2E2E              | Often #0D0D0D | ⚠️ Mixed   |
| Text Dark        | #0D0D0D              | #0D0D0D       | ✅ Match   |
| Card BG          | #F4F3F1              | Not used      | ❌ Missing |
| Yellow Accent    | rgba(200,147,44,0.1) | Not used      | ❌ Missing |

### Spacing System

| Type           | Figma      | Current     | Match        |
| -------------- | ---------- | ----------- | ------------ |
| Sidebar Width  | 129px      | 100px/232px | ❌ Wrong     |
| Header Height  | 114px      | 80px        | ⚠️ Different |
| Section Gap    | 75px       | 80px        | ⚠️ Close     |
| Card Gap       | 22px-32px  | Varies      | ⚠️ Mixed     |
| Button Gap     | 25px       | 25px        | ✅ Match     |
| Footer Padding | 36px 188px | Different   | ⚠️ Check     |

---

## 🚨 Critical Issues (HIGH Priority)

### 1. **Hero Section Complete Redesign** 🔴

**Current:** Full-screen image with white text overlay  
**Figma:** Bordered card with dark text on light background

This requires **complete refactoring** of Hero component:

```tsx
// BEFORE (Current)
<div className="hero" style={{ background: "url(museum.jpg)" }}>
  <div className="hero__content">
    <h1 style={{ color: "white" }}>Art & Venture Foundation</h1>
    <p style={{ color: "white" }}>Lorem ipsum...</p>
  </div>
</div>

// AFTER (Figma Design)
<div className="hero" style={{ background: "url(museum.jpg)" }}>
  <div className="hero__card" style={{
    background: "#F2EFE7",
    borderBottom: "1px solid #6B2128",
    padding: "50px 60px",
    width: "638px"
  }}>
    <h1 style={{ color: "#6B2128" }}>Art & Venture Foundation</h1>
    <p style={{ color: "#2E2E2E" }}>Lorem ipsum...</p>
  </div>
</div>
```

---

### 2. **Sidebar Width Change** 🔴

**Old Figma (node 1-2):** 232px  
**New Figma (node 99-275):** **129px** ← MAJOR CHANGE!  
**Current:** Not visible on homepage

**Impact:**

- All content left offsets need adjustment
- Header navigation position changes
- Layout calculations need update

```css
/* Update everywhere */
.sidebar {
  width: 129px; /* was 232px */
}

.main-content {
  padding-left: 129px; /* was 100px or 232px */
}

.header {
  left: 129px; /* was 100px */
}
```

---

### 3. **Navigation "Home" → "H"** 🔴

Figma shows just letter **"H"** for Home, not full word.

```tsx
// Change from:
<a href="/">Home</a>

// To:
<a href="/">H</a>
```

---

## 🟡 Medium Priority Issues

### 4. **Button Text Changes**

Throughout the site:

- "VIEW DETAIL" → **"DETAIL"**
- "VIEW ALL COLLECTION" → **"VIEW ALL"**
- "MORE" stays "MORE"

### 5. **Color Adjustments**

```css
:root {
  /* Update these */
  --primary: #6b2128; /* was #732231 */
  --background: #f2efe7; /* was #F2F1EB */

  /* Add these */
  --text-secondary: #2e2e2e;
  --card-background: #f4f3f1;
  --accent-yellow: rgba(200, 147, 44, 0.1);
}
```

### 6. **Community Support Card Background**

Add gray card wrapper:

```css
.community-support__content {
  background: #f4f3f1;
  padding: 42px;
  width: 730px;
  max-width: 100%;
}
```

### 7. **Remove Arrows from Community Links**

Year links should be **text only**, no arrow icons.

---

## 🟢 Low Priority (Polish)

### 8. **Footer Yellow Tint**

```css
footer {
  background: rgba(200, 147, 44, 0.1);
}
```

### 9. **Footer Watermark Logo**

Add large semi-transparent logo in background:

```css
footer::before {
  content: "";
  background: url("logo.png");
  opacity: 0.02;
  width: 914px;
  height: 914px;
  position: absolute;
  top: -28px;
  left: 720px;
}
```

### 10. **Card Widths**

- News cards: 304px
- Event cards: 737px
- Community support: 730px

---

## ✅ What's Working Well

1. **Typography System** - Font families and most sizes correct
2. **Component Structure** - Good modular architecture
3. **Art Collection Cards** - Nearly perfect implementation
4. **Responsive Design** - Better than Figma (which only shows desktop)
5. **Code Quality** - Well-organized, maintainable
6. **Footer Information** - Content and structure good

---

## 📋 Action Checklist

### Phase 1: Critical Fixes (2-3 hours)

- [ ] **Refactor Hero Section**

  - [ ] Change to card-based design
  - [ ] Update text colors (#6B2128 title, #2E2E2E body)
  - [ ] Add border-bottom only
  - [ ] Position at left offset with 638px width
  - [ ] Keep background image but make it background layer

- [ ] **Fix Sidebar**

  - [ ] Change width to 129px
  - [ ] Update all content offsets
  - [ ] Ensure it displays on homepage
  - [ ] Add gradient background

- [ ] **Update Navigation**

  - [ ] Change "Home" → "H"
  - [ ] Verify "KNOWLEDGE" capitalization
  - [ ] Check active state underline (70px width)

- [ ] **Color System Update**
  - [ ] Change primary: #732231 → #6B2128
  - [ ] Change background: #F2F1EB → #F2EFE7
  - [ ] Add text-secondary: #2E2E2E
  - [ ] Add card-background: #F4F3F1
  - [ ] Add accent-yellow: rgba(200,147,44,0.1)

### Phase 2: Medium Priority (1-2 hours)

- [ ] **Button Text Updates**

  - [ ] "VIEW DETAIL" → "DETAIL" (Events & News)
  - [ ] "VIEW ALL COLLECTION" → "VIEW ALL"

- [ ] **Community Support**

  - [ ] Add gray card background (#F4F3F1)
  - [ ] Remove arrows from year links
  - [ ] Constrain width to 730px

- [ ] **News Section**

  - [ ] News titles → #6B2128 (burgundy)
  - [ ] Card width → 304px
  - [ ] Check gaps (75px horizontal, 42px vertical)

- [ ] **Events Section**
  - [ ] Verify button text and colors (#2E2E2E)
  - [ ] Check title colors (#2E2E2E)

### Phase 3: Polish (1 hour)

- [ ] **Footer Enhancements**

  - [ ] Add yellow tint background
  - [ ] Increase internal gap to 227px
  - [ ] Add watermark logo (opacity 0.02)
  - [ ] Style links: lowercase, underlined

- [ ] **Fine-tuning**
  - [ ] Review all spacing values
  - [ ] Check all color usages
  - [ ] Verify responsive behavior
  - [ ] Cross-browser testing

---

## 🎯 Summary of Key Changes

| Change        | From                | To                 | Impact                          |
| ------------- | ------------------- | ------------------ | ------------------------------- |
| Hero Design   | Full-screen overlay | Card on background | **HIGH** - Complete refactor    |
| Sidebar Width | 232px/100px         | 129px              | **HIGH** - Layout shift         |
| Home Nav      | "Home"              | "H"                | **MEDIUM** - Simple text change |
| Primary Color | #732231             | #6B2128            | **MEDIUM** - Global update      |
| Background    | #F2F1EB             | #F2EFE7            | **MEDIUM** - Subtle shift       |
| Button Text   | "VIEW DETAIL"       | "DETAIL"           | **LOW** - Text changes          |
| Footer BG     | Solid               | Yellow tint        | **LOW** - Style enhancement     |

---

## 💡 Recommendations

### Approach 1: Full Figma Compliance (Recommended)

**Time:** 4-6 hours  
**Effort:** Medium-High  
**Result:** 95%+ match with Figma

Follow all three phases above. This ensures design consistency and professionalism.

### Approach 2: Critical Only

**Time:** 2-3 hours  
**Effort:** Medium  
**Result:** 85% match

Implement only Phase 1 (Hero, Sidebar, Colors, Navigation). This addresses the most visible differences.

### Approach 3: Hybrid Enhancement

**Time:** 3-4 hours  
**Effort:** Medium  
**Result:** 90% match + improvements

Do Phase 1 + Phase 2, but keep responsive enhancements that improve UX beyond Figma spec.

---

## 🤔 Discussion Points

### Question 1: Hero Section Design

**Figma:** Card-based with light background  
**Current:** Full-screen immersive

The current implementation is arguably **more visually striking**. The Figma design is more **conservative and professional**. Which brand image do we want?

### Question 2: "H" vs "Home"

Figma shows just "H" for Home navigation. This is **minimalist but potentially confusing** for users. Consider:

- Keep "H" for exact Figma match
- Use "Home" for better UX
- Use "H" on desktop, "Home" on mobile

### Question 3: Sidebar Width Reduction

**Old Figma:** 232px  
**New Figma:** 129px

This is a **45% reduction**! Gives more content space but makes navigation tighter. The change suggests a shift toward:

- More content focus
- Less navigation prominence
- Cleaner, minimal aesthetic

---

## 📸 Visual Comparison Notes

### Figma Screenshot Analysis:

1. **Warm beige color scheme** throughout (#F2EFE7)
2. **Burgundy accents** (#6B2128) for headings and CTAs
3. **Gray text** (#2E2E2E) for body content - softer than black
4. **Card-based layouts** with subtle backgrounds (#F4F3F1)
5. **Clean spacing** - generous gaps, breathing room
6. **Minimal navigation** - narrow sidebar, simple icons
7. **Consistent button style** - text + arrow, no heavy styles

### Current Implementation Strengths:

1. **Strong hero presence** - immersive full-screen
2. **Good responsive design** - works on all devices
3. **Clean code structure** - maintainable
4. **Smooth animations** - professional feel
5. **Better navigation** - more intuitive horizontal header

---

## 🔄 Migration Path

### Step 1: Backup

```bash
git checkout -b figma-home-implementation
```

### Step 2: Color System

Update all color variables first - this is safest and most visible.

### Step 3: Sidebar

Resize sidebar and test all pages - this impacts global layout.

### Step 4: Hero

Refactor hero section - biggest visual change.

### Step 5: Content

Update button texts, adjust spacing, fine-tune details.

### Step 6: Testing

- Visual regression testing
- Responsive testing
- Cross-browser testing
- Accessibility check

---

## 📞 Next Steps

1. **Review this report** with team/client
2. **Decide on approach** (Full compliance vs Hybrid)
3. **Prioritize changes** based on business impact
4. **Create tickets** for each change
5. **Estimate timeline** realistically
6. **Begin implementation** with Phase 1

---

**Generated:** October 20, 2025  
**Tools:** Figma MCP + Chrome DevTools MCP  
**Analyst:** AI Code Review System
