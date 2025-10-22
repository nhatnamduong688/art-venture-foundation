# Responsive Design Pattern Guide

## 📋 Overview

This guide documents the standardized responsive design patterns implemented across the Art & Venture Foundation project.

## 🎯 Philosophy

- **Mobile-First**: Start with mobile styles, progressively enhance for larger screens
- **Consistent Breakpoints**: Use standardized breakpoints across all components
- **CSS Variables**: Leverage design tokens for maintainability
- **Reusable Utilities**: Share common patterns via utility classes

## 📐 Breakpoint System

### Standard Breakpoints

| Name | Value | Use Case |
|------|-------|----------|
| `xs` | 320px | Extra small phones |
| `sm` | 480px | Small phones |
| `md` | 768px | **Tablets** (primary breakpoint) |
| `lg` | 1024px | **Desktop** (primary breakpoint) |
| `xl` | 1440px | **Wide screens** (Figma base) |
| `xxl` | 1920px | Ultra-wide/4K |

### Semantic Breakpoints

| Name | Range | Description |
|------|-------|-------------|
| Mobile | 0-767px | Phone devices |
| Tablet | 768px-1023px | Tablet devices |
| Desktop | 1024px-1439px | Standard desktops |
| Wide | 1440px-1919px | Wide screens (Figma design base) |
| Ultra | 1920px+ | 4K/Ultra-wide displays |

## 🏗️ Component Pattern Template

### Standard Structure

```css
/* ComponentName.css */

/* ==================== BASE STYLES (Mobile First) ==================== */
.component {
  /* Mobile default styles (0-767px) */
  padding: var(--spacing-4);
  font-size: var(--font-size-responsive-base);
}

.component__element {
  /* Mobile styles for child elements */
}

/* ==================== TABLET (768px+) ==================== */
@media (min-width: 768px) {
  .component {
    padding: var(--spacing-6);
  }
  
  .component__element {
    /* Tablet-specific styles */
  }
}

/* ==================== DESKTOP (1024px+) ==================== */
@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-8);
    max-width: var(--container-xl);
  }
  
  .component__element {
    /* Desktop-specific styles */
  }
}

/* ==================== WIDE (1440px+) ==================== */
@media (min-width: 1440px) {
  .component {
    /* Wide screen enhancements */
  }
}

/* ==================== ULTRA (1920px+) ==================== */
@media (min-width: 1920px) {
  .component {
    /* Ultra-wide optimizations */
  }
}
```

## ✅ Best Practices

### DO ✅

```css
/* ✅ Use CSS variables for breakpoints */
@media (min-width: var(--screen-md)) { }

/* ✅ Mobile-first approach */
.component {
  width: 100%; /* Mobile */
}
@media (min-width: 768px) {
  .component { width: 50%; } /* Tablet+ */
}

/* ✅ Use design tokens */
.component {
  padding: var(--spacing-responsive-md);
  font-size: var(--font-size-responsive-base);
}

/* ✅ Semantic comments */
/* ==================== TABLET (768px+) ==================== */
@media (min-width: 768px) { }

/* ✅ Use utility classes for common patterns */
<div className="container-responsive grid-responsive">
```

### DON'T ❌

```css
/* ❌ Hard-coded breakpoint values */
@media (min-width: 768px) { } /* Use var(--screen-md) */

/* ❌ Desktop-first approach */
.component { width: 1200px; }
@media (max-width: 768px) { width: 100%; }

/* ❌ Inconsistent breakpoints */
@media (min-width: 769px) { } /* Should be 768px */
@media (min-width: 1025px) { } /* Should be 1024px */

/* ❌ Magic numbers */
.component { padding: 1.375rem; } /* Use tokens */

/* ❌ Duplicate responsive logic */
/* Create a utility class instead */
```

## 🛠️ Refactoring Guide

### Step 1: Identify Current Breakpoints

```bash
# Find all media queries
grep -r "@media" src/ | grep -o "min-width: [0-9]*px\|max-width: [0-9]*px" | sort | uniq
```

### Step 2: Replace Hard-coded Values

**Before:**
```css
@media (max-width: 1024px) {
  .component { padding: 20px; }
}
```

**After:**
```css
@media (max-width: var(--screen-lg)) {
  .component { padding: var(--spacing-5); }
}
```

### Step 3: Convert to Mobile-First

**Before (Desktop-first):**
```css
.component {
  width: 1200px;
  padding: 60px;
}

@media (max-width: 1024px) {
  .component {
    width: 800px;
    padding: 40px;
  }
}

@media (max-width: 768px) {
  .component {
    width: 100%;
    padding: 20px;
  }
}
```

**After (Mobile-first):**
```css
.component {
  /* Mobile base */
  width: 100%;
  padding: var(--spacing-5);
}

@media (min-width: 768px) {
  .component {
    width: 800px;
    padding: var(--spacing-10);
  }
}

@media (min-width: 1024px) {
  .component {
    width: 1200px;
    padding: var(--spacing-15);
  }
}
```

### Step 4: Use Utility Classes

**Before:**
```css
.card-grid {
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**After:**
```tsx
// Just use the utility class
<div className="grid-responsive">
  {/* Cards */}
</div>
```

## 📦 Available Utilities

### Containers
- `.container-responsive` - Responsive container with auto margins

### Layouts
- `.grid-responsive` - 1→2→3 column grid
- `.grid-responsive-2` - 1→2 column grid
- `.grid-responsive-4` - 1→2→4 column grid
- `.flex-responsive` - Column→Row flex

### Visibility
- `.hide-mobile` - Hidden on mobile
- `.show-mobile-only` - Visible on mobile only
- `.show-tablet-only` - Visible on tablet only
- `.show-desktop-only` - Visible on desktop only

### Typography
- `.text-responsive-{size}` - Responsive text sizes

## 🔍 Testing Checklist

Test your responsive designs at these key breakpoints:

- [ ] **375px** - iPhone SE (Mobile)
- [ ] **768px** - iPad Portrait (Tablet)
- [ ] **1024px** - iPad Landscape / Small Desktop (Desktop)
- [ ] **1440px** - Standard Desktop (Wide - Figma base)
- [ ] **1920px** - Full HD Desktop (Ultra)

### Chrome DevTools

```
Cmd/Ctrl + Shift + M - Toggle device toolbar
Cmd/Ctrl + Shift + C - Inspect element
```

## 📊 Migration Progress

Track refactoring progress:

- [x] Phase 1: Create tokens & utilities ✅
- [x] Phase 1: Import in global CSS ✅
- [ ] Phase 2: Refactor homepage components
- [ ] Phase 3: Refactor page-level components
- [ ] Phase 4: Refactor remaining components
- [ ] Phase 5: Remove old breakpoint patterns
- [ ] Phase 6: Add linting rules

## 🎨 Example Implementations

### Example 1: Page Container

```css
.page-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

@media (min-width: 768px) {
  .page-container {
    padding: 0 var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .page-container {
    max-width: var(--container-xl);
    padding: 0 var(--spacing-8);
  }
}
```

### Example 2: Responsive Grid

```tsx
// Using utility class
<div className="grid-responsive">
  <Card />
  <Card />
  <Card />
</div>
```

### Example 3: Responsive Typography

```css
.heading {
  font-size: var(--font-size-responsive-2xl);
  line-height: 1.2;
  margin-bottom: var(--spacing-responsive-sm);
}

.body-text {
  font-size: var(--font-size-responsive-base);
  line-height: 1.6;
}
```

## 🚀 Quick Start

1. **For new components**: Use the component template above
2. **Use utilities**: Leverage existing utility classes when possible
3. **Follow mobile-first**: Start with mobile styles, add tablet/desktop
4. **Use tokens**: Reference CSS variables for breakpoints and spacing
5. **Test thoroughly**: Check all 5 key breakpoints

## 📚 Resources

- [Responsive Design Pattern Guide](./RESPONSIVE_PATTERN_GUIDE.md) - This file
- [Utilities README](./src/design-system/utilities/README.md) - Utility documentation
- [Breakpoints Tokens](./src/design-system/tokens/breakpoints.ts) - TypeScript tokens
- [Breakpoints CSS](./src/design-system/tokens/breakpoints.css) - CSS variables

## 🤝 Contributing

When adding new responsive styles:

1. Follow the mobile-first approach
2. Use standard breakpoints (768px, 1024px, 1440px, 1920px)
3. Use CSS variables for values
4. Add semantic comments
5. Consider creating a utility class for reusable patterns
6. Test at all 5 key breakpoints

---

**Last Updated:** October 2025
**Maintained By:** Development Team

