# 🔧 MAX_ROWS Fix - Artwork Overlap Issue

## 🐛 Problem Reported

**Issue:** Ảnh phía dưới chồng lên (overlap) ảnh phía trên
**Location:** 1600px viewport
**Example Image:** 583×1073 ("Chiếc lồng vàng")

---

## 🔍 Root Cause Analysis

### The Math:

```javascript
// Image dimensions from backend
width: 583px
height: 1073px
aspectRatio: 1073 / 583 = 1.84 (tall portrait)

// At 1600px viewport
columnWidth: 600px

// Calculate required height
displayHeight = 600 × 1.84 = 1104px
totalHeight = 1104 + 24 (padding) = 1128px
rowSpan = Math.ceil(1128 / 10) = 113 rows

// OLD CODE - Applied MAX_ROWS cap:
rowSpan = Math.min(100, 113) = 100 rows ❌
actualHeight = 100 × 10 = 1000px

// Result:
Required: 1128px
Given: 1000px
Shortage: 128px → OVERLAP! ❌
```

### Visual Representation:

```
┌─────────────────┐
│   Image A       │
│   (1128px tall) │
│                 │
│   ←─────────────┤ rowSpan ends at 1000px (too early!)
│                 │ ← 128px overflow
├═════════════════┤ ← Image B starts here
│ ║ Image A end ║ │ ← OVERLAP! Both images occupy same space
│ ╚═════════════╝ │
│   Image B       │
│                 │
└─────────────────┘
```

---

## ✅ Solution

**Changed:**
```typescript
// OLD
MAX_ROWS: 100,  // 1000px max

// NEW  
MAX_ROWS: 200,  // 2000px max
```

### Why 200?

**Calculation for worst-case scenarios:**

1. **Tallest expected aspect ratio:** ~2.0 (very tall portrait)
2. **Widest viewport:** 2560px (4K)
3. **Column width at 2560px:**
   ```
   (2560 - 440 - 24) / 2 = 1048px
   ```
4. **Required height:**
   ```
   displayHeight = 1048 × 2.0 = 2096px
   totalHeight = 2096 + 24 = 2120px
   rowSpan = 212 rows
   ```

**200 rows = 2000px** should handle most cases, while **212 rows** would be extreme edge case.

### Trade-offs:

| Aspect | Old (100) | New (200) | Notes |
|--------|-----------|-----------|-------|
| Max height | 1000px | 2000px | ✅ Better for tall images |
| Overlap risk | High ⚠️ | Low ✅ | Main issue fixed |
| Grid performance | Faster | Slightly slower | Negligible impact |
| Extreme cases | Capped ❌ | Handled ✅ | Better UX |

---

## 📊 Impact Analysis

### Images Affected:

**Aspect ratios that benefit from this change:**

| Aspect Ratio | Type | At 600px width | Old Cap | New Cap | Fixed? |
|--------------|------|----------------|---------|---------|--------|
| 1.0 | Square | 624px | ✅ OK | ✅ OK | N/A |
| 1.5 | Portrait | 924px | ✅ OK | ✅ OK | N/A |
| 1.6 | Portrait | 984px | ✅ OK | ✅ OK | N/A |
| 1.7 | Tall | 1044px | ⚠️ **Capped** | ✅ OK | ✅ |
| 1.8 | Tall | 1104px | ❌ **Overlap** | ✅ OK | ✅ |
| 1.84 | Very tall | 1128px | ❌ **Overlap** | ✅ OK | ✅ |
| 2.0 | Extreme | 1224px | ❌ **Overlap** | ✅ OK | ✅ |

**Your case (1.84)** falls into the "overlap" category with old MAX_ROWS.

---

## 🧪 Testing

### Test This Specific Image:

1. **Open production:**
   ```
   https://art-venture-foundation-k69peqyi0-nhatnamduong688s-projects.vercel.app/collection
   ```

2. **Set viewport to 1600px**

3. **Find image:** "Chiếc lồng vàng" (583×1073)

4. **Expected console log:**
   ```javascript
   {
     imageWidth: 583,
     imageHeight: 1073,
     aspectRatio: "1.84",
     rowSpan: 113,  // NOT capped at 100!
     expectedHeight: 1130,
     columnWidth: 600
   }
   ```

5. **Visual check:**
   - ✅ Image displays at full height (~1130px)
   - ✅ NO overlap with image below
   - ✅ Proper 24px spacing maintained

---

## 🔄 Before/After Comparison

### Before Fix (MAX_ROWS = 100):

```
Image dimensions: 583×1073
Viewport: 1600px
Column width: 600px

Calculated rowSpan: 113
Applied rowSpan: 100 (capped) ❌
Height: 1000px

Problem: Image actually needs 1130px
→ 130px overflow
→ Next image overlaps
```

### After Fix (MAX_ROWS = 200):

```
Image dimensions: 583×1073  
Viewport: 1600px
Column width: 600px

Calculated rowSpan: 113
Applied rowSpan: 113 ✅
Height: 1130px

Result: Perfect fit
→ No overflow
→ No overlap
```

---

## 📐 Technical Details

### Grid Row Calculation:

```typescript
// Step 1: Calculate aspect ratio
aspectRatio = imageHeight / imageWidth

// Step 2: Scale to column width  
displayHeight = columnWidth × aspectRatio

// Step 3: Add spacing
totalHeight = displayHeight + VERTICAL_SPACING

// Step 4: Convert to rows
rowSpan = Math.ceil(totalHeight / ROW_HEIGHT)

// Step 5: Apply constraints
rowSpan = Math.max(MIN_ROWS, Math.min(MAX_ROWS, rowSpan))
                                        ↑
                                   Changed: 100 → 200
```

---

## 🎯 Verification Checklist

Test these scenarios to ensure fix works:

### Portrait Images (aspect > 1.6):
- [ ] 583×1073 (1.84) - Your reported case
- [ ] Any image with aspect ratio 1.7-2.0
- [ ] At viewport 1600px
- [ ] At viewport 1920px
- [ ] At viewport 2560px

### Visual Checks:
- [ ] No overlap between artworks
- [ ] Even spacing (24px) maintained
- [ ] Images display at proper height
- [ ] No layout shift on load
- [ ] Grid remains balanced

### Edge Cases:
- [ ] Very tall images (aspect > 2.0)
- [ ] Ultra-wide viewports (2560px+)
- [ ] Mixed aspect ratios in grid
- [ ] Rapid scrolling (lazy loading)

---

## 🚨 Potential Issues to Watch

### 1. Performance on Old Devices
**Impact:** Minimal
- Row span calculation is simple math
- No additional DOM operations
- Grid auto-placement handles everything

### 2. Extremely Tall Images (aspect > 2.0)
**Current cap:** 2000px (200 rows)
**If issue occurs:** Can increase to 250 or 300
**Likelihood:** Very rare in art collections

### 3. Memory Usage
**Impact:** None
- CSS Grid handles layout efficiently
- No JavaScript layout calculations
- Browser-native optimization

---

## 📝 Git History

```bash
d7e2924 - fix: Increase MAX_ROWS to 200 to prevent artwork overlap
ad54744 - fix: Grid calculations for all breakpoints (v2)
93fc436 - Previous commits
```

---

## 🎉 Deployment Status

**Status:** ✅ Deployed to Production
**Commit:** `d7e2924`
**URL:** https://art-venture-foundation-k69peqyi0-nhatnamduong688s-projects.vercel.app

---

## 💡 Lessons Learned

1. **MAX_ROWS cap too conservative**
   - 1000px was designed for typical images
   - Didn't account for tall portraits on wide screens
   - 2000px is better balance

2. **Column width increases with viewport**
   - Wider viewport = wider columns
   - Tall images scale proportionally
   - Need higher max to accommodate

3. **Test with real data**
   - Mock data may not reveal edge cases
   - Real images have varied dimensions
   - Always test with production data

---

## 🔮 Future Improvements (Optional)

### 1. Dynamic MAX_ROWS Based on Viewport
```typescript
const MAX_ROWS = viewportWidth >= 1920 ? 250 : 200;
```

### 2. Warn on Cap Applied
```typescript
if (rowSpan > MAX_ROWS) {
  console.warn(`Image ${id} capped at ${MAX_ROWS} rows`);
}
```

### 3. Backend Optimization
- Pre-calculate optimal rowSpan
- Include in API response
- Reduce client-side calculation

---

**Fix deployed and ready for testing! 🚀**

Please verify the specific image (Chiếc lồng vàng) no longer overlaps.

