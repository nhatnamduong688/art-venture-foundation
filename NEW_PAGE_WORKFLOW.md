# New Page Workflow

## Quy trình thiết kế và phát triển Page mới

### 📋 TÓM TẮT QUY TRÌNH

Khi thiết kế thêm 1 page mới, bạn sẽ đi qua 6 bước:

```
1. Design (Figma)
   ↓
2. Phân tích Components
   ↓
3. Tạo/Reuse Components
   ↓
4. Xây dựng Page
   ↓
5. Add Route
   ↓
6. Test & Deploy
```

---

## 🎨 BƯỚC 1: DESIGN (Figma)

### Designer tạo design mới trong Figma

**Checklist cho Designer:**

- [ ] Design page layout trong Figma
- [ ] Đặt tên layers rõ ràng
- [ ] Use Design System tokens (colors, spacing, typography)
- [ ] Export assets nếu cần (images, icons)
- [ ] Annotate dimensions và spacing
- [ ] Share Figma link với developer

**Output:**

- Figma link: `https://www.figma.com/design/...?node-id=XXX`
- Exported assets (nếu có)

---

## 🔍 BƯỚC 2: PHÂN TÍCH COMPONENTS

### Developer phân tích page thành components

**Câu hỏi cần trả lời:**

#### 2.1. Component nào đã có sẵn?

Kiểm tra trong:

```
src/design-system/
├── atoms/           # Button, Typography, Input, Icon?
├── molecules/       # Card, SearchBox, LanguageToggle?
└── organisms/       # Header, Footer?

src/components/
├── sections/        # Hero, About, ArtCollection?
└── business/        # MuseumCard, Sidebar?
```

**Example:**

```
Page: "Blog Post Detail"
- ✅ Header → design-system/organisms/Header
- ✅ Typography → design-system/atoms/Typography
- ✅ Button → design-system/atoms/Button
- ❌ BlogPostContent → CẦN TẠO MỚI
- ❌ AuthorCard → CẦN TẠO MỚI
- ✅ Footer → design-system/organisms/Footer
```

#### 2.2. Component mới thuộc category nào?

**Design System (Generic, Reusable):**

- ✅ Dùng được cho nhiều projects
- ✅ Không có business logic
- ✅ Customizable via props
- **→ Tạo trong `src/design-system/`**

**Sections (Page-specific):**

- ✅ Chỉ dùng cho page này
- ✅ Có business logic của Art & Venture
- ✅ Kết hợp nhiều design system components
- **→ Tạo trong `src/components/sections/`**

**Business (Domain-specific):**

- ✅ Business logic phức tạp
- ✅ Dùng cho nhiều pages nhưng specific cho domain
- **→ Tạo trong `src/components/business/`**

#### 2.3. Quyết định Component Structure

**Example: Blog Page**

```
BlogPostPage (Page)
├── Header (Organism - đã có)
├── BlogHero (Section - tạo mới)
│   ├── Typography (Atom - đã có)
│   ├── Icon (Atom - đã có)
│   └── Image
├── BlogContent (Section - tạo mới)
│   └── Typography (Atom - đã có)
├── AuthorCard (Business - tạo mới)
│   ├── Card (Molecule - đã có)
│   ├── Typography (Atom - đã có)
│   └── Button (Atom - đã có)
├── RelatedPosts (Section - tạo mới)
│   └── Card (Molecule - đã có)
└── Footer (Organism - đã có)
```

---

## 🛠️ BƯỚC 3: TẠO/REUSE COMPONENTS

### 3.1. Reuse Existing Components

**Import từ Design System:**

```typescript
// Atoms
import { Button, Typography, Icon, Input } from "../design-system/atoms";

// Molecules
import { Card, SearchBox } from "../design-system/molecules";

// Organisms
import { Header, Footer } from "../design-system/organisms";
```

**Import từ Components:**

```typescript
// Sections
import { Hero, About } from "../components/sections";

// Business
import { MuseumCard, Sidebar } from "../components/business";
```

### 3.2. Tạo Components Mới

#### Option A: Tạo Section Component (Most Common)

**File Structure:**

```
src/components/sections/BlogHero/
├── BlogHero.css
├── index.tsx
└── (optional) BlogHero.test.tsx
```

**Template Code:**

```typescript
// src/components/sections/BlogHero/index.tsx
import React from "react";
import { Typography, Button, Icon } from "../../../design-system/atoms";
import "./BlogHero.css";

interface BlogHeroProps {
  title: string;
  author: string;
  publishedDate: string;
  readTime: string;
  featuredImage: string;
}

const BlogHero: React.FC<BlogHeroProps> = ({
  title,
  author,
  publishedDate,
  readTime,
  featuredImage,
}) => {
  return (
    <section className="blog-hero">
      <div className="blog-hero__container">
        <div className="blog-hero__content">
          <Typography variant="display-lg" as="h1" className="blog-hero__title">
            {title}
          </Typography>

          <div className="blog-hero__meta">
            <Typography variant="body-sm" color="secondary">
              By {author} • {publishedDate} • {readTime} min read
            </Typography>
          </div>

          <Button
            variant="outline"
            size="sm"
            leftIcon={<Icon name="share" size="sm" />}
          >
            Share
          </Button>
        </div>

        <div className="blog-hero__image">
          <img src={featuredImage} alt={title} />
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
```

**CSS Template:**

```css
/* src/components/sections/BlogHero/BlogHero.css */
.blog-hero {
  padding: var(--spacing-12) var(--spacing-8);
  background: var(--color-bg-main);
}

.blog-hero__container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-8);
  align-items: center;
}

.blog-hero__title {
  margin-bottom: var(--spacing-4);
}

.blog-hero__meta {
  margin-bottom: var(--spacing-6);
}

.blog-hero__image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
}

/* Responsive */
@media (max-width: 768px) {
  .blog-hero__container {
    grid-template-columns: 1fr;
  }
}
```

#### Option B: Tạo Business Component

**File Structure:**

```
src/components/business/AuthorCard/
├── AuthorCard.css
└── index.tsx
```

**Template Code:**

```typescript
// src/components/business/AuthorCard/index.tsx
import React from "react";
import { Card } from "../../../design-system/molecules";
import { Typography, Button, Icon } from "../../../design-system/atoms";
import "./AuthorCard.css";

interface AuthorCardProps {
  name: string;
  bio: string;
  avatar: string;
  articleCount: number;
}

const AuthorCard: React.FC<AuthorCardProps> = ({
  name,
  bio,
  avatar,
  articleCount,
}) => {
  return (
    <Card className="author-card" padding="lg">
      <div className="author-card__header">
        <img src={avatar} alt={name} className="author-card__avatar" />
        <div>
          <Typography variant="h4" as="h3">
            {name}
          </Typography>
          <Typography variant="body-sm" color="secondary">
            {articleCount} articles
          </Typography>
        </div>
      </div>

      <Typography variant="body-md" className="author-card__bio">
        {bio}
      </Typography>

      <Button
        variant="ghost"
        size="sm"
        rightIcon={<Icon name="arrow-right" size="sm" />}
      >
        View Profile
      </Button>
    </Card>
  );
};

export default AuthorCard;
```

### 3.3. Update Barrel Exports

**Add to `src/components/sections/index.ts`:**

```typescript
export { default as BlogHero } from "./BlogHero";
export { default as BlogContent } from "./BlogContent";
export { default as RelatedPosts } from "./RelatedPosts";
```

**Add to `src/components/business/index.ts`:**

```typescript
export { default as AuthorCard } from "./AuthorCard";
```

---

## 📄 BƯỚC 4: XÂY DỰNG PAGE

### 4.1. Tạo Page Component

**File Structure:**

```
src/pages/BlogPostPage/
├── BlogPostPage.css
├── index.tsx
└── (optional) BlogPostPage.test.tsx
```

**Template Code:**

```typescript
// src/pages/BlogPostPage/index.tsx
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../design-system/organisms";
import { BlogHero, BlogContent, RelatedPosts } from "../../components/sections";
import { AuthorCard } from "../../components/business";
import "./BlogPostPage.css";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  author: {
    name: string;
    bio: string;
    avatar: string;
    articleCount: number;
  };
  publishedDate: string;
  readTime: number;
  featuredImage: string;
}

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blog post data
    // Replace with actual API call
    const fetchPost = async () => {
      try {
        // const response = await fetch(`/api/blog/${id}`);
        // const data = await response.json();
        // setPost(data);

        // Mock data for now
        setPost({
          id: id || "1",
          title: "The Art of Modern Design",
          content: "Lorem ipsum...",
          author: {
            name: "John Doe",
            bio: "Art curator and designer",
            avatar: "/images/avatar.jpg",
            articleCount: 15,
          },
          publishedDate: "2024-01-15",
          readTime: 5,
          featuredImage: "/images/featured.jpg",
        });
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (!post) {
    return <div className="error">Post not found</div>;
  }

  return (
    <>
      <BlogHero
        title={post.title}
        author={post.author.name}
        publishedDate={post.publishedDate}
        readTime={post.readTime}
        featuredImage={post.featuredImage}
      />

      <div className="blog-post-page">
        <div className="blog-post-page__main">
          <BlogContent content={post.content} />
        </div>

        <aside className="blog-post-page__sidebar">
          <AuthorCard {...post.author} />
          <RelatedPosts currentPostId={post.id} />
        </aside>
      </div>

      <Footer />
    </>
  );
};

export default BlogPostPage;
```

**CSS Template:**

```css
/* src/pages/BlogPostPage/BlogPostPage.css */
.blog-post-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: var(--spacing-12) var(--spacing-8);
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: var(--spacing-8);
}

.blog-post-page__main {
  /* Main content area */
}

.blog-post-page__sidebar {
  /* Sidebar for author card and related posts */
  display: flex;
  flex-direction: column;
  gap: var(--spacing-6);
}

.loading,
.error {
  min-height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--text-lg);
  color: var(--color-text-secondary);
}

/* Responsive */
@media (max-width: 968px) {
  .blog-post-page {
    grid-template-columns: 1fr;
  }
}
```

---

## 🛣️ BƯỚC 5: ADD ROUTE

### 5.1. Add Lazy Import in AppRouter

```typescript
// src/AppRouter.tsx

// Add with other page imports
const BlogPostPage = lazy(() => import("./pages/BlogPostPage"));
```

### 5.2. Add Route

```typescript
// src/AppRouter.tsx

<Routes>
  {/* Existing routes */}
  <Route path="/" element={<HomePage />} />
  <Route path="/collection" element={<CollectionPage />} />

  {/* NEW: Blog route */}
  <Route path="/blog/:id" element={<BlogPostPage />} />

  {/* Other routes */}
</Routes>
```

### 5.3. Add Navigation Link (if needed)

```typescript
// src/design-system/organisms/Header/index.tsx

const navItems = [
  { label: "Home", path: "/" },
  { label: "Collection", path: "/collection" },
  { label: "Blog", path: "/blog" }, // NEW
  // ... other items
];
```

---

## ✅ BƯỚC 6: TEST & DEPLOY

### 6.1. Local Testing

```bash
# Run dev server
npm run dev

# Visit new page
http://localhost:5173/blog/1

# Test responsive
# - Desktop (1440px)
# - Tablet (768px)
# - Mobile (375px)

# Test navigation
# - Click all links
# - Back button works
# - Direct URL access works
```

### 6.2. Build Test

```bash
# Test production build
npm run build

# Preview production
npm run preview
```

### 6.3. Checklist

**Functionality:**

- [ ] Page loads without errors
- [ ] All components render correctly
- [ ] Data fetching works
- [ ] Navigation works
- [ ] Responsive design works
- [ ] Loading states work
- [ ] Error states work

**Performance:**

- [ ] Images optimized
- [ ] Lazy loading implemented
- [ ] No console errors
- [ ] Fast page load

**Design:**

- [ ] Matches Figma design
- [ ] Colors correct
- [ ] Typography correct
- [ ] Spacing correct
- [ ] Responsive breakpoints work

**Code Quality:**

- [ ] TypeScript types correct
- [ ] No linter errors
- [ ] Components reused where possible
- [ ] Clean code structure

### 6.4. Commit & Deploy

```bash
# Add all changes
git add .

# Commit with descriptive message
git commit -m "feat: add Blog Post detail page

- Created BlogHero, BlogContent, RelatedPosts sections
- Created AuthorCard business component
- Added BlogPostPage with route /blog/:id
- Implemented responsive design
- Added loading and error states"

# Push to GitHub
git push origin main

# Deploy to Vercel (auto-deploys from GitHub)
# Or manually:
vercel deploy --prod
```

---

## 📊 EXAMPLE: Complete Workflow

### Scenario: Tạo "Gallery Exhibition Detail Page"

**1. Design (Figma):**

- Designer tạo design: https://figma.com/...?node-id=gallery-detail
- Có sections: Hero, Gallery Grid, Exhibition Info, Ticket Booking

**2. Phân tích:**

```
✅ Reuse:
- Header (Organism)
- Footer (Organism)
- Typography (Atom)
- Button (Atom)
- Card (Molecule)

❌ Tạo mới:
- GalleryDetailHero (Section)
- GalleryGrid (Section)
- ExhibitionInfo (Section)
- TicketBookingForm (Business)
```

**3. Tạo Components:**

```bash
# Create sections
src/components/sections/GalleryDetailHero/
src/components/sections/GalleryGrid/
src/components/sections/ExhibitionInfo/

# Create business component
src/components/business/TicketBookingForm/
```

**4. Xây dựng Page:**

```typescript
// src/pages/GalleryDetailPage/index.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Footer } from "../../design-system/organisms";
import {
  GalleryDetailHero,
  GalleryGrid,
  ExhibitionInfo,
} from "../../components/sections";
import { TicketBookingForm } from "../../components/business";

const GalleryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <GalleryDetailHero exhibitionId={id} />
      <ExhibitionInfo exhibitionId={id} />
      <GalleryGrid exhibitionId={id} />
      <TicketBookingForm exhibitionId={id} />
      <Footer />
    </>
  );
};

export default GalleryDetailPage;
```

**5. Add Route:**

```typescript
// src/AppRouter.tsx
const GalleryDetailPage = lazy(() => import("./pages/GalleryDetailPage"));

<Route path="/gallery/:id" element={<GalleryDetailPage />} />;
```

**6. Test & Deploy:**

```bash
npm run dev
# Test: http://localhost:5173/gallery/123

npm run build
git add .
git commit -m "feat: add Gallery Exhibition Detail page"
git push origin main
```

---

## 🎯 BEST PRACTICES

### Component Creation

1. **Always start with Design System**

   - Check if component exists
   - Reuse before creating

2. **Think Reusability**

   - Generic → Design System
   - Specific → Components

3. **Follow Naming Conventions**

   - PascalCase for components
   - kebab-case for CSS classes
   - Clear, descriptive names

4. **Use TypeScript**

   - Define interfaces for props
   - Type all data

5. **Mobile-First CSS**
   - Design for mobile first
   - Add desktop styles with media queries

### File Organization

```
✅ Good:
src/components/sections/BlogHero/
├── index.tsx              # Default export
├── BlogHero.css           # Styles
└── BlogHero.test.tsx      # Tests (optional)

❌ Bad:
src/components/
├── BlogHero.tsx           # All in root
├── BlogHero.css
└── BlogHero2.tsx          # Duplicate/unclear naming
```

### Import Order

```typescript
// 1. React imports
import React, { useState, useEffect } from "react";

// 2. Third-party libraries
import { useParams } from "react-router-dom";

// 3. Design System
import { Button, Typography } from "../../design-system/atoms";
import { Card } from "../../design-system/molecules";
import { Header, Footer } from "../../design-system/organisms";

// 4. Components
import { Hero, About } from "../../components/sections";
import { MuseumCard } from "../../components/business";

// 5. Utils/Helpers
import { formatDate } from "../../utils/dateHelpers";

// 6. Types
import type { BlogPost } from "../../types";

// 7. Styles (always last)
import "./MyPage.css";
```

---

## 🚀 QUICK REFERENCE

### Checklist khi tạo Page mới

- [ ] 1. Có Figma design
- [ ] 2. Phân tích components (reuse vs create)
- [ ] 3. Tạo sections trong `src/components/sections/`
- [ ] 4. Tạo business components trong `src/components/business/`
- [ ] 5. Update barrel exports (`index.ts`)
- [ ] 6. Tạo Page trong `src/pages/YourPage/`
- [ ] 7. Add lazy import trong `AppRouter.tsx`
- [ ] 8. Add route trong `<Routes>`
- [ ] 9. Test locally (`npm run dev`)
- [ ] 10. Test build (`npm run build`)
- [ ] 11. Commit & push
- [ ] 12. Deploy

### Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview production build
npm run storybook        # View component library

# Testing
npm run test            # Run tests
npm run lint            # Check code quality

# Deployment
git add .
git commit -m "feat: add [page name]"
git push origin main
vercel deploy --prod    # Manual deploy
```

---

## 📚 Related Documentation

- [COMPONENT_REFACTOR_STRATEGY.md](./COMPONENT_REFACTOR_STRATEGY.md)
- [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md)
- [MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
- [ARCHITECTURE.md](./ARCHITECTURE.md)

---

## ❓ FAQ

**Q: Component nên tạo trong sections hay business?**
A:

- `sections/` - Chỉ dùng cho 1 page cụ thể
- `business/` - Dùng cho nhiều pages, có business logic

**Q: Khi nào tạo component mới trong design-system?**
A:

- Khi component generic, dùng được cho nhiều projects
- Không có business logic
- Highly reusable

**Q: Làm sao biết component đã tồn tại?**
A:

- Check `src/design-system/` folders
- Check `src/components/` folders
- Run Storybook: `npm run storybook`
- Read DESIGN_SYSTEM_GUIDE.md

**Q: Page cần fetch data từ API?**
A:

- Use `useEffect` hook
- Create API service trong `src/api/`
- Handle loading và error states
- See examples trong existing pages

**Q: Responsive design thế nào?**
A:

- Mobile-first approach
- Use design tokens: `var(--spacing-X)`, `var(--text-X)`
- Breakpoints: `@media (max-width: 768px)`
- Test trên nhiều devices
