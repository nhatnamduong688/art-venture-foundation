# 🧪 Test Instructions for 1025px Layout

**URL**: `http://localhost:3005/artists/c63e642b-2108-41f9-8bf3-78f8cddfcc43`

---

## 🔍 How to Test at 1025px

### Method 1: Chrome DevTools Responsive Mode (RECOMMENDED)

1. **Open the URL** in Chrome:
   ```
   http://localhost:3005/artists/c63e642b-2108-41f9-8bf3-78f8cddfcc43
   ```

2. **Open DevTools**:
   - Press `F12` (Windows/Linux)
   - Or `Cmd + Option + I` (Mac)

3. **Toggle Device Toolbar** (Responsive Mode):
   - Click the device icon in DevTools toolbar
   - Or press `Ctrl + Shift + M` (Windows/Linux)
   - Or press `Cmd + Shift + M` (Mac)

4. **Set Width to 1025px**:
   - At the top of page, you'll see dimension controls
   - Click on the width field
   - Type: `1025`
   - Press Enter

5. **Check Layout**:
   - Look for avatar on the left (should be 240px)
   - Look for content on the right
   - Verify quote box under avatar
   - Check that everything is visible

---

### Method 2: Resize Browser Window

1. **Open URL** in Chrome

2. **Resize Window**:
   - Drag browser edge to make window narrower
   - Try to get close to 1025px width
   - Use ruler extensions if needed

3. **Check Current Width**:
   - Open Console (F12 → Console tab)
   - Type: `window.innerWidth`
   - Press Enter
   - Adjust until you see ~1025

---

## ✅ What to Check

### At 1025px Width:

#### Left Column:
- [ ] **Avatar visible**: 240px x 320px
- [ ] **Placeholder "A"** if no image
- [ ] **Quote box below avatar**:
  - [ ] Beige background
  - [ ] Quote mark (")
  - [ ] Default text visible

#### Right Column:
- [ ] **Name**: "Alix Aymé" (26px)
- [ ] **Bio**: Full paragraph visible
- [ ] **"1 tác phẩm"** visible
- [ ] **Tabs**: 6 tabs visible
- [ ] **Tab content**: "Tiểu Sử Chi Tiết" visible

#### Overall:
- [ ] Side-by-side layout (not stacked)
- [ ] 80px padding on both sides
- [ ] No content touching edges
- [ ] Everything readable
- [ ] No overflow or hidden content

---

## 📐 Expected Layout at 1025px

```
┌────────────────────────────────────────────┐
│ Sidebar │ 80px │ Left │ 40px │ Right │ 80px │
│  129px  │      │ 240  │      │ ~460  │      │
│         │      │  A   │      │ Alix  │      │
│         │      │      │      │ Aymé  │      │
│         │      │ Gap  │      │       │      │
│         │      │ 24px │      │ Bio   │      │
│         │      │      │      │       │      │
│         │      │ "    │      │ 1 tác │      │
│         │      │Quote │      │ phẩm  │      │
│         │      │      │      │       │      │
│         │      │      │      │ Tabs  │      │
│         │      │      │      │       │      │
│         │      │      │      │Content│      │
└────────────────────────────────────────────┘
```

---

## 🐛 Common Issues to Look For

### Issue 1: Content Missing
**Symptoms**: Right column empty or cut off
**Cause**: Grid calculation error
**Check**: DevTools → Elements → `.artist-detail-main` → Computed styles

### Issue 2: Stacked Layout
**Symptoms**: Avatar on top, content below (not side-by-side)
**Cause**: Breakpoint not triggered (width < 1024px)
**Check**: DevTools → Console → `window.innerWidth`

### Issue 3: Quote Missing
**Symptoms**: No quote box under avatar
**Cause**: Conditional rendering or CSS display: none
**Check**: DevTools → Elements → `.artist-quote` exists?

### Issue 4: Avatar Too Big
**Symptoms**: Avatar larger than 240px
**Cause**: Wrong breakpoint applied
**Check**: DevTools → Elements → `.artist-portrait` → Computed width

---

## 🔍 Debug with DevTools

### Check Grid Layout:
```javascript
// In Console
const main = document.querySelector('.artist-detail-main');
const styles = window.getComputedStyle(main);

console.log({
  gridTemplate: styles.gridTemplateColumns,
  gap: styles.gap,
  width: styles.width,
  maxWidth: styles.maxWidth
});

// Expected at 1025px:
// gridTemplate: "240px XXXpx" (where XXX is remaining space)
// gap: "40px"
```

### Check Avatar Size:
```javascript
// In Console
const avatar = document.querySelector('.artist-portrait');
const styles = window.getComputedStyle(avatar);

console.log({
  width: styles.width,
  height: styles.height
});

// Expected at 1025px:
// width: "240px"
// height: "320px"
```

### Check Window Size:
```javascript
// In Console
console.log({
  innerWidth: window.innerWidth,
  innerHeight: window.innerHeight,
  outerWidth: window.outerWidth
});

// Should see innerWidth: 1025 (or close)
```

---

## 📸 Take Screenshots

### For Comparison:
1. **At 1024px** (just before breakpoint)
2. **At 1025px** (just after breakpoint)
3. **At 1440px** (wide breakpoint)

### How to Screenshot:
- **Full Page**: DevTools → More tools → Full page screenshot
- **Visible**: DevTools → More tools → Capture screenshot
- **Element**: Right-click element → Capture node screenshot

---

## 🎯 Expected CSS at 1025px

### Container:
```css
.artist-detail-container {
  padding: 120px 80px 100px 80px; /* 80px sides */
}
```

### Grid:
```css
.artist-detail-main {
  grid-template-columns: 240px 1fr; /* Avatar + Content */
  gap: 40px;
  max-width: 100%; /* No restriction */
  margin-left: 0;
  margin-right: 0;
}
```

### Avatar:
```css
.artist-portrait {
  width: 240px;
  height: 320px;
}
```

### Quote:
```css
.artist-quote {
  width: 240px;
  padding: 24px 20px;
}
```

---

## 🚨 If Still Issues

### Check CSS File Updated:
```bash
# In terminal
cd /Users/duongnhatnam/Documents/av-frontend-test
grep -A5 "@media (min-width: 1024px)" src/pages/ArtistDetailPage/ArtistDetailPage.css | head -20
```

### Force Refresh:
1. **Clear Cache**: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
2. **Hard Reload**: DevTools → Network tab → Disable cache → Reload

### Check Applied Styles:
1. DevTools → Elements
2. Select `.artist-detail-main`
3. Look at Styles panel (right side)
4. Find `@media (min-width: 1024px)` section
5. Verify our changes are there

---

## 📝 What to Report Back

Please tell me:

1. **Window width shown**: What does `window.innerWidth` show?
2. **Grid template**: What is `gridTemplateColumns`?
3. **Avatar size**: What is avatar width/height?
4. **Layout**: Side-by-side or stacked?
5. **Content visible**: Can you see everything?
6. **Screenshot**: Can you share a screenshot?

---

## 🔄 If Changes Not Applied

### Possible Causes:
1. CSS file not saved
2. Dev server not restarted
3. Browser cache
4. Wrong file being served

### Solutions:
```bash
# Restart dev server
# Stop current (Ctrl+C)
cd /Users/duongnhatnam/Documents/av-frontend-test
yarn dev

# Then hard refresh browser (Cmd+Shift+R)
```

---

**Test URL**: http://localhost:3005/artists/c63e642b-2108-41f9-8bf3-78f8cddfcc43  
**Target Width**: 1025px  
**Expected**: Side-by-side, 240px avatar, everything visible  
**Date**: November 23, 2025

