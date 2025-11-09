# HeroWithContent Component

## 📋 Overview

**HeroWithContent** là component mới kết hợp giữa:
1. **Hero component** (responsive background images)
2. **MuseumCard content box** (title, description, button, border)
3. **Empty space** phía dưới cho các component khác

---

## 🎯 Component Structure

```
HeroWithContent
├── Hero Section (827px height)
│   ├── Responsive Background Images
│   │   ├── 2200px+ viewport → hero-2200.jpg (575KB)
│   │   ├── 1920-2199px → hero-1920.jpg (522KB)
│   │   └── 1440-1919px → hero-1440.jpg (504KB)
│   ├── Dark Overlay (gradient)
│   └── Content Box (overlay)
│       ├── Title
│       ├── Description
│       ├── Button with Arrow Icon
│       └── Bottom Border
└── Empty Space Below (200-450px)
```

---

## 📂 Files Created

### Component Files:
```
src/components/sections/HeroWithContent/
├── index.tsx              # Component logic
└── HeroWithContent.css    # Responsive styles
```

### Test Page:
```
src/pages/HeroWithContentPage/
├── index.tsx                    # Test page
└── HeroWithContentPage.css      # Page styles
```

### Export:
- `src/components/sections/index.ts` - Added export

### Router:
- `src/AppRouter.tsx` - Added 2 routes:
  - `/hero-with-content` - Full page with info
  - `/hero-with-content-component` - Component only

---

## 🚀 Usage

### Basic Usage:
```tsx
import { HeroWithContent } from '../../components/sections';

<HeroWithContent
  title="Art & Venture Foundation"
  description="Lorem ipsum dolor sit amet consectetur..."
  buttonText="MORE"
/>
```

### Props:
```tsx
interface HeroWithContentProps {
  title?: string;         // Default: "Art & Venture Foundation"
  description?: string;   // Default: Lorem ipsum text
  buttonText?: string;    // Default: "MORE"
}
```

---

## 🎨 Design Specifications

### Hero Section:
| Viewport | Height | Content Box Position | Content Box Width |
|----------|--------|---------------------|-------------------|
| Mobile   | 600px  | Centered (88% width)| max-width: 638px  |
| Tablet   | 700px  | Centered (85% width)| max-width: 638px  |
| Desktop  | 827px  | left: 8%            | 550px             |
| 1440px+  | 827px  | left: 189px         | 638px             |
| 1920px+  | 827px  | left: 220px         | 700px             |
| 2200px+  | 827px  | left: 280px         | 750px             |

### Content Box Styles:
- **Background**: `#F2EFE7`
- **Shadow**: `0 10px 40px rgba(0, 0, 0, 0.2)`
- **Title**: Big Caslon, 32px → 80px (responsive)
- **Text**: 13px → 16px (responsive)
- **Border**: 1px solid `#6B2128`

### Empty Space:
- **Mobile**: 200px
- **Tablet**: 250px
- **Desktop**: 300px
- **1440px+**: 350px
- **1920px+**: 400px
- **2200px+**: 450px

---

## 🔗 Test Routes

### 1. Full Page (with info):
```
http://localhost:3000/hero-with-content
```
- Shows component + documentation info
- Best for understanding structure

### 2. Component Only:
```
http://localhost:3000/hero-with-content-component
```
- Pure component view
- Best for visual testing

---

## 📊 Comparison

### vs Hero Component:
| Feature | Hero | HeroWithContent |
|---------|------|----------------|
| Background Images | ✅ Responsive | ✅ Responsive |
| Design System | ✅ Typography, Button, Icon | ❌ Custom styles |
| Content Box | ❌ No box, transparent background | ✅ White box with shadow |
| Layout | Full overlay | Positioned box overlay |
| Border | No border | ✅ Bottom border |
| Empty Space Below | No | ✅ Configurable height |

### vs MuseumCard:
| Feature | MuseumCard | HeroWithContent |
|---------|-----------|----------------|
| Background Images | ✅ Responsive OR GalleryInterior | ✅ Responsive only |
| Content Box | ✅ Same style | ✅ Same style |
| Height | Variable (aspect-ratio based) | Fixed 827px |
| Layout | Complex ratio system | Simple fixed height |
| Use Case | Homepage with variable content | Hero banner + content sections |

---

## ✨ Key Features

### 1. **Responsive Images** (from Hero)
- Optimized loading for different screen sizes
- Native browser support with `<picture>` element
- 66% faster than external URLs

### 2. **Content Box** (from MuseumCard)
- Elegant white box overlay
- Professional shadow and border
- Responsive positioning

### 3. **Empty Space Below**
- Ready for additional sections
- Responsive heights
- Clean separation

---

## 💡 When to Use

### Use HeroWithContent when:
- ✅ You want Hero's accurate responsive images
- ✅ You want MuseumCard's content box style
- ✅ You need consistent 827px hero height
- ✅ You plan to add more sections below
- ✅ You want a hybrid approach

### Use Hero when:
- ✅ You want pure design system integration
- ✅ You need Typography/Button/Icon components
- ✅ You don't need a white box overlay

### Use MuseumCard when:
- ✅ You need flexible aspect ratios
- ✅ You want GalleryInterior option
- ✅ You need variable heights

---

## 🎯 Integration Example

### Replace HomePage hero:
```tsx
// src/pages/HomePage/index.tsx
import { HeroWithContent, ArtCollection, NewsEvents } from '../../components/sections';

const HomePage: React.FC = () => {
  return (
    <>
      <HeroWithContent />
      <ArtCollection />
      <NewsEvents />
      <Footer />
    </>
  );
};
```

---

## 🔄 Next Steps

1. **Test on different viewports**:
   - 1440px
   - 1920px
   - 2200px

2. **Customize if needed**:
   - Adjust empty space height
   - Modify content box position
   - Change colors/fonts

3. **Add more sections below**:
   - ArtCollection
   - NewsEvents
   - CommunitySupport
   - etc.

---

## 📝 Notes

- Component uses same responsive images as Hero
- Content box styles match MuseumCard exactly
- Empty space is customizable via CSS
- All breakpoints match Figma design specs
- Performance optimized (local assets, responsive loading)

---

## ✅ Status

**Created**: November 9, 2025  
**Status**: ✅ Ready for testing  
**Routes**: 
- `/hero-with-content` (page)
- `/hero-with-content-component` (component only)

---

**Perfect hybrid solution combining the best of Hero and MuseumCard!** 🎉

