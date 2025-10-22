# Responsive Utilities

Reusable CSS utilities for responsive design following mobile-first approach.

## Usage

### Import in your CSS files

```css
@import "../design-system/utilities/responsive.css";
```

Or import in your main `index.css`:

```css
@import "./design-system/tokens/breakpoints.css";
@import "./design-system/utilities/responsive.css";
```

## Available Utilities

### Containers

- `.container-responsive` - Responsive container with auto margins and padding

### Grids

- `.grid-responsive` - 1 column → 2 columns (tablet) → 3 columns (desktop)
- `.grid-responsive-2` - 1 column → 2 columns (tablet)
- `.grid-responsive-4` - 1 column → 2 columns (mobile) → 4 columns (desktop)

### Flex

- `.flex-responsive` - Column (mobile) → Row (tablet)

### Visibility

- `.hide-mobile` - Hidden on mobile, visible on tablet+
- `.hide-tablet` - Hidden on tablet only
- `.hide-desktop` - Hidden on desktop+
- `.show-mobile-only` - Visible on mobile only
- `.show-tablet-only` - Visible on tablet only
- `.show-desktop-only` - Visible on desktop only

### Spacing

- `.spacing-responsive-y` - Responsive vertical padding
- `.spacing-responsive-x` - Responsive horizontal padding

### Text

- `.text-responsive-sm` - Small responsive text
- `.text-responsive-base` - Base responsive text
- `.text-responsive-lg` - Large responsive text
- `.text-responsive-xl` - Extra large responsive text
- `.text-responsive-2xl` - 2X large responsive text

## Breakpoints

| Name    | Min Width | Max Width | Description       |
| ------- | --------- | --------- | ----------------- |
| Mobile  | 0         | 767px     | Phone devices     |
| Tablet  | 768px     | 1023px    | Tablet devices    |
| Desktop | 1024px    | 1439px    | Standard desktops |
| Wide    | 1440px    | 1919px    | Wide screens      |
| Ultra   | 1920px    | -         | 4K/Ultra-wide     |

## CSS Variables

Use these in your custom components:

```css
.my-component {
  padding: var(--spacing-responsive-md);
  font-size: var(--font-size-responsive-base);
  max-width: var(--container-xl);
}

@media (min-width: var(--screen-md)) {
  .my-component {
    /* Tablet styles */
  }
}

@media (min-width: var(--screen-lg)) {
  .my-component {
    /* Desktop styles */
  }
}
```

## Pattern Template

Follow this pattern for consistent responsive styles:

```css
/* Component.css */

/* ==================== BASE STYLES (Mobile) ==================== */
.component {
  /* Mobile-first base styles */
  padding: var(--spacing-4);
  font-size: var(--font-size-responsive-base);
}

/* ==================== TABLET (768px+) ==================== */
@media (min-width: 768px) {
  .component {
    padding: var(--spacing-6);
  }
}

/* ==================== DESKTOP (1024px+) ==================== */
@media (min-width: 1024px) {
  .component {
    padding: var(--spacing-8);
    max-width: var(--container-xl);
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
    /* Ultra-wide screen enhancements */
  }
}
```

## Best Practices

1. **Mobile-first**: Start with mobile styles, then add media queries for larger screens
2. **Use CSS variables**: Reference breakpoint variables instead of hard-coded values
3. **Semantic naming**: Use mobile/tablet/desktop instead of xs/sm/md/lg when possible
4. **Consistent gaps**: Use spacing tokens (--spacing-4, --spacing-6, etc.)
5. **Test at breakpoints**: Test at 375px, 768px, 1024px, 1440px, 1920px
6. **Progressive enhancement**: Ensure mobile works first, then enhance for larger screens

## Examples

### Responsive Card Grid

```css
.card-grid {
  display: grid;
  gap: var(--spacing-4);
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .card-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-6);
  }
}

@media (min-width: 1024px) {
  .card-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Responsive Typography

```css
.heading {
  font-size: var(--font-size-responsive-xl);
  line-height: 1.2;
}

.body {
  font-size: var(--font-size-responsive-base);
  line-height: 1.6;
}
```

### Responsive Container

```css
.page-container {
  width: 100%;
  margin: 0 auto;
  padding: 0 var(--spacing-4);
}

@media (min-width: 1024px) {
  .page-container {
    max-width: var(--container-xl);
    padding: 0 var(--spacing-8);
  }
}
```
