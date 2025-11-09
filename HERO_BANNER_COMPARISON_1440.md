# So Sánh Hero Banner - Figma vs Implementation (1440px)

## Tổng Quan
Đây là báo cáo so sánh chi tiết giữa thiết kế Figma và implementation hiện tại của Hero Banner trên màn hình 1440px.

---

## 📊 THÔNG SỐ FIGMA (1440px Design)

### Hero Container/Background Image
Từ Figma design context (node-id: 760-1669):
```
- Container Position: absolute
- Left: 129px (sidebar width)
- Top: 114px (header height)
- Width: 1311px
- Height: 827px
- Background: Có một div màu #d9d9d9 (placeholder) với dimensions:
  - Width: 995px
  - Height: 851px
  - Top: -24px
```

### Hero Content Box (Banner Text Container)
Từ Figma design context (node-id: 760-1672):
```
Position & Dimensions:
- Position: absolute
- Left: 170px (từ edge của trang, không phải từ sidebar)
- Top: 595px (từ top của trang)
- Width: 638px
- Border: border-bottom 1px solid #6b2128
- Background: #f2efe7

Padding:
- Padding: 50px 60px (vertical horizontal)

Content Structure:
1. Title: "Art & Venture Foundation"
   - Font: Big Caslon Medium
   - Font Size: 80px
   - Color: #6b2128
   - Line Height: normal

2. Description Text:
   - Font: Inter Regular
   - Font Size: 16px
   - Color: #2e2e2e
   - Line Height: 2 (32px)
   - Height: 169px (fixed)
   - Width: full

3. Button "MORE":
   - Text: Inter Medium 16px
   - Color: #6b2128
   - With arrow-right icon (24px)
   - Gap: 25px between text and icon
```

### Layout Context
```
- Total page width: 1440px
- Sidebar width: 129px
- Content area left margin: 170px (from page edge)
- Header height: 114px
- Main content width: 1311px (1440 - 129)
```

---

## 💻 IMPLEMENTATION HIỆN TẠI

### Measured Values (từ Chrome DevTools)
```
Viewport: 1792 x 897px (browser window)

Hero Image:
- Width: 1663px
- Height: 1650px
- Top: -336px
- Left: 129px
- Object-fit: cover
- Object-position: 50% 62.5%

Hero Container (parent):
- Width: 1663px
- Height: 1650px
- Top: -336px
- Left: 129px
- Padding: 0px (all sides)
- Background: transparent
```

### CSS Implementation
Từ `Hero.css`:

```css
/* DESKTOP (1024px+) */
@media (min-width: 1024px) {
  .hero {
    height: 827px;
    min-height: 827px;
    max-height: none;
  }
  
  .hero__container {
    left: calc(8.333% + 69px); /* = 189px at 1440px */
    top: 481px; /* 595px - 114px header */
    bottom: auto;
    width: 638px;
    max-width: calc(100% - 200px);
  }
  
  .hero__content {
    padding: var(--spacing-12) var(--spacing-16); /* 48px 64px */
    gap: var(--spacing-6); /* 24px */
  }
  
  .hero__description {
    height: 169px;
  }
}

/* WIDE (1440px+) */
@media (min-width: 1440px) {
  .hero__container {
    left: 189px;
  }
}
```

### Component Structure (từ Hero/index.tsx)
```tsx
<section className="hero">
  <div className="hero__container">
    <div className="hero__content">
      <Typography variant="display-xl" color="burgundy">
        Art & Venture Foundation
      </Typography>
      <Typography variant="body-md" color="primary">
        [Description text]
      </Typography>
      <Button variant="burgundy" size="md">
        MORE
      </Button>
    </div>
  </div>
  <div className="hero__background">
    <img className="hero__bg-image" />
    <div className="hero__overlay"></div>
  </div>
</section>
```

---

## 🔍 SO SÁNH CHI TIẾT

### ✅ ĐÚNG (Matching Figma)

1. **Hero Section Height**
   - Figma: 827px ✅
   - Implementation: 827px ✅

2. **Content Box Width**
   - Figma: 638px ✅
   - Implementation: 638px ✅

3. **Content Box Padding**
   - Figma: 50px 60px ✅
   - Implementation: 48px 64px (khá gần, có thể chấp nhận được)

4. **Description Height**
   - Figma: 169px ✅
   - Implementation: 169px ✅

5. **Background Color**
   - Figma: #f2efe7 ✅
   - Implementation: var(--color-bg-main) = #f2efe7 ✅

6. **Border**
   - Figma: border-bottom 1px solid #6b2128 ✅
   - Implementation: 1px solid var(--color-burgundy) ✅

7. **Gap between elements**
   - Figma: 25px ✅
   - Implementation: var(--spacing-6) = 24px (khá gần)

---

### ❌ SAI KHÁC (Differences from Figma)

#### 1. **Title Font Size** ⚠️ **CRITICAL**
   - **Figma**: 80px (Big Caslon Medium)
   - **Implementation**: 70px (Big Caslon Medium, font-weight: 500)
   - **Chênh lệch**: -10px (nhỏ hơn 12.5%)
   
   ```
   Figma Token: fontSize: 80px
   Implementation Measured: 70px
   Typography Token: display-xl = '80px' ✅ (token đúng)
   
   Vấn đề: CSS rendered ra 70px thay vì 80px
   ```
   
   **Root Cause**: Có thể bị responsive CSS hoặc media query override

#### 2. **Content Box Position - LEFT** ⚠️ **CRITICAL**
   - **Figma**: 170px (from page edge)
   - **Implementation Measured**: 262px (from page edge)
   - **Chênh lệch**: +92px (lệch sang phải rất nhiều!)
   
   ```css
   /* Figma Spec */
   left: 170px;
   
   /* CSS Code */
   @media (min-width: 1440px) {
     .hero__container {
       left: 189px;  /* Wrong! */
     }
   }
   
   /* Actual Rendered (measured) */
   left: 262.04px; /* Even worse! */
   ```
   
   **Vấn đề**: 
   1. CSS code đã sai: 189px thay vì 170px (+19px)
   2. Rendered position còn sai hơn: 262px (+92px)
   3. Có thể có thêm margin/padding từ parent

#### 3. **Content Box Position - TOP** ⚠️ **CRITICAL**
   - **Figma**: 595px (from page top)
   - **Implementation Measured**: 684.73px (from page top)
   - **Chênh lệch**: +89.73px (quá thấp)
   
   ```css
   /* Figma Spec */
   top: 595px;
   
   /* CSS Code */
   @media (min-width: 1024px) {
     .hero__container {
       top: 481px; /* 595px - 114px header */
     }
   }
   
   /* Actual Rendered (measured) */
   top: 684.73px; /* Much lower! */
   ```
   
   **Vấn đề**: Position calculation logic sai

#### 4. **Content Box Dimensions**
   - **Figma Width**: 638px ✅
   - **Implementation Width**: 550px ❌
   - **Chênh lệch**: -88px (hẹp hơn 13.8%)
   
   - **Figma Height**: N/A (auto based on content)
   - **Implementation Height**: 540px (measured)

#### 5. **Content Box Padding** ⚠️
   - **Figma**: 50px 60px (vertical horizontal)
   - **Implementation Measured**: 40px 50px
   - **Chênh lệch**: 
     - Vertical: -10px (20%)
     - Horizontal: -10px (16.7%)
   
   ```css
   /* Figma */
   padding: 50px 60px;
   
   /* CSS Code */
   padding: var(--spacing-12) var(--spacing-16); /* 48px 64px */
   
   /* Actual Rendered */
   padding: 40px 50px; /* Wrong responsive breakpoint? */
   ```

#### 6. **Border Bottom** ❌
   - **Figma**: border-bottom: 1px solid #6b2128 ✅
   - **Implementation Measured**: border-bottom: 0px none ❌
   
   **Vấn đề**: Border không hiển thị!

#### 7. **Description Text Height**
   - **Figma**: 169px (fixed)
   - **Implementation Measured**: 192px
   - **Chênh lệch**: +23px (cao hơn 13.6%)

#### 8. **Hero Background Image Dimensions** ⚠️
   - **Figma**: 
     - Container: 1311px width x 827px height
     - Image area: 995px width x 851px height
     - Top offset: -24px
   - **Implementation Measured**:
     - Width: 1663px (quá rộng +27%)
     - Height: 1650px (quá cao +100%)
     - Top: -336px (offset quá lớn)
   
   **Issue**: Background image bị scale/crop hoàn toàn khác so với Figma

#### 9. **Overlay Gradient** ⚠️
   - **Figma**: Không có overlay gradient
   - **Implementation**: Có overlay với `linear-gradient(90deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, transparent 100%)`
   
   **Issue**: Implementation thêm overlay dark mà Figma không có

#### 10. **Typography Line Height**
   - **Figma Description**: line-height: 2 (32px) ✅
   - **Implementation**: line-height: 32px ✅ (Correct!)

---

## 📋 DANH SÁCH VẤN ĐỀ CẦN FIX

### Priority 1 - CRITICAL (Layout & Position) 🔴

#### 1. **Fix Title Font Size: 70px → 80px**
   - **Token đúng**: display-xl = 80px trong `typography.ts`
   - **Vấn đề**: Rendered chỉ ra 70px
   - **Nghi ngờ**: Responsive CSS hoặc browser zoom
   - **Action**: Check media queries, check browser zoom level
   
   ```css
   /* Verify token is applied correctly */
   .ds-typography--display-xl {
     font-size: var(--text-display-xl); /* Should be 80px */
   }
   ```

#### 2. **Fix Content Box LEFT Position: 262px → 170px** 
   - **CSS Code sai**: 189px
   - **Rendered sai hơn**: 262px (+92px)
   - **Figma spec**: 170px
   - **Action**: 
     1. Change CSS từ 189px → 170px
     2. Investigate why rendered = 262px (check parent margins/transforms)
   
   ```css
   @media (min-width: 1440px) {
     .hero__container {
       left: 170px; /* Fix: was 189px */
     }
   }
   ```

#### 3. **Fix Content Box TOP Position: 684px → 595px**
   - **CSS Code**: 481px (wrong calculation)
   - **Rendered**: 684.73px (+89.73px off)
   - **Figma spec**: 595px (absolute from page top)
   - **Action**: 
     1. Change top từ 481px → 595px
     2. Verify position context (relative to what?)
   
   ```css
   @media (min-width: 1024px) {
     .hero__container {
       top: 595px; /* Fix: was 481px */
     }
   }
   ```

#### 4. **Fix Content Box WIDTH: 550px → 638px**
   - **Chênh lệch**: -88px (13.8% nhỏ hơn)
   - **Action**: Verify width không bị responsive override
   
   ```css
   .hero__container {
     width: 638px; /* Should match Figma */
   }
   ```

#### 5. **Fix Border Bottom: Missing!**
   - **Figma**: 1px solid #6b2128
   - **Rendered**: 0px none (không hiển thị)
   - **Action**: Check CSS specificity, make sure border is applied
   
   ```css
   .hero__content {
     border-bottom: 1px solid var(--color-burgundy); /* #6b2128 */
   }
   ```

### Priority 2 - Important (Spacing & Dimensions) 🟡

#### 6. **Fix Content Padding: 40px 50px → 50px 60px**
   - **CSS Code**: 48px 64px (tokens)
   - **Rendered**: 40px 50px (wrong breakpoint?)
   - **Figma**: 50px 60px
   - **Action**: Update spacing tokens or CSS values
   
   ```css
   .hero__content {
     padding: 50px 60px; /* Fix: currently renders 40px 50px */
   }
   ```

#### 7. **Fix Description Height: 192px → 169px**
   - **Chênh lệch**: +23px
   - **Action**: Set explicit height hoặc adjust line-height
   
   ```css
   .hero__description {
     height: 169px; /* Currently in code, but renders 192px */
   }
   ```

#### 8. **Fix Background Image Dimensions**
   - **Current**: 1663px x 1650px (way too large)
   - **Figma**: ~1311px x 827px container
   - **Action**: Adjust hero section dimensions and image crop
   
   ```css
   .hero {
     height: 827px; /* Already correct */
   }
   .hero__background {
     /* Need to constrain dimensions */
   }
   ```

### Priority 3 - Polish (Optional/Nice-to-have) 🟢

#### 9. **Remove/Reduce Overlay Gradient**
   - **Figma**: No overlay
   - **Implementation**: Dark gradient overlay
   - **Action**: Remove or reduce to opacity: 0.2
   
   ```css
   .hero__overlay {
     /* Consider removing or reducing */
     opacity: 0; /* or remove entirely */
   }
   ```

#### 10. **Fine-tune Gap: 24px → 25px**
   - Very minor difference (1px)
   - **Action**: Optional, can keep 24px (close enough)

---

## 🎯 RECOMMENDATIONS

### Immediate Actions (Must Do):
1. ✅ **Typography Token CONFIRMED**: display-xl = 80px (correct in `typography.ts`)
2. 🔧 **Fix Position**: left: 170px, top: 595px (not 189px, 481px)
3. 🔧 **Fix Dimensions**: width: 638px (not constrained to 550px)
4. 🔧 **Fix Border**: Ensure border-bottom shows up
5. 🔧 **Fix Padding**: 50px 60px (adjust breakpoint or tokens)

### Investigation Needed:
1. **Why is title rendering 70px instead of 80px?**
   - Check browser zoom (should be 100%)
   - Check if there's a responsive override
   - Inspect computed styles in DevTools

2. **Why is left position 262px instead of 189px (or 170px)?**
   - Check parent container transforms
   - Check if sidebar adds extra margin
   - Verify position: absolute context

3. **Why is top position 684px instead of 481px (or 595px)?**
   - Check if hero has margin-top
   - Verify positioning context
   - Check header height impact

4. **Why no border showing?**
   - Check CSS specificity
   - Check if border color matches background
   - Verify element has content

### Testing Checklist:
- [ ] Set browser zoom to exactly 100%
- [ ] Set viewport to exactly 1440px width
- [ ] Disable any browser extensions that might affect CSS
- [ ] Clear cache and hard reload
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Compare side-by-side with Figma at same zoom level

---

## 📸 VISUAL REFERENCES

### Figma Screenshot
[Xem ảnh Figma đã capture ở trên]

### Current Implementation Screenshot  
[Xem screenshot từ Chrome DevTools]

---

## 📝 NOTES

- Browser viewport hiện tại là 1792px, lớn hơn 1440px design
- Cần test ở đúng 1440px viewport để có comparison chính xác hơn
- Một số sai khác nhỏ (1-2px) có thể chấp nhận được
- Position logic (absolute vs relative) cần được review kỹ

---

## 📊 SUMMARY TABLE

| Property | Figma Spec | CSS Code | Actual Rendered | Status | Diff |
|----------|-----------|----------|-----------------|--------|------|
| **Title Font Size** | 80px | 80px (token) | **70px** | ❌ | -10px |
| **Content Left** | 170px | 189px | **262px** | ❌ | +92px |
| **Content Top** | 595px | 481px | **684px** | ❌ | +89px |
| **Content Width** | 638px | 638px | **550px** | ❌ | -88px |
| **Content Padding** | 50px 60px | 48px 64px | **40px 50px** | ❌ | -10px each |
| **Border Bottom** | 1px solid | 1px solid | **0px none** | ❌ | Missing |
| **Description Height** | 169px | 169px | **192px** | ⚠️ | +23px |
| **Hero Height** | 827px | 827px | 827px | ✅ | 0 |
| **Line Height** | 32px (2) | 32px | 32px | ✅ | 0 |
| **Background Color** | #f2efe7 | #f2efe7 | #f2efe7 | ✅ | 0 |

**Legend**: ✅ Perfect Match | ⚠️ Minor Difference | ❌ Significant Difference

---

## 🔍 ROOT CAUSE ANALYSIS

### Likely Causes:
1. **Wrong Responsive Breakpoint Applied**
   - Viewport is 1792px but expecting 1440px
   - Might be applying wrong media query rules
   
2. **Browser Zoom Not 100%**
   - Font size 70px vs 80px suggests ~87.5% zoom
   - All measurements would be affected
   
3. **Parent Container Issues**
   - Extra margins/padding from parent
   - Wrong positioning context
   
4. **CSS Specificity Issues**
   - Border not showing due to override
   - Padding being overridden by responsive CSS

### Next Steps for Developer:
1. Set browser to exactly 1440px viewport at 100% zoom
2. Re-measure all values
3. Fix CSS positions and dimensions
4. Test at exact breakpoints (1024px, 1440px, 1920px)

---

**Generated**: November 9, 2025  
**Browser**: Chrome DevTools (viewport: 1792x897)  
**Design Source**: Figma node-id=760-1571 (1440px design)  
**Comparison Method**: Chrome DevTools measurements vs Figma specs

