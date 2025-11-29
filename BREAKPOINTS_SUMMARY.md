# 📊 Grid Calculations - Breakpoints Summary

## 🔧 Latest Fix (v2)

**What changed:**
- Added **1920px breakpoint** (Ultra)
- Fixed **1440-1919px range** (was using fixed 1064px, now dynamic)
- All breakpoints now use **dynamic width calculation** (viewport - padding)

---

## 📐 Complete Breakpoints Table

| Breakpoint | Range | Padding (each side) | Total Padding | Columns | Example Width | Column Width |
|------------|-------|---------------------|---------------|---------|---------------|--------------|
| **Mobile** | < 768px | 16px | 32px | 1 | 390px | 358px |
| **Tablet** | 768-1023px | 40px | 80px | 2 | 768px | 332px |
| **Desktop** | 1024-1439px | 60px | 120px | 2 | 1280px | 568px |
| **Wide** | 1440-1919px | 188px | 376px | 2 | 1600px | 600px ⚠️ |
| **Ultra** | ≥ 1920px | 220px | 440px | 2 | 1920px | 728px ⚠️ |

⚠️ = Fixed in v2

---

## 🧮 Formula

### Mobile (1 column)
```javascript
columnWidth = viewportWidth - 32
```

### All Others (2 columns)
```javascript
columnWidth = (viewportWidth - totalPadding - 24) / 2
//                                         ↑
//                                    column gap
```

---

## 🎯 Critical Test Cases

### ✅ Must Pass

1. **1024px** (Desktop start)
   - columnWidth = 440px
   - Padding changes from 80px → 120px

2. **1440px** (Wide start) ⚠️ PREVIOUSLY WRONG
   - columnWidth = 520px
   - Padding changes from 120px → 188px
   - Now uses dynamic width (not fixed 1064px)

3. **1600px** (Wide middle) ⚠️ YOUR BUG REPORT
   - columnWidth = 600px
   - Should be larger than 1440px
   - No layout shift!

4. **1920px** (Ultra start) ⚠️ NEW
   - columnWidth = 728px
   - Padding changes from 188px → 220px

---

## 📊 Visual Comparison

### Before Fix (1600px)
```
CSS says: padding 188px × 2 = 376px
JS calculated: (1064 - 24) / 2 = 520px ❌

Result: Column width TOO SMALL
→ rowSpan calculated for 520px width
→ Actual width is 600px
→ LAYOUT SHIFT when image loads!
```

### After Fix (1600px)
```
CSS says: padding 188px × 2 = 376px
JS calculates: (1600 - 376 - 24) / 2 = 600px ✅

Result: Column width MATCHES
→ rowSpan calculated for 600px width
→ Actual width is 600px
→ No layout shift! ✅
```

---

## 🧪 Quick Test Commands

### In Browser Console

```javascript
// Test current viewport
const vw = window.innerWidth;
console.log('Viewport:', vw);

// Calculate expected column width
let cw;
if (vw < 768) cw = vw - 32;
else if (vw < 1024) cw = (vw - 80 - 24) / 2;
else if (vw < 1440) cw = (vw - 120 - 24) / 2;
else if (vw < 1920) cw = (vw - 376 - 24) / 2;
else cw = (vw - 440 - 24) / 2;

console.log('Expected columnWidth:', cw.toFixed(2) + 'px');

// Check actual grid
const grid = document.querySelector('.collection-page__grid');
const cols = window.getComputedStyle(grid).gridTemplateColumns;
console.log('Actual columns:', cols);
```

---

## 🔍 Debugging Tips

### If you see layout shift at specific width:

1. **Check current viewport:**
   ```javascript
   window.innerWidth
   ```

2. **Check which breakpoint:**
   - < 768: Mobile
   - 768-1023: Tablet
   - 1024-1439: Desktop
   - 1440-1919: Wide ← Most likely issue
   - ≥ 1920: Ultra

3. **Verify padding in DevTools:**
   - Inspect `.collection-page__content`
   - Check computed padding-left and padding-right
   - Should match table above

4. **Compare calculated vs actual column width:**
   - Run debug script
   - Check console logs
   - Look for mismatch

---

## 📝 Common Issues

### Issue: "Works at 1440px but breaks at 1600px"
**Cause:** Old code used fixed 1064px container for all ≥1440px
**Fix:** Now uses dynamic calculation (viewport - padding) for each range
**Status:** ✅ FIXED in v2

### Issue: "Layout shift at 1920px"
**Cause:** Missing Ultra breakpoint (220px padding)
**Fix:** Added 1920px+ breakpoint with 440px total padding
**Status:** ✅ FIXED in v2

### Issue: "Artworks too large at 4K (2560px+)"
**Note:** This is expected! MAX_ROWS cap (100 rows = 1000px) prevents extreme sizes
**Status:** ✅ Working as designed

---

## 🚀 Testing Priority

Test in this order:

1. ✅ **1600px** (your bug report) - HIGHEST PRIORITY
2. ✅ **1920px** (new breakpoint)
3. ✅ **1440px** (changed from fixed to dynamic)
4. ✅ **1024px** (previous fix verification)
5. ✅ **768px** (previous fix verification)
6. ⭕ **2560px** (4K, optional but nice to have)

---

## 📸 Expected Results

### At 1600px (Wide range)
```
✅ columnWidth: 600px
✅ 2 columns layout
✅ 188px padding each side
✅ Artworks larger than at 1440px
✅ No layout shift when images load
✅ Smooth scrolling
```

### At 1920px (Ultra range)
```
✅ columnWidth: 728px
✅ 2 columns layout
✅ 220px padding each side
✅ Very large artworks
✅ May hit MAX_ROWS (1000px) for tall images
✅ Beautiful presentation
```

---

**Last Updated:** Now (v2 fix)
**Files Changed:**
- ✅ `src/pages/CollectionPage/utils/gridCalculations.ts`
- ✅ `GRID_CALCULATIONS_TEST_PLAN.md`
- ✅ `DEBUG_GRID_HELPER.js`

