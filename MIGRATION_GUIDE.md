# 🔄 Migration Guide - Legacy to Design System

## 📋 Overview

This guide helps you migrate existing components to use the new design system with Atomic Design Pattern, design tokens, and best practices.

---

## 🎯 Migration Strategy

### Phase 1: Low-Risk (1-2 days)

- ✅ Update global styles to use CSS variables
- ✅ Replace hardcoded colors with design tokens
- ✅ Replace hardcoded spacing with design tokens

### Phase 2: Medium-Risk (1 week)

- ✅ Refactor buttons to use Button atom
- ✅ Refactor text to use Typography atom
- ✅ Replace cards with Card molecule

### Phase 3: High-Risk (2-3 weeks)

- ✅ Refactor Header to use design system
- ✅ Refactor Footer to use design system
- ✅ Migrate all pages to use new components

---

## 🔧 Step-by-Step Migration

### Step 1: Update Global CSS Variables

**Before:**

```css
.hero__title {
  font-family: "Big Caslon", serif;
  font-size: 80px;
  color: #6b2128;
  margin: 0;
}
```

**After:**

```css
.hero__title {
  font-family: var(--font-heading);
  font-size: var(--text-display-xl);
  color: var(--color-burgundy);
  margin: 0;
}
```

### Step 2: Replace Hardcoded Values

#### Colors

Find and replace across project:

```bash
# Burgundy color
#6B2128 → var(--color-burgundy)
#732231 → var(--color-burgundy)  # Old burgundy

# Beige background
#F2EFE7 → var(--color-bg-main)
#F2F1EB → var(--color-bg-main)  # Old beige

# Text colors
#2E2E2E → var(--color-text-primary)
#000000 → var(--color-text-primary)
#0D0D0D → var(--color-text-primary)

# Card background
#F4F3F1 → var(--color-bg-card)
```

#### Spacing

```bash
# Replace hardcoded padding/margin
padding: 24px → padding: var(--spacing-6)
margin: 32px → margin: var(--spacing-8)
gap: 16px → gap: var(--spacing-4)
```

#### Typography

```bash
# Font families
font-family: 'Big Caslon', serif → font-family: var(--font-heading)
font-family: 'Inter', sans-serif → font-family: var(--font-body)

# Font sizes
font-size: 80px → font-size: var(--text-display-xl)
font-size: 60px → font-size: var(--text-display-lg)
font-size: 16px → font-size: var(--text-body-md)
```

### Step 3: Migrate Buttons

**Before:**

```tsx
<button className="btn btn-burgundy">
  MORE
  <svg>...</svg>
</button>
```

**After:**

```tsx
import { Button } from "@/design-system/atoms";

<Button variant="burgundy" rightIcon={<ArrowIcon />}>
  MORE
</Button>;
```

**Before (CSS):**

```css
.btn {
  padding: 12px 24px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.btn-burgundy {
  color: #6b2128;
  background: transparent;
}
```

**After:** Delete CSS, use Button component

### Step 4: Migrate Typography

**Before:**

```tsx
<h1 className="hero__title">
  Art & Venture Foundation
</h1>

<p className="hero__description">
  Lorem ipsum dolor sit amet...
</p>
```

**After:**

```tsx
import { Typography } from '@/design-system/atoms';

<Typography variant="display-xl" color="burgundy">
  Art & Venture Foundation
</Typography>

<Typography variant="body-md" color="primary">
  Lorem ipsum dolor sit amet...
</Typography>
```

**Before (CSS):**

```css
.hero__title {
  font-family: "Big Caslon", serif;
  font-size: 80px;
  font-weight: 500;
  color: #6b2128;
}

.hero__description {
  font-size: 16px;
  line-height: 2;
  color: #2e2e2e;
}
```

**After:** Delete CSS, use Typography component

### Step 5: Migrate Cards

**Before:**

```tsx
<div className="museum-card">
  <img src="artwork.jpg" alt="Artwork" />
  <div className="museum-card__content">
    <h3>Title</h3>
    <p>Description</p>
    <button className="btn">View</button>
  </div>
</div>
```

**After:**

```tsx
import { Card } from "@/design-system/molecules";
import { Button, Typography } from "@/design-system/atoms";

<Card variant="elevated" hoverable>
  <Card.Image src="artwork.jpg" alt="Artwork" aspectRatio="16/9" />
  <Card.Body>
    <Typography variant="h3">Title</Typography>
    <Typography variant="body-md">Description</Typography>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">View</Button>
  </Card.Footer>
</Card>;
```

### Step 6: Migrate Header

**Before:**

```tsx
const Header = () => {
  const [language, setLanguage] = useState("EN");

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/collection">Collection</Link>
      </nav>
      <button onClick={() => setLanguage(language === "EN" ? "VI" : "EN")}>
        {language}
      </button>
    </header>
  );
};
```

**After:**

```tsx
import { LanguageToggle, SearchBox } from "@/design-system/molecules";
import { useAppStore } from "@/store/useAppStore";

const Header = () => {
  const { language, setLanguage } = useAppStore();

  return (
    <header className="header">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/collection">Collection</Link>
      </nav>
      <SearchBox placeholder="Search..." />
      <LanguageToggle
        currentLanguage={language}
        onLanguageChange={setLanguage}
      />
    </header>
  );
};
```

**Benefits:**

- ✅ State persisted across app
- ✅ Reusable components
- ✅ Consistent styling
- ✅ Accessibility built-in

### Step 7: Use Custom Hooks

**Before:**

```tsx
const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();
  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);
```

**After:**

```tsx
import { useIsMobile } from "@/hooks";

const isMobile = useIsMobile();
```

**Before:**

```tsx
const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const observer = new IntersectionObserver(([entry]) => {
    setIsVisible(entry.isIntersecting);
  });

  if (ref.current) observer.observe(ref.current);

  return () => observer.disconnect();
}, []);
```

**After:**

```tsx
import { useIntersectionObserver } from "@/hooks";

const [ref, isVisible] = useIntersectionObserver({ threshold: 0.5 });
```

---

## 📝 Component Migration Checklist

### For Each Component:

- [ ] Replace hardcoded colors with CSS variables
- [ ] Replace hardcoded spacing with CSS variables
- [ ] Replace buttons with Button atom
- [ ] Replace headings/text with Typography atom
- [ ] Replace custom inputs with Input atom
- [ ] Replace cards with Card molecule
- [ ] Use custom hooks for responsive behavior
- [ ] Use useAppStore for shared state
- [ ] Remove unused CSS
- [ ] Test accessibility (keyboard nav, screen readers)
- [ ] Test responsive behavior
- [ ] Update TypeScript types

---

## 🎨 CSS Migration Patterns

### Pattern 1: Direct Variable Replacement

```css
/* Before */
.section {
  background-color: #f2efe7;
  padding: 80px 188px;
  color: #2e2e2e;
}

/* After */
.section {
  background-color: var(--color-bg-main);
  padding: var(--spacing-20) var(--spacing-48);
  color: var(--color-text-primary);
}
```

### Pattern 2: Use Utility Classes

```tsx
/* Before */
<div style={{ padding: '24px', margin: '16px' }}>
  Content
</div>

/* After */
<div style={{
  padding: 'var(--spacing-6)',
  margin: 'var(--spacing-4)'
}}>
  Content
</div>
```

### Pattern 3: Component Replacement

```tsx
/* Before */
<div className="custom-card">
  <div className="custom-card__header">
    <h3>Title</h3>
  </div>
  <div className="custom-card__body">
    <p>Content</p>
  </div>
</div>;

/* After */
import { Card } from "@/design-system/molecules";
import { Typography } from "@/design-system/atoms";

<Card variant="outlined" padding="md">
  <Card.Header>
    <Typography variant="h3">Title</Typography>
  </Card.Header>
  <Card.Body>
    <Typography variant="body-md">Content</Typography>
  </Card.Body>
</Card>;
```

---

## 🚨 Common Pitfalls

### ❌ Don't Mix Old and New Patterns

```tsx
// BAD: Mixing inline styles with design system
<Button variant="primary" style={{ color: '#6B2128' }}>
  Click
</Button>

// GOOD: Use design system exclusively
<Button variant="primary">
  Click
</Button>
```

### ❌ Don't Hardcode Values

```tsx
// BAD
<div style={{ padding: '24px', fontSize: '16px' }}>
  Content
</div>

// GOOD
<div style={{
  padding: 'var(--spacing-6)',
  fontSize: 'var(--text-body-md)'
}}>
  Content
</div>
```

### ❌ Don't Duplicate State

```tsx
// BAD: Local state for global concerns
const [language, setLanguage] = useState("en");

// GOOD: Use global store
const { language, setLanguage } = useAppStore();
```

---

## ✅ Migration Example: Full Component

### Before:

```tsx
// Hero.tsx
import React from "react";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="hero__title">Art & Venture Foundation</h1>
        <p className="hero__description">
          Lorem ipsum dolor sit amet consectetur...
        </p>
        <button className="hero__button">
          MORE
          <svg>...</svg>
        </button>
      </div>
    </section>
  );
};
```

```css
/* Hero.css */
.hero {
  height: 827px;
  background: #f2efe7;
  padding: 50px 60px;
}

.hero__title {
  font-family: "Big Caslon", serif;
  font-size: 80px;
  color: #6b2128;
  margin: 0;
}

.hero__description {
  font-size: 16px;
  line-height: 2;
  color: #2e2e2e;
}

.hero__button {
  padding: 12px 24px;
  color: #6b2128;
  background: transparent;
  border: none;
  cursor: pointer;
}
```

### After:

```tsx
// Hero.tsx
import React from "react";
import { Typography, Button } from "@/design-system/atoms";
import { Card } from "@/design-system/molecules";
import "./Hero.css";

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <Card variant="museum" padding="lg" className="hero__card">
        <Typography variant="display-xl" color="burgundy">
          Art & Venture Foundation
        </Typography>
        <Typography variant="body-md" color="primary">
          Lorem ipsum dolor sit amet consectetur...
        </Typography>
        <Button variant="burgundy" rightIcon={<ArrowIcon />}>
          MORE
        </Button>
      </Card>
    </section>
  );
};
```

```css
/* Hero.css - Simplified */
.hero {
  height: 827px;
  background: var(--color-bg-main);
  padding: var(--spacing-12) var(--spacing-16);
}

.hero__card {
  max-width: 638px;
}
```

**Benefits:**

- ✅ 70% less custom CSS
- ✅ Consistent with design system
- ✅ Better accessibility
- ✅ Easier to maintain

---

## 📊 Progress Tracking

### Components Migrated:

- [ ] Header
- [ ] Footer
- [ ] Hero
- [ ] About
- [ ] ArtCollection
- [ ] CommunitySupport
- [ ] Partnerships
- [ ] NewsEvents
- [ ] MuseumCard

### Pages Migrated:

- [x] HomePage (newly created with design system)
- [ ] CollectionPage
- [ ] ArtistsPage
- [ ] EventsPage
- [ ] NewsPage
- [ ] ArtistDetailPage
- [ ] EventDetailPage
- [ ] NewsDetailPage
- [ ] KnowledgePage
- [ ] KnowledgeDetailPage

---

## 🎯 Next Steps

1. **Start with low-risk changes**: CSS variable replacement
2. **Move to medium-risk**: Button and Typography components
3. **Finish with high-risk**: Full component refactors
4. **Test thoroughly** after each phase
5. **Document custom patterns** as you go

---

**Good luck with your migration! 🚀**
