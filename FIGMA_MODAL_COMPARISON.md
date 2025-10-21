# Figma Modal Design Comparison

## Node: Desktop - 3 (4:477)

**URL:** https://www.figma.com/design/Qkya9H3MyyVlsqXyMumWXF/Art---Venture-Foundation?node-id=4-477&m=dev

---

## 🎨 FIGMA DESIGN SPECS

### **Layout**

- **Modal Container:**
  - Background: `rgba(13, 13, 13, 0.75)` (dark backdrop with blur)
  - Backdrop filter: `blur(18px)`
  - Mix-blend-mode: `multiply`

### **Close Button**

- Position: `top: 60px, right: 80px`
- Size: `60px × 60px`
- Background: `white`
- Border radius: `30px` (fully rounded)
- Padding: `18px`
- Shadow: `0px 4px 4px 0px rgba(0,0,0,0.05)`
- Icon: X-close (24px)

### **Content Container**

- Position: Centered horizontally, `top: 106px`
- Layout: Flex row with `gap: 46px`

### **Image Section**

- Width: `486px`
- Height: `690px`
- Border radius: `20px`
- Object-fit: `cover`
- Object-position: `50% 50%`

### **Text Section**

- Width: `494px`
- Height: `690px`
- Display: Flex column
- Justify: `space-between`

### **Title**

- Font: `Inter Bold`
- Size: `24px`
- Line-height: `2`
- Color: `white`
- Text: "Lorem ipsum dolor sit amet consectetur."

### **Description**

- Font: `Inter Regular`
- Size: `16px`
- Line-height: `1.55`
- Color: `white`
- Gap from title: `28px`

### **Author Card** (Bottom section)

- Width: `494px`
- Height: `124px`
- Background: `#393939` (dark gray)
- Border radius: `10px`
- Padding: `20px`
- Layout: Flex column with `gap: 16px`

**Author Info:**

- Avatar: `50px × 50px` (circular)
- Name: "NGUYEN NAM ARTIST" (Inter Bold, 14px)
- Contact: "namartist@gmail.com - 0908xxxxxxx" (Inter Regular, 12px)
- Social icons: 16px × 16px, gap: 24px

**More Button:**

- Text: "More" (Inter Regular, 12px)
- Icon: Chevron down (16px)
- Gap: 12px

---

## ⚠️ KEY DIFFERENCES FROM CURRENT IMPLEMENTATION

### **1. Backdrop Styling** ❌

**Figma:**

```css
background: rgba(13, 13, 13, 0.75);
backdrop-filter: blur(18px);
mix-blend-mode: multiply;
```

**Current Implementation:**

```css
background: rgba(0, 0, 0, 0.6);
/* No backdrop-filter */
/* No mix-blend-mode */
```

**Action Required:** Add backdrop blur and darker background

---

### **2. Close Button Position & Style** ❌

**Figma:**

- Position: Fixed `top: 60px, right: 80px`
- Size: `60px × 60px`
- Fully rounded (`border-radius: 30px`)
- White background with shadow

**Current Implementation:**

- Position: Absolute inside modal container
- Size: `40px × 40px`
- Smaller, simpler style

**Action Required:** Update close button styling and position

---

### **3. Text Colors** ❌

**Figma:**

- All text is **WHITE** on dark backdrop

**Current Implementation:**

- Text uses dark colors on light background

**Action Required:** Update text colors to white

---

### **4. Author Card Component** ❌ **MISSING**

**Figma:**

- Dark gray card (`#393939`)
- Avatar + Name + Contact
- Social icons
- "More" dropdown button

**Current Implementation:**

- Not included in ContentModal

**Action Required:** Add optional author card prop

---

### **5. Modal Background** ❌

**Figma:**

- Modal content has **NO white background**
- Content floats on dark backdrop

**Current Implementation:**

- Modal has white background (`var(--color-bg-main)`)

**Action Required:** Add dark variant option

---

## ✅ WHAT MATCHES

1. ✅ Image dimensions: `486px × 690px`
2. ✅ Text width: `494px`
3. ✅ Gap between image and text: `46px` (close to our `var(--spacing-8)`)
4. ✅ Border radius on image: `20px`
5. ✅ Responsive behavior (our implementation)
6. ✅ ESC and click-outside to close (our implementation)

---

## 🔧 RECOMMENDED UPDATES

### **Priority 1: HIGH (Visual Accuracy)**

1. **Add Dark Variant**

```typescript
interface ContentModalProps {
  // ...existing props
  variant?: "light" | "dark"; // NEW
  showAuthorCard?: boolean; // NEW
  authorData?: AuthorCardData; // NEW
}
```

2. **Update Backdrop Styling**

```css
.content-modal-backdrop {
  background: rgba(13, 13, 13, 0.75);
  backdrop-filter: blur(18px);
  mix-blend-mode: multiply;
}
```

3. **Add Dark Variant Styles**

```css
.content-modal--dark {
  background: transparent;
}

.content-modal--dark .content-modal__title,
.content-modal--dark .content-modal__description {
  color: white;
}
```

4. **Update Close Button**

```css
.content-modal__close {
  position: fixed;
  top: 60px;
  right: 80px;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background: white;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.05);
}
```

---

### **Priority 2: MEDIUM (Author Card)**

5. **Create AuthorCard Sub-component**

```typescript
interface AuthorCardData {
  avatar: string;
  name: string;
  email: string;
  phone: string;
  socialLinks?: {
    facebook?: string;
    instagram?: string;
  };
}
```

---

### **Priority 3: LOW (Polish)**

6. **Fine-tune Typography**

- Title: 24px (currently using h3 variant)
- Description: 16px with line-height 1.55

7. **Exact Spacing**

- Top positioning: 106px from top
- Gap between sections: 28px

---

## 📊 IMPLEMENTATION STATUS

| Feature           | Figma        | Current          | Status        |
| ----------------- | ------------ | ---------------- | ------------- |
| **Layout**        | Side-by-side | Side-by-side     | ✅ Match      |
| **Image Size**    | 486×690px    | 486×690px        | ✅ Match      |
| **Text Width**    | 494px        | 494px            | ✅ Match      |
| **Border Radius** | 20px         | var(--radius-md) | ✅ Match      |
| **Backdrop**      | Dark blur    | Simple dark      | ⚠️ Needs blur |
| **Text Color**    | White        | Dark             | ❌ Different  |
| **Background**    | Transparent  | White            | ❌ Different  |
| **Close Button**  | 60px fixed   | 40px absolute    | ⚠️ Smaller    |
| **Author Card**   | Dark card    | N/A              | ❌ Missing    |
| **Social Icons**  | Yes          | No               | ❌ Missing    |
| **More Button**   | Dropdown     | N/A              | ❌ Missing    |

---

## 💡 DECISION

### **Option A: Create Separate "Artist Modal" Component**

- Keep current `ContentModal` for general use
- Create new `ArtistModal` specifically for Figma design
- **Pros:** Clean separation, no breaking changes
- **Cons:** Code duplication

### **Option B: Add Dark Variant to ContentModal**

- Extend current component with `variant` prop
- Add optional `authorCard` feature
- **Pros:** Single component, flexible
- **Cons:** More complex component

### **Option C: Use Current as-is**

- Current implementation works well
- Figma design is specific to one use case
- **Pros:** No extra work
- **Cons:** Not pixel-perfect to Figma

---

## 🎯 RECOMMENDATION

**Use Option B: Add Dark Variant**

**Reasons:**

1. Maintains single source of truth
2. Adds flexibility for future designs
3. Backward compatible (default to light)
4. Author card is optional feature

**Implementation Time:** ~1-2 hours

---

## 📝 NEXT STEPS

**If you want pixel-perfect Figma match:**

1. Add dark variant prop
2. Update backdrop styling with blur
3. Create AuthorCard sub-component
4. Update close button styling
5. Test both light and dark variants

**If current implementation is acceptable:**

1. Document the differences
2. Use current ContentModal as-is
3. Create separate ArtistModal if needed later

---

**Generated:** October 21, 2025  
**Last Updated:** October 21, 2025
