# ⚡ Quick Test Guide - Grid Calculations Fix v2

## 🎯 What Was Fixed

**Problem:** Layout shift at screens 1440px-1920px (especially 1600px)

**Root Cause:** 
- Old code used **fixed 1064px container** for all ≥1440px
- CSS actually uses **dynamic width with 188px padding** for 1440-1919px
- Missing **1920px breakpoint** (220px padding)

**Solution:**
- ✅ Added proper 1440-1919px range (dynamic width, 188px padding)
- ✅ Added 1920px+ range (dynamic width, 220px padding)
- ✅ All breakpoints now calculate correctly

---

## ⚡ Fast Test (3 minutes)

### 1. Start Dev Server
```bash
npm start
```

### 2. Open Chrome DevTools
- Press `F12`
- Press `Cmd+Shift+M` (responsive mode)

### 3. Test These 3 Widths

#### A. 1440px
```
Set width: 1440
Refresh: Cmd+R
Check console: columnWidth should be 520
✅ Pass if no layout shift
```

#### B. 1600px ⚠️ YOUR BUG
```
Set width: 1600
Refresh: Cmd+R
Check console: columnWidth should be 600
✅ Pass if no layout shift
```

#### C. 1920px
```
Set width: 1920
Refresh: Cmd+R
Check console: columnWidth should be 728
✅ Pass if no layout shift
```

---

## 📊 Expected Console Output

### At 1600px (Should see this):
```
Artwork 0: {
  title: "...",
  imageWidth: 800,
  imageHeight: 1200,
  aspectRatio: "1.50",
  rowSpan: 92,
  expectedHeight: 920,
  columnWidth: 600  ← KEY: Should be 600!
}
```

### If You See Wrong Values:
```
columnWidth: 520  ← ❌ OLD BUG (means fix didn't apply)
```

**Fix:** Hard refresh `Cmd+Shift+R`

---

## 🐛 Debug Helper (Optional)

Copy this into console:

```javascript
// Paste DEBUG_GRID_HELPER.js content or run:
const vw = window.innerWidth;
let cw;
if (vw < 768) cw = vw - 32;
else if (vw < 1024) cw = (vw - 80 - 24) / 2;
else if (vw < 1440) cw = (vw - 120 - 24) / 2;
else if (vw < 1920) cw = (vw - 376 - 24) / 2;
else cw = (vw - 440 - 24) / 2;
console.log(`${vw}px → columnWidth: ${cw.toFixed(0)}px`);
```

---

## ✅ Success Criteria

### Visual Check:
- [ ] No "jump" when images load
- [ ] Spacing even between artworks (24px)
- [ ] Artworks get progressively larger: 1440px < 1600px < 1920px
- [ ] Grid looks balanced

### Console Check:
- [ ] 1440px → columnWidth: 520px
- [ ] 1600px → columnWidth: 600px
- [ ] 1920px → columnWidth: 728px

---

## 🔥 Comprehensive Test (10 minutes)

Test all breakpoints:

```
✓ 390px  → 358px (mobile)
✓ 768px  → 332px (tablet start)
✓ 1024px → 440px (desktop start)
✓ 1280px → 568px (desktop)
✓ 1440px → 520px (wide start) ⚠️
✓ 1600px → 600px (wide) ⚠️ CRITICAL
✓ 1920px → 728px (ultra start) ⚠️
✓ 2560px → 1048px (4K) ⚠️
```

---

## 🚨 If Still Broken

### 1. Verify File Was Updated
```bash
cat src/pages/CollectionPage/utils/gridCalculations.ts | grep "1920"
```
Should see: `if (viewportWidth < 1920)`

### 2. Check Browser Cache
- Hard refresh: `Cmd+Shift+R`
- Or clear cache in DevTools Network tab

### 3. Check Console for Errors
- Look for TypeScript errors
- Check if file compiled

### 4. Restart Dev Server
```bash
# Ctrl+C to stop
npm start  # Restart
```

---

## 📸 Before/After Visual

### BEFORE (1600px) ❌
```
[Image placeholder with small size]
↓ Image loads
[JUMP! Image larger than expected]
← Layout shift visible
```

### AFTER (1600px) ✅
```
[Correct placeholder size]
↓ Image loads
[Image fills placeholder perfectly]
← No movement!
```

---

## 💡 Pro Tips

1. **Use "Slow 3G" throttling** to see loading behavior clearly
2. **Watch first 3 artworks** (they log to console)
3. **Scroll slowly** to trigger lazy loading
4. **Resize smoothly** to test all breakpoints

---

## 📞 Report Results

If working:
- ✅ "All tests pass at 1440, 1600, 1920px"

If broken:
- ❌ "Layout shift at [width]px"
- Include console screenshot
- Include columnWidth value

---

**Good luck! 🚀**

