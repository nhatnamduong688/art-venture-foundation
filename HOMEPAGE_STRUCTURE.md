# 🏠 HomePage Structure - Component Breakdown

## 📊 **HOMEPAGE HIỆN TẠI:**

### **URL:** `http://localhost:3000/`

---

## 🎨 **COMPONENTS ĐANG LOAD (Theo thứ tự):**

```
┌─────────────────────────────────────────────────┐
│  AppRouter                                      │
│  ├── Sidebar (fixed, z-index: 100)             │
│  ├── Header (navigation)                        │
│  └── HomePage                                   │
│      ├── 1. MuseumCard (Hero section)          │
│      │      with GalleryInterior background    │
│      ├── 2. AVNews                              │
│      ├── 3. ArtCollection                       │
│      ├── 4. CommunitySupport                    │
│      ├── 5. NewsEvents                          │
│      └── 6. Footer                              │
└─────────────────────────────────────────────────┘
```

---

## 📝 **CHI TIẾT TỪNG COMPONENT:**

### **1️⃣ MuseumCard (Hero Section)**
```tsx
<MuseumCard
  title="Art & Venture Foundation"
  description="Lorem ipsum..."
  buttonText="MORE"
  backgroundColor="#F2EFE7"
  useGalleryInterior={true}  ← Background image from GalleryInterior
/>
```

**Location:** `src/components/business/MuseumCard/`

**Chức năng:**
- Hero banner với title, description, button
- Background: GalleryInterior (museum image)
- Content box positioned over background
- **Đây là section BẠN VỪA FIX với responsive images!** ✅

**Visible:** Top of page, first thing users see

---

### **2️⃣ AVNews**
```tsx
<AVNews />
```

**Location:** `src/components/business/AVNews/`

**Chức năng:**
- Display A&V News articles
- Horizontal scrollable news cards
- "DETAIL" buttons for each article

**Visible:** Section thứ 2 sau hero

---

### **3️⃣ ArtCollection**
```tsx
<ArtCollection />
```

**Location:** `src/components/sections/ArtCollection/`

**Chức năng:**
- "Art & Venture Art Collection" title
- Gallery of artwork cards
- Artist info, artwork images
- Horizontal scrollable with Previous/Next buttons
- "VIEW ALL" button

**Visible:** Section thứ 3

---

### **4️⃣ CommunitySupport**
```tsx
<CommunitySupport />
```

**Location:** `src/components/sections/CommunitySupport/`

**Chức năng:**
- Timeline of community activities
- 2024, 2025 events
- Scholarship info
- Background image (sculpture)

**Visible:** Section thứ 4

---

### **5️⃣ NewsEvents**
```tsx
<NewsEvents />
```

**Location:** `src/components/sections/NewsEvents/`

**Chức năng:**
- "A&V Foundation Events" title
- Gallery exhibition cards
- Event images and descriptions
- Horizontal scrollable
- "VIEW ALL" button

**Visible:** Section thứ 5

---

### **6️⃣ Footer**
```tsx
<Footer />
```

**Location:** `src/design-system/organisms/Footer/`

**Chức năng:**
- Contact information
- Social media links
- Navigation links
- Copyright info
- AV Foundation logo

**Visible:** Bottom of page

---

## 🎯 **GLOBAL LAYOUT COMPONENTS:**

### **Always Present (Not in HomePage directly):**

**Sidebar** (from AppRouter)
```tsx
<Sidebar />
```
- Fixed position (left side)
- Logo, scroll progress, language toggle
- Width: 129px
- z-index: 100 (always on top)

**Header** (from AppRouter)
```tsx
<Header />
```
- Navigation menu
- Links: Home, Collection, Artists, Events, News, Knowledge
- Sticky/fixed at top

---

## 📐 **LAYOUT FLOW:**

```
┌─────────────────────────────────────────────────────┐
│ Sidebar (129px fixed)                               │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ Header (navigation)                                 │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 1. MuseumCard (Hero)                                │
│    - Background: Museum gallery image               │
│    - Content: Title, description, "MORE" button     │
│    Height: 827px (at 1440px+)                       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 2. AVNews                                           │
│    - Horizontal scrolling news cards                │
│    - Multiple articles with "DETAIL" buttons        │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 3. ArtCollection                                    │
│    - "Art & Venture Art Collection" heading         │
│    - Gallery cards with artist info                 │
│    - Previous/Next navigation                       │
│    - "VIEW ALL" button                              │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 4. CommunitySupport                                 │
│    - Timeline (2024, 2025)                          │
│    - Community activities                           │
│    - Background: Sculpture image (right side)       │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 5. NewsEvents (A&V Foundation Events)               │
│    - Event exhibition cards                         │
│    - Large images with descriptions                 │
│    - Horizontal scroll                              │
│    - Previous/Next buttons                          │
└─────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────┐
│ 6. Footer                                           │
│    - Contact info, social links                     │
│    - Navigation, copyright                          │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 **HERO SECTION (MuseumCard) - VỪA FIX!**

### **Responsive Images Setup:**

```tsx
// MuseumCard uses GalleryInterior component
// which should also use responsive images!

Current: Single image (may need update)
Should be: Like Hero component with <picture> element
```

**Note:** MuseumCard hiện đang dùng `useGalleryInterior={true}` để load background image. Có thể cần update GalleryInterior component để dùng responsive images tương tự Hero!

---

## 📊 **COMPONENTS SUMMARY:**

| # | Component | Type | Source | Responsive Images |
|---|-----------|------|--------|-------------------|
| 0 | Sidebar | Business | Always visible | N/A |
| 0 | Header | Organism | Always visible | N/A |
| 1 | MuseumCard | Business | HomePage | ⚠️ Check GalleryInterior |
| 2 | AVNews | Business | HomePage | ❓ Check |
| 3 | ArtCollection | Section | HomePage | ❓ Check |
| 4 | CommunitySupport | Section | HomePage | ❓ Check |
| 5 | NewsEvents | Section | HomePage | ❓ Check |
| 6 | Footer | Organism | HomePage | N/A |

---

## 🔍 **NEXT STEPS (Optimization):**

### **Có thể cần responsive images cho:**

1. **GalleryInterior** (used by MuseumCard)
   - Museum gallery background image
   - Similar to Hero, needs 1440/1920/2200 versions

2. **ArtCollection**
   - Artwork images
   - Artist avatars (smaller, may not need)

3. **CommunitySupport**
   - Background sculpture image

4. **NewsEvents**
   - Event exhibition images

---

## ✅ **ĐÃ HOÀN THÀNH:**

✅ **Hero responsive images** (via standalone Hero component at `/hero`)
- hero-1440.jpg
- hero-1920.jpg
- hero-2200.jpg

⚠️ **HomePage dùng MuseumCard thay vì Hero component**
- Cần check xem GalleryInterior có cần responsive images không

---

## 🎯 **RECOMMENDATION:**

### **Option 1: Replace MuseumCard with Hero**

```tsx
// HomePage/index.tsx
import Hero from '../../components/sections/Hero';

const HomePage = () => {
  return (
    <>
      <Hero />  {/* Use Hero component with responsive images */}
      <AVNews />
      {/* ... rest */}
    </>
  );
};
```

### **Option 2: Update GalleryInterior with responsive images**

Similar to Hero implementation, add responsive images to GalleryInterior component.

---

**Current Status**: HomePage works, but hero section (MuseumCard) may not use optimized responsive images yet.

**Next Action**: Decide whether to use Hero component or update GalleryInterior! 🤔

