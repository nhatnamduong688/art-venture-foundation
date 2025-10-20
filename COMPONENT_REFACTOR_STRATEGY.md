# Component Refactor Strategy

## Chiến lược tổ chức lại Components cũ

### 📊 Tình trạng hiện tại

#### ✅ Đã migrate sang Design System (8 components)

```
src/design-system/
├── organisms/
│   ├── Header/       ✅ (thay thế src/components/Header/)
│   └── Footer/       ✅ (thay thế src/components/Footer/)
```

Components đã được refactor để dùng Design System:

- ✅ `Hero/` - Dùng Typography, Button, Icon
- ✅ `About/` - Dùng Typography, Button, Icon
- ✅ `ArtCollection/` - Dùng Typography, Button, Icon, Card
- ✅ `CommunitySupport/` - Dùng Typography, Button, Icon
- ✅ `NewsEvents/` - Dùng Typography, Button, Icon, Card
- ✅ `Partnerships/` - Dùng Typography, Button, Icon, Card
- ✅ `GalleryInterior/` - Dùng FigmaImage (minimal refactor)
- ✅ `ContentBlock/` - Dùng Typography, Button, Icon

#### 🔶 Chưa migrate (7 components)

```
src/components/
├── AVNews/              - Tương tự NewsEvents
├── News/                - Tương tự NewsEvents
├── MuseumCard/          - Card component cụ thể
├── Sidebar/             - Navigation component
├── FigmaImage/          - Utility component
├── FigmaOverlay/        - Dev tool
├── GalleryCropTest/     - Test component
└── TestPage/            - Test component
```

---

## 🎯 Chiến lược tổ chức (3 Options)

### Option 1: **Hybrid Approach** (Khuyến nghị ⭐⭐⭐⭐⭐)

**Giữ cả 2 folder, tách biệt rõ ràng**

```
src/
├── design-system/              # Pure, reusable components
│   ├── atoms/                  # Button, Typography, Input, Icon
│   ├── molecules/              # Card, SearchBox, LanguageToggle
│   ├── organisms/              # Header, Footer
│   └── templates/              # Future: Page layouts
│
├── components/                 # Business/Feature components
│   ├── sections/               # Page sections (sử dụng design system)
│   │   ├── Hero/
│   │   ├── About/
│   │   ├── ArtCollection/
│   │   ├── NewsEvents/
│   │   ├── Partnerships/
│   │   └── CommunitySupport/
│   │
│   ├── business/               # Business-specific components
│   │   ├── MuseumCard/
│   │   └── Sidebar/
│   │
│   └── utils/                  # Utility components
│       ├── FigmaImage/
│       └── FigmaOverlay/
│
└── pages/                      # Page-level components
    ├── HomePage/
    ├── CollectionPage/
    └── ...
```

**✅ Ưu điểm:**

- Tách biệt rõ ràng: Design system vs Business logic
- Design system có thể dùng cho projects khác
- Dễ maintain và scale
- Không phá vỡ import paths hiện tại
- Team mới hiểu rõ component nào thuộc layer nào

**❌ Nhược điểm:**

- Có 2 folder components (nhưng có mục đích khác nhau)

---

### Option 2: **Full Atomic Design**

**Migrate tất cả vào design-system**

```
src/design-system/
├── atoms/                      # Smallest units
│   ├── Button/
│   ├── Typography/
│   ├── Input/
│   └── Icon/
│
├── molecules/                  # Combinations of atoms
│   ├── Card/
│   ├── SearchBox/
│   ├── LanguageToggle/
│   └── MuseumCard/            ← Migrate from components/
│
├── organisms/                  # Complex UI sections
│   ├── Header/
│   ├── Footer/
│   ├── Hero/                  ← Migrate from components/
│   ├── Sidebar/               ← Migrate from components/
│   ├── ArtCollection/         ← Migrate from components/
│   ├── NewsEvents/            ← Migrate from components/
│   └── Partnerships/          ← Migrate from components/
│
└── templates/                  # Page layouts
    ├── MainLayout/
    └── CollectionLayout/
```

**✅ Ưu điểm:**

- Cấu trúc "đẹp", tuân thủ 100% Atomic Design
- Tất cả components đều reusable
- Dễ tạo Storybook cho tất cả

**❌ Nhược điểm:**

- Phải refactor import paths toàn bộ project
- Hero, ArtCollection là "business components", không phải generic
- Khó phân biệt reusable vs specific components

---

### Option 3: **Feature-based Structure**

**Tổ chức theo features/domains**

```
src/
├── design-system/              # Pure UI components
│   ├── atoms/
│   ├── molecules/
│   └── organisms/
│       ├── Header/
│       └── Footer/
│
├── features/                   # Business features
│   ├── home/
│   │   ├── Hero/
│   │   ├── About/
│   │   └── CommunitySupport/
│   │
│   ├── collection/
│   │   ├── ArtCollection/
│   │   └── MuseumCard/
│   │
│   ├── news/
│   │   ├── NewsEvents/
│   │   └── AVNews/
│   │
│   └── shared/
│       ├── Sidebar/
│       └── FigmaImage/
│
└── pages/
    ├── HomePage/
    ├── CollectionPage/
    └── ...
```

**✅ Ưu điểm:**

- Tổ chức theo business domain (dễ hiểu cho product team)
- Dễ scale khi có nhiều features
- Phù hợp cho large apps

**❌ Nhược điểm:**

- Khó quyết định component thuộc feature nào
- Phải refactor toàn bộ import paths
- Over-engineering cho project hiện tại

---

## 🎯 Đề xuất Implementation (Option 1 - Hybrid)

### Phase 1: Reorganize existing components (1-2 giờ)

```bash
src/components/
├── sections/                   # Components đã migrate
│   ├── Hero/
│   ├── About/
│   ├── ArtCollection/
│   ├── NewsEvents/
│   ├── Partnerships/
│   ├── CommunitySupport/
│   ├── GalleryInterior/
│   └── ContentBlock/
│
├── business/                   # Business-specific
│   ├── MuseumCard/
│   ├── Sidebar/
│   ├── AVNews/
│   └── News/
│
├── utils/                      # Utilities
│   ├── FigmaImage/
│   └── FigmaOverlay/
│
└── __tests__/                  # Test components
    ├── GalleryCropTest/
    └── TestPage/
```

### Phase 2: Create index.ts exports (30 phút)

```typescript
// src/components/sections/index.ts
export { default as Hero } from "./Hero";
export { default as About } from "./About";
export { default as ArtCollection } from "./ArtCollection";
// ... rest

// src/components/business/index.ts
export { default as MuseumCard } from "./MuseumCard";
export { default as Sidebar } from "./Sidebar";
// ... rest

// src/components/utils/index.ts
export { default as FigmaImage } from "./FigmaImage";
export { default as FigmaOverlay } from "./FigmaOverlay";

// src/components/index.ts (main export)
export * from "./sections";
export * from "./business";
export * from "./utils";
```

### Phase 3: Update imports (Find & Replace)

```typescript
// Before:
import Hero from "../components/Hero";
import { Header } from "../components/Header";

// After:
import { Hero } from "../components/sections";
import { Header } from "../design-system/organisms";
```

### Phase 4: Migrate remaining components (2-3 giờ)

1. **AVNews & News** → Refactor giống NewsEvents
2. **MuseumCard** → Refactor dùng Card molecule
3. **Sidebar** → Consider moving to organisms (nếu reusable)

### Phase 5: Cleanup & Documentation

- Xóa folder test components (GalleryCropTest, TestPage)
- Update README với structure mới
- Add JSDoc comments

---

## 📝 Naming Conventions

### Design System Components (Generic)

- **Atoms**: `Button`, `Input`, `Icon`, `Typography`
- **Molecules**: `Card`, `SearchBox`, `LanguageToggle`
- **Organisms**: `Header`, `Footer`, `Sidebar` (nếu generic)

### Business Components (Specific)

- **Sections**: `Hero`, `About`, `ArtCollection` (homepage sections)
- **Features**: `MuseumCard`, `NewsCard` (domain-specific)
- **Utils**: `FigmaImage`, `FigmaOverlay` (helpers)

---

## 🎨 Component Classification Guide

### Khi nào component thuộc Design System?

✅ Component có thể dùng ở nhiều projects khác
✅ Không chứa business logic cụ thể
✅ Có thể customize qua props
✅ Generic và reusable

**Ví dụ**: `Button`, `Card`, `Header`, `Footer`

### Khi nào component thuộc Business/Feature?

✅ Chứa business logic của Art & Venture
✅ Chỉ dùng cho project này
✅ Có data/content cụ thể

**Ví dụ**: `Hero`, `ArtCollection`, `MuseumCard`

---

## 🚀 Quick Start (Option 1)

### Bước 1: Tạo sub-folders

```bash
mkdir -p src/components/sections
mkdir -p src/components/business
mkdir -p src/components/utils
mkdir -p src/components/__tests__
```

### Bước 2: Move components

```bash
# Sections (đã migrate)
mv src/components/{Hero,About,ArtCollection,NewsEvents,Partnerships,CommunitySupport,GalleryInterior,ContentBlock} src/components/sections/

# Business
mv src/components/{MuseumCard,Sidebar,AVNews,News} src/components/business/

# Utils
mv src/components/{FigmaImage,FigmaOverlay} src/components/utils/

# Tests
mv src/components/{GalleryCropTest,TestPage} src/components/__tests__/
```

### Bước 3: Create barrel exports

Tạo các file index.ts như ở Phase 2

### Bước 4: Update imports

Find & Replace trong toàn project

---

## 📊 Comparison Table

| Criteria            | Option 1 (Hybrid)     | Option 2 (Full Atomic) | Option 3 (Feature-based) |
| ------------------- | --------------------- | ---------------------- | ------------------------ |
| **Complexity**      | ⭐⭐ Medium           | ⭐⭐⭐ High            | ⭐⭐⭐⭐ Very High       |
| **Refactor effort** | ⭐⭐ 3-4 hours        | ⭐⭐⭐⭐ 8-10 hours    | ⭐⭐⭐⭐⭐ 12+ hours     |
| **Scalability**     | ⭐⭐⭐⭐ Good         | ⭐⭐⭐⭐⭐ Excellent   | ⭐⭐⭐⭐⭐ Excellent     |
| **Clarity**         | ⭐⭐⭐⭐⭐ Very Clear | ⭐⭐⭐ OK              | ⭐⭐⭐⭐ Clear           |
| **Maintainability** | ⭐⭐⭐⭐ Good         | ⭐⭐⭐⭐ Good          | ⭐⭐⭐⭐⭐ Excellent     |
| **Team onboarding** | ⭐⭐⭐⭐⭐ Easy       | ⭐⭐⭐ Medium          | ⭐⭐⭐ Medium            |
| **Reusability**     | ⭐⭐⭐⭐ Good         | ⭐⭐⭐⭐⭐ Excellent   | ⭐⭐⭐ OK                |

---

## 🎯 Recommendation

**Chọn Option 1 (Hybrid Approach)** vì:

1. ✅ **Balanced**: Không quá phức tạp, không quá đơn giản
2. ✅ **Quick to implement**: 3-4 giờ là xong
3. ✅ **Clear separation**: Design system vs Business logic
4. ✅ **Easy to understand**: Developer mới vào hiểu ngay
5. ✅ **Flexible**: Có thể evolve sang Option 2 hoặc 3 sau

**Next Actions**:

1. Review strategy này với team
2. Chọn 1 trong 3 options (recommend Option 1)
3. Implement theo phases
4. Update documentation
5. Train team về structure mới

---

## 📚 Related Documentation

- [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
- [ARCHITECTURE.md](./ARCHITECTURE.md)
