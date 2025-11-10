# Footer Comparison: Current vs Figma

## 📊 **COMPARISON @ 1440px**

### **Background & Colors**
| Property | Current | Figma | Status |
|----------|---------|-------|--------|
| Background | White | `rgba(200,147,44,0.1)` (beige/gold) | ❌ Needs update |
| Text Color | Default | `#2E2E2E` | Need to verify |
| Padding | Need to check | `36px` top/bottom, `188px` left/right | ❌ Needs update |

### **Layout Structure**
| Element | Current | Figma | Status |
|---------|---------|-------|--------|
| **Main Title** | "Art & Venture Foundation" | "Arts & Venture Foundation (AVF)" | ❌ Text different |
| **Address** | 1 line (HCM) | 2 addresses (Hanoi locations) | ❌ Missing address |
| **Email** | ArtVenture@gmail.com | info@avfoundation.com.vn | ❌ Different email |
| **Social Icons** | Facebook, Instagram, Twitter (3 icons) | Facebook, Instagram, Twitter, **TikTok** (4 icons) | ❌ Missing TikTok |

### **Sections**
| Section | Current | Figma | Status |
|---------|---------|-------|--------|
| Who We are | ✅ Has "About us" link | ✅ Has "About us" (underlined) | ⚠️ Needs underline |
| Other information | ✅ Has 3 links | ✅ Has 3 links (all underlined) | ⚠️ Needs underline |
| Links lowercase | Not all | All lowercase | ❌ Needs fix |

### **Spacing & Gap**
| Element | Current | Figma | Action |
|---------|---------|-------|--------|
| Section gap (top to bottom) | Unknown | `227px` | Need to measure & update |
| Title to contact gap | Unknown | `13px` | Need to update |
| Contact to social gap | Unknown | Based on layout | Need to update |
| Social icons gap | Unknown | `24px` | Need to update |
| Sections vertical gap | Unknown | `56px` between main sections | Need to update |

### **Watermark/Logo**
| Element | Current | Figma | Status |
|---------|---------|-------|--------|
| Large background logo | ✅ Has faded logo | ✅ Has at `opacity: 0.02` | ✅ Check opacity |
| Position | Right side | Right side (`left: 720px, top: -28px`) | Need to verify |

---

## 🔧 **CHANGES NEEDED:**

### 1️⃣ **Background Color**
```css
background: rgba(200, 147, 44, 0.1); /* Beige/gold tint */
```

### 2️⃣ **Padding**
```css
padding: 36px 188px; /* Figma spec @ 1440px */
```

### 3️⃣ **Content Updates**
- **Title:** "Art & Venture Foundation" → "Arts & Venture Foundation (AVF)"
- **Addresses:** 
  - Add: "5/F Building 112 Tu Hoa, Tay Ho, Hanoi"
  - Add: "25/F D' Le Roi Soleil, 59 Xuan Dieu, Tay Ho, Hanoi"
  - Remove HCM address or keep if needed
- **Email:** "ArtVenture@gmail.com" → "info@avfoundation.com.vn"
- **Add TikTok icon**

### 4️⃣ **Typography**
- Title: `18px`, `font-weight: 500`, `line-height: 1.5`
- Body text: `16px`, `line-height: 2`
- All "Other information" links: **lowercase** + **underlined**

### 5️⃣ **Spacing**
- Title to contact: `13px`
- Contact section: Each line `line-height: 2`
- Contact to social: Calculate from layout
- Social icons gap: `24px`
- Main section to sections below: `56px`
- Sections group to copyright: `227px`

### 6️⃣ **Social Icons**
- Size: `16px × 16px`
- Gap: `24px`
- Add TikTok icon

---

## 📁 **ASSETS NEEDED:**

Upload to `/public/images/footer/`:

1. ✅ **TikTok icon** (SVG, 16x16px, black)
2. ✅ **Facebook icon** (if replacing current)
3. ✅ **Instagram icon** (if replacing current)
4. ✅ **X/Twitter icon** (if replacing current)
5. ✅ **Background logo** (if updating - already exists at `/images/logo/av-logo.svg`)

---

## 📝 **NEXT STEPS:**

1. User uploads social media icons to `/public/images/footer/`
2. Update Footer.tsx with new content
3. Update Footer.css with Figma spacing and colors
4. Test @ 1440px breakpoint
5. Verify with Figma design

**Status:** ⏳ Waiting for user to upload assets

