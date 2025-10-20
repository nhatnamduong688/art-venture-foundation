# 🎨 Design System Guide

## 📋 Table of Contents

1. [Overview](#overview)
2. [Architecture](#architecture)
3. [Design Tokens](#design-tokens)
4. [Atomic Design Pattern](#atomic-design-pattern)
5. [Component Usage](#component-usage)
6. [Best Practices](#best-practices)
7. [Examples](#examples)

---

## 🎯 Overview

The Art & Venture Foundation Design System is built using **Atomic Design Pattern** with TypeScript and React. It provides a comprehensive, reusable, and maintainable component library.

### Key Features:

- ✅ **Atomic Design Pattern** - Organized from Atoms → Molecules → Organisms → Templates → Pages
- ✅ **Design Tokens** - Centralized colors, typography, spacing, and breakpoints
- ✅ **CSS Custom Properties** - Runtime theming support
- ✅ **TypeScript** - Full type safety
- ✅ **Accessibility** - WCAG 2.1 AA compliant
- ✅ **Responsive** - Mobile-first design
- ✅ **Performance** - Code splitting and lazy loading

---

## 🏗️ Architecture

```
src/
├── design-system/
│   ├── tokens/              # Design tokens (colors, typography, spacing, etc.)
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   ├── breakpoints.ts
│   │   └── index.ts
│   ├── atoms/               # Smallest UI components
│   │   ├── Button/
│   │   ├── Input/
│   │   ├── Typography/
│   │   └── index.ts
│   ├── molecules/           # Composed components
│   │   ├── Card/
│   │   ├── LanguageToggle/
│   │   ├── SearchBox/
│   │   └── index.ts
│   ├── organisms/           # Complex components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── index.ts
│   ├── templates/           # Page layouts
│   └── index.ts             # Main export
├── hooks/                   # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useIntersectionObserver.ts
│   ├── useLocalStorage.ts
│   └── index.ts
├── api/                     # API layer
│   ├── client.ts
│   ├── artworks.ts
│   └── index.ts
├── store/                   # State management
│   ├── useAppStore.ts
│   └── cartStore.ts
└── config/                  # Configuration
    └── env.ts
```

---

## 🎨 Design Tokens

Design tokens are the foundation of the design system. They ensure consistency across the entire application.

### Colors

```typescript
import { colors } from "@/design-system/tokens";

// Brand Colors
colors.brand.burgundy.DEFAULT; // #6B2128
colors.brand.beige.DEFAULT; // #F2EFE7

// Text Colors
colors.text.primary; // #2E2E2E
colors.text.secondary; // #5A5958
colors.text.burgundy; // #6B2128

// Background Colors
colors.background.main; // #F2EFE7
colors.background.card; // #F4F3F1
```

### Typography

```typescript
import { typography } from "@/design-system/tokens";

// Font Families
typography.fontFamily.heading; // 'Big Caslon', serif
typography.fontFamily.body; // 'Inter', sans-serif

// Font Sizes
typography.fontSize.display.xl; // 80px
typography.fontSize.heading.h1; // 48px
typography.fontSize.body.md; // 16px
```

### Spacing

```typescript
import { spacing, semanticSpacing } from "@/design-system/tokens";

// Base spacing (8px scale)
spacing[4]; // 16px
spacing[8]; // 32px

// Semantic spacing
semanticSpacing.section.md; // 80px
semanticSpacing.component.lg; // 32px
```

### CSS Variables

All tokens are available as CSS custom properties:

```css
/* Colors */
var(--color-burgundy)
var(--color-beige)
var(--color-text-primary)

/* Typography */
var(--font-heading)
var(--text-h1)
var(--font-weight-medium)

/* Spacing */
var(--spacing-4)
var(--spacing-section-md)

/* Layout */
var(--layout-sidebar-width)    /* 129px */
var(--layout-header-height)    /* 114px */
```

---

## ⚛️ Atomic Design Pattern

### Atoms

**Smallest, indivisible UI components**

- Button
- Input
- Typography
- Icon

### Molecules

**Simple groups of atoms working together**

- Card (with Header, Body, Footer, Image)
- LanguageToggle
- SearchBox

### Organisms

**Complex components composed of molecules and atoms**

- Header (Navigation + Search + Language Toggle)
- Footer (Links + Contact + Social)
- ProductCard
- NewsCard

### Templates

**Page-level layouts**

- MainLayout (Sidebar + Header + Content + Footer)
- DetailLayout
- GridLayout

### Pages

**Specific instances of templates with real content**

- HomePage
- CollectionPage
- ArtistDetailPage

---

## 🧩 Component Usage

### Atoms

#### Button

```tsx
import { Button } from '@/design-system/atoms';

// Primary button
<Button variant="primary" size="md">
  Click me
</Button>

// Burgundy outline
<Button variant="burgundy" size="lg">
  MORE
</Button>

// With icons
<Button
  variant="primary"
  leftIcon={<SearchIcon />}
  rightIcon={<ArrowIcon />}
>
  Search
</Button>

// Loading state
<Button variant="primary" isLoading>
  Processing...
</Button>
```

#### Typography

```tsx
import { Typography } from '@/design-system/atoms';

// Display heading
<Typography variant="display-xl" color="burgundy">
  Art & Venture Foundation
</Typography>

// Body text
<Typography variant="body-md" color="primary">
  Lorem ipsum dolor sit amet...
</Typography>

// Custom element
<Typography variant="h2" as="h1" weight="bold">
  Custom heading
</Typography>
```

#### Input

```tsx
import { Input } from '@/design-system/atoms';

// Basic input
<Input
  label="Email"
  type="email"
  placeholder="Enter your email"
/>

// With icon
<Input
  leftIcon={<SearchIcon />}
  placeholder="Search..."
/>

// With error
<Input
  label="Username"
  error="Username is required"
/>

// Full width
<Input
  label="Message"
  fullWidth
/>
```

### Molecules

#### Card

```tsx
import { Card } from '@/design-system/molecules';

// Basic card
<Card variant="elevated" padding="md">
  <h3>Card Title</h3>
  <p>Card content</p>
</Card>

// Composition pattern
<Card variant="outlined" padding="lg">
  <Card.Image
    src="image.jpg"
    alt="Artwork"
    aspectRatio="16/9"
  />
  <Card.Body>
    <h3>Artwork Title</h3>
    <p>Description</p>
  </Card.Body>
  <Card.Footer>
    <Button variant="burgundy">View Details</Button>
  </Card.Footer>
</Card>

// Hoverable card
<Card hoverable onClick={() => navigate('/detail')}>
  Content
</Card>
```

#### LanguageToggle

```tsx
import { LanguageToggle } from "@/design-system/molecules";
import { useAppStore } from "@/store/useAppStore";

const Header = () => {
  const { language, setLanguage } = useAppStore();

  return (
    <LanguageToggle currentLanguage={language} onLanguageChange={setLanguage} />
  );
};
```

#### SearchBox

```tsx
import { SearchBox } from "@/design-system/molecules";

<SearchBox
  placeholder="Search artworks..."
  onSearch={(value) => console.log("Search:", value)}
  onChange={(value) => console.log("Input changed:", value)}
  fullWidth
/>;
```

---

## 🎯 Best Practices

### 1. **Use Design Tokens**

❌ **Don't:**

```tsx
<div style={{ color: "#6B2128", fontSize: "80px" }}>Title</div>
```

✅ **Do:**

```tsx
import { Typography } from "@/design-system/atoms";

<Typography variant="display-xl" color="burgundy">
  Title
</Typography>;
```

### 2. **Use CSS Variables**

❌ **Don't:**

```css
.header {
  padding: 24px;
  color: #2e2e2e;
}
```

✅ **Do:**

```css
.header {
  padding: var(--spacing-6);
  color: var(--color-text-primary);
}
```

### 3. **Component Composition**

❌ **Don't:**

```tsx
<ArtworkCard
  title="Title"
  image="img.jpg"
  description="Desc"
  showButton={true}
  buttonText="View"
  buttonVariant="primary"
/>
```

✅ **Do:**

```tsx
<Card hoverable>
  <Card.Image src="img.jpg" alt="Artwork" />
  <Card.Body>
    <Typography variant="h3">Title</Typography>
    <Typography variant="body-md">Description</Typography>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">View</Button>
  </Card.Footer>
</Card>
```

### 4. **Use Custom Hooks**

❌ **Don't:**

```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const handler = () => setIsMobile(window.innerWidth < 768);
  window.addEventListener("resize", handler);
  return () => window.removeEventListener("resize", handler);
}, []);
```

✅ **Do:**

```tsx
import { useIsMobile } from "@/hooks";

const isMobile = useIsMobile();
```

### 5. **Centralized State Management**

❌ **Don't:**

```tsx
const [language, setLanguage] = useState("en");
// State lost on unmount
```

✅ **Do:**

```tsx
import { useAppStore } from "@/store/useAppStore";

const { language, setLanguage } = useAppStore();
// Persisted and shared across app
```

---

## 📚 Examples

### Example 1: Simple Page with Design System

```tsx
import React from "react";
import { Typography, Button } from "@/design-system/atoms";
import { Card } from "@/design-system/molecules";
import { useIsMobile } from "@/hooks";

const AboutPage: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div style={{ padding: "var(--spacing-section-md)" }}>
      <Typography variant="display-lg" color="burgundy" align="center">
        About Us
      </Typography>

      <Card variant="elevated" padding="lg">
        <Card.Body>
          <Typography variant="body-md">
            Art & Venture Foundation is dedicated to promoting contemporary
            art...
          </Typography>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" fullWidth={isMobile}>
            Learn More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
};
```

### Example 2: Form with Design System

```tsx
import React, { useState } from "react";
import { Input } from "@/design-system/atoms";
import { Button } from "@/design-system/atoms";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  return (
    <form>
      <Input
        label="Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        fullWidth
      />

      <Input
        label="Email"
        type="email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        fullWidth
      />

      <Button type="submit" variant="primary" fullWidth>
        Send Message
      </Button>
    </form>
  );
};
```

### Example 3: Responsive Grid with Hooks

```tsx
import React from "react";
import { Card } from "@/design-system/molecules";
import { useIsDesktop, useIsTablet } from "@/hooks";

const ArtworkGrid: React.FC = () => {
  const isDesktop = useIsDesktop();
  const isTablet = useIsTablet();

  const columns = isDesktop ? 4 : isTablet ? 3 : 1;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "var(--spacing-6)",
      }}
    >
      {artworks.map((artwork) => (
        <Card key={artwork.id} hoverable>
          <Card.Image src={artwork.image} alt={artwork.title} />
          <Card.Body>
            <h3>{artwork.title}</h3>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};
```

---

## 🚀 Getting Started

### 1. Import Design System Components

```tsx
import { Button, Typography, Input } from "@/design-system/atoms";
import { Card, SearchBox } from "@/design-system/molecules";
import { colors, spacing } from "@/design-system/tokens";
```

### 2. Use Design Tokens in CSS

```css
.my-component {
  color: var(--color-text-primary);
  font-family: var(--font-body);
  padding: var(--spacing-6);
  background: var(--color-bg-main);
}
```

### 3. Use Custom Hooks

```tsx
import { useMediaQuery, useIntersectionObserver } from "@/hooks";

const isMobile = useMediaQuery("(max-width: 767px)");
const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
```

### 4. Use State Management

```tsx
import { useAppStore } from "@/store/useAppStore";

const { language, setLanguage, searchQuery } = useAppStore();
```

---

## 📖 Additional Resources

- [Atomic Design Methodology](https://bradfrost.com/blog/post/atomic-web-design/)
- [Design Tokens](https://css-tricks.com/what-are-design-tokens/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

---

## 🤝 Contributing

When adding new components:

1. Place in correct atomic level (Atoms/Molecules/Organisms)
2. Use design tokens instead of hardcoded values
3. Add TypeScript types
4. Include accessibility features
5. Add examples to this guide

---

**Last Updated:** October 20, 2025  
**Version:** 1.0.0
