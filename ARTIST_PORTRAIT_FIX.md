# ✅ Artist Portrait Placeholder - Fixed Height

**Issue**: Portrait placeholder co lại/ngắn lại khi content ít  
**Solution**: Set fixed height cho placeholder giống như portrait image

---

## 🔧 Changes Made

### File: `ArtistDetailPage.css`

Added CSS cho `.artist-portrait-placeholder`:

```css
/* Placeholder for missing portrait */
.artist-portrait-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #6B2128 0%, #8B3138 100%);
  font-family: 'Big Caslon', serif;
  font-size: 80px;
  font-weight: 700;
  color: #ffffff;
  text-transform: uppercase;
}
```

### Responsive Sizes:

| Breakpoint | Portrait Height | Placeholder Font Size |
|------------|----------------|----------------------|
| Mobile (320px+) | 300px | 80px |
| Tablet (768px+) | 350px | 80px |
| Desktop (1024px+) | 400px | 80px |
| Wide (1440px+) | **315px** (Figma) | **120px** |

---

## ✅ Result

### Before:
```
Portrait co lại khi không có content
→ Layout shift/jump khi navigate
```

### After:
```
Portrait LUÔN có chiều cao cố định:
- Mobile: 300px
- Tablet: 350px  
- Desktop: 400px
- Wide: 315px (Figma spec)

→ Consistent layout, no shift
```

---

## 🎨 Visual

### Placeholder Style:
```
┌─────────────┐
│             │
│             │
│      A      │  ← Gradient background
│             │     Big Caslon font
│             │     80px (mobile) → 120px (desktop)
└─────────────┘
     315px height (desktop)
```

### Colors:
- Background: Gradient `#6B2128` → `#8B3138`
- Text: White `#ffffff`
- Font: Big Caslon (serif)

---

## ✅ Complete

- ✅ Fixed height cho placeholder
- ✅ Responsive font sizes
- ✅ Gradient background (brand colors)
- ✅ Consistent với design system
- ✅ No layout shift

**Status**: Ready to test!

**Test URL**: http://localhost:5173/artists/c63e642b-2108-41f9-8bf3-78f8cddfcc43

