# 📁 Components Structure

## 🏗️ Folder Organization

```
src/components/
├── About/
│   ├── index.tsx           # Component chính
│   └── About.css           # Styles
│
├── ArtCollection/
│   ├── index.tsx
│   └── ArtCollection.css
│
├── CommunitySupport/
│   ├── index.tsx
│   └── CommunitySupport.css
│
├── ContentBlock/
│   ├── index.tsx
│   └── ContentBlock.css
│
├── FigmaOverlay/
│   ├── index.tsx
│   └── FigmaOverlay.css
│
├── Footer/
│   ├── index.tsx
│   └── Footer.css
│
├── Header/
│   ├── index.tsx
│   └── Header.css
│
├── Hero/
│   ├── index.tsx
│   └── Hero.css
│
├── MuseumCard/
│   ├── index.tsx
│   └── MuseumCard.css
│
├── NewsEvents/
│   ├── index.tsx
│   └── NewsEvents.css
│
├── Partnerships/
│   ├── index.tsx
│   └── Partnerships.css
│
└── TestPage/
    ├── index.tsx
    └── TestPage.css
```

## 📦 Component Types

### Layout Components:

- **Header** - Navigation và menu
- **Footer** - Footer với contact info và social links
- **Hero** - Hero section với background image

### Content Components:

- **About** - "Who we are" section
- **ArtCollection** - Gallery của artwork cards
- **CommunitySupport** - Timeline của activities
- **Partnerships** - Partner organization cards
- **NewsEvents** - News và events section
- **ContentBlock** - Reusable content block với beige theme
- **MuseumCard** - Special card với museum theme

### Utility Components:

- **TestPage** - Component testing page
- **FigmaOverlay** - Tool để compare với Figma design

## 🔧 Import Pattern

```typescript
// Old way (flat structure):
import Header from "./components/Header.tsx";

// New way (folder structure):
import Header from "./components/Header"; // Auto imports index.tsx
```

## 📝 Component Template

Khi tạo component mới:

```
ComponentName/
├── index.tsx          # Component chính
└── ComponentName.css  # Styles riêng
```

### index.tsx template:

```typescript
import React from "react";
import "./ComponentName.css";

interface ComponentNameProps {
  // Props here
}

const ComponentName: React.FC<ComponentNameProps> = (props) => {
  return <div className="component-name">{/* JSX here */}</div>;
};

export default ComponentName;
```

## 🎨 CSS Naming Convention

Sử dụng BEM (Block Element Modifier):

```css
/* Block */
.component-name {
}

/* Element */
.component-name__element {
}

/* Modifier */
.component-name--modifier {
}
.component-name__element--modifier {
}
```

## 📱 Responsive Breakpoints

```css
/* Desktop First */
@media (max-width: 1024px) {
  /* Tablet */
}
@media (max-width: 768px) {
  /* Mobile */
}
@media (max-width: 480px) {
  /* Small Mobile */
}
```

## ✅ Benefits

1. **Better Organization** - Mỗi component có folder riêng
2. **Easier to Find** - Tìm files dễ dàng hơn
3. **Scalable** - Dễ thêm files mới (tests, stories, types)
4. **Clean Imports** - Import từ folder name
5. **Colocation** - Related files ở cùng nơi

## 🚀 Future Enhancements

Có thể thêm vào mỗi folder:

```
ComponentName/
├── index.tsx              # Component
├── ComponentName.css      # Styles
├── ComponentName.test.tsx # Tests (future)
├── ComponentName.types.ts # TypeScript types (future)
└── README.md              # Component docs (future)
```

## 📖 Documentation

Mỗi component nên có:

- Props interface với comments
- Usage example trong comments
- Responsive behavior notes
- Dependencies (nếu có)
