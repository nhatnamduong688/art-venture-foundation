# 🎨 Avatar & Quote - Match Figma Design

**Figma Node**: https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF/Art---Venture-Foundation?node-id=243-1572  
**Date**: November 23, 2025  
**Status**: ✅ Fixed to Match Figma

---

## 📐 Figma Specifications

### Avatar (Desktop 1440px+):
```
Width: 336px
Height: 315px
Border Radius: 12px 12px 0 0 (rounded top only)
Filter: grayscale(100%)
```

### Quote Box (Desktop 1440px+):
```
Background: rgba(200,147,44,0.1)
Padding: 84px 28px 33px 28px
Border Radius: 0 0 12px 12px (rounded bottom only)
Position: relative

Quote Mark:
- Font: Big Caslon
- Size: 180px
- Color: #6B2128
- Position: absolute, top 33px, left 28px

Quote Text:
- Font: Inter Regular
- Size: 20px
- Line Height: 1.8
- Color: #2E2E2E
```

---

## ✅ Changes Made

### 1. Border Radius (Rounded Corners)

**Before**: `border-radius: 0` (sharp corners ❌)  
**After**: 
```css
.artist-portrait {
  border-radius: 12px 12px 0 0; /* Rounded top */
}

.artist-quote {
  border-radius: 0 0 12px 12px; /* Rounded bottom */
}
```
**Result**: Avatar và quote tạo thành 1 card liền mạch ✅

---

### 2. Quote Mark Position & Size

**Before**:
```css
.artist-quote__mark {
  font-size: 36px; /* Too small ❌ */
  margin-bottom: 12px;
  position: static;
}
```

**After**:
```css
.artist-quote__mark {
  font-size: 180px; /* ✅ Figma desktop size */
  position: absolute; /* ✅ Absolute positioning */
  top: 33px; /* ✅ Figma position */
  left: 28px; /* ✅ Figma position */
  line-height: 1;
  margin: 0;
}
```
**Result**: Quote mark lớn, dramatic như Figma ✅

---

### 3. Quote Box Padding

**Before**: `padding: 24px 16px` (not enough space ❌)  
**After**: 
```css
@media (min-width: 1440px) {
  .artist-quote {
    padding: 84px 28px 33px 28px; /* ✅ Figma spec */
  }
}

@media (min-width: 1024px) {
  .artist-quote {
    padding: 60px 20px 24px 20px; /* ✅ Scaled for medium */
  }
}
```
**Result**: Đủ không gian cho quote mark và text ✅

---

### 4. Connected Layout (No Gap)

**Before**: `gap: 32px` between avatar and quote ❌  
**After**: `gap: 0` ✅

```css
.artist-detail-left {
  gap: 0; /* No gap - they connect */
}
```
**Result**: Avatar và quote connect seamlessly như 1 card ✅

---

### 5. Avatar Dimensions

**Desktop (1440px+)**:
```css
.artist-portrait {
  width: 336px; /* ✅ Figma width */
  height: 315px; /* ✅ Figma height (was 450px) */
}
```

**Medium (1024px)**:
```css
.artist-portrait {
  width: 240px;
  height: 240px; /* ✅ Better aspect ratio */
}
```

---

### 6. Quote Text Sizes

**Desktop (1440px+)**:
```css
.artist-quote__text {
  font-size: 20px; /* ✅ Figma size */
  line-height: 1.8; /* ✅ Figma spec */
}
```

**Medium (1024px)**:
```css
.artist-quote__text {
  font-size: 15px; /* ✅ Scaled down */
  line-height: 1.8;
}
```

**Mobile (<1024px)**:
```css
.artist-quote__text {
  font-size: 14px;
  line-height: 1.8;
}
```

---

## 📊 Before vs After

### Visual Comparison:

**Before (❌):**
```
┌─────────────┐
│   Avatar    │ ← No rounded corners
│   (450px)   │
└─────────────┘
      ↕ Gap 32px
┌─────────────┐
│ "  Quote    │ ← Small mark (36px)
│             │ ← Not enough padding
└─────────────┘
```

**After (✅):**
```
┌─────────────┐
│   Avatar    │╮
│   (315px)   ││ ← Rounded corners
└─────────────┘│   top & bottom
┌─────────────┐│   No gap!
│             ││
│  "          ││ ← Large mark (180px)
│  Quote text ││ ← Proper padding
│             ││
└─────────────┘╯
```

---

## 🎯 Responsive Sizing

### Quote Mark Sizes:
| Breakpoint | Size | Status |
|-----------|------|--------|
| Mobile (<1024px) | 120px | ✅ Readable |
| Medium (1024px) | 120px | ✅ Balanced |
| Desktop (1440px+) | 180px | ✅ Figma |

### Avatar Heights:
| Breakpoint | Height | Width | Ratio |
|-----------|--------|-------|-------|
| Mobile | 600px | 100% | Fluid |
| Tablet | 450px | 300px | ~1.5:1 |
| Medium | 240px | 240px | 1:1 |
| Desktop | 315px | 336px | ~0.94:1 |

### Quote Padding:
| Breakpoint | Padding | Status |
|-----------|---------|--------|
| Mobile | 60px 20px 24px 20px | ✅ |
| Medium | 60px 20px 24px 20px | ✅ |
| Desktop | 84px 28px 33px 28px | ✅ Figma |

---

## 🎨 CSS Details

### Complete Desktop (1440px+) Styles:

```css
@media (min-width: 1440px) {
  .artist-detail-left {
    gap: 0; /* Connected */
  }

  .artist-portrait {
    width: 336px;
    height: 315px;
    border-radius: 12px 12px 0 0; /* Rounded top */
  }

  .artist-quote {
    padding: 84px 28px 33px 28px;
    border-radius: 0 0 12px 12px; /* Rounded bottom */
    position: relative;
    background: rgba(200, 147, 44, 0.1);
  }

  .artist-quote__mark {
    font-family: 'Big Caslon', serif;
    font-size: 180px;
    color: #6B2128;
    position: absolute;
    top: 33px;
    left: 28px;
    line-height: 1;
    margin: 0;
  }

  .artist-quote__text {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    line-height: 1.8;
    color: #2e2e2e;
  }
}
```

---

## ✅ Files Changed

### `/src/pages/ArtistDetailPage/ArtistDetailPage.css`

**Lines Modified:**
1. ~178-183: Added `border-radius: 12px` to base avatar
2. ~207-228: Updated quote box with:
   - Position relative
   - Better padding
   - Rounded bottom corners
   - Absolute positioned quote mark
3. ~492-518: Medium breakpoint (1024px):
   - No gap
   - Rounded corners
   - Adjusted sizes
4. ~582-606: Desktop breakpoint (1440px+):
   - Figma exact specs
   - 180px quote mark
   - 315px avatar height
   - Perfect padding

---

## 🧪 Testing Checklist

### Visual Checks:
- [ ] Avatar has rounded top corners (12px)
- [ ] Quote has rounded bottom corners (12px)
- [ ] No gap between avatar and quote (connected)
- [ ] Quote mark is large and dramatic (180px on desktop)
- [ ] Quote mark is positioned top-left (33px/28px)
- [ ] Quote text has good spacing (padding 84px top)
- [ ] Looks like one cohesive card

### Responsive:
- [ ] Mobile: Reasonable sizes, readable
- [ ] Tablet: Smooth transition
- [ ] 1024px: Connected, balanced
- [ ] 1440px+: Matches Figma exactly

### Details:
- [ ] Grayscale filter on avatar image
- [ ] Gold tint background on quote
- [ ] Big Caslon font for quote mark
- [ ] Inter font for quote text
- [ ] Line height 1.8 for text

---

## 🎯 Expected Result

### At 1440px (Desktop):

```
┌─────────── 336px ───────────┐
│                             │╮
│        Avatar Image         ││ 315px
│        (Grayscale)          ││
│                             │╯
├─────────────────────────────┤ No gap!
│                             │╮
│  "  ← 180px quote mark      ││
│     at (33px, 28px)         ││
│                             ││
│  Quote text (20px)          ││
│  Line height 1.8            ││
│                             ││
│                             │╯
└─────────────────────────────┘
  ↑ Gold tint background
  ↑ Rounded corners (12px)
```

---

## 🚀 Deployment

Changes ready to test:

```
Server: http://localhost:3001/
Test URL: http://localhost:3001/artists/c63e642b-2108-41f9-8bf3-78f8cddfcc43

Hard refresh: Cmd + Shift + R (Mac) / Ctrl + Shift + R (Windows)
```

---

## 🎉 Benefits

### 1. **Matches Figma Design**
- Exact dimensions
- Proper spacing
- Rounded corners
- Connected layout

### 2. **More Dramatic Quote**
- Large quote mark (180px)
- Absolute positioning
- Professional appearance
- Draws attention

### 3. **Cohesive Card Design**
- No gap between avatar and quote
- Rounded corners create unity
- One visual unit
- Better composition

### 4. **Better Proportions**
- Avatar height reduced to 315px
- Better aspect ratio
- More balanced layout
- Matches design intent

---

**Fixed**: November 23, 2025  
**Figma**: Node 243-1572  
**Key Changes**: Border radius, quote mark size/position, connected layout  
**Status**: ✅ Matches Figma Design

