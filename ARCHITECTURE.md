# 🏗️ Architecture Documentation

## 📋 Table of Contents

1. [Overview](#overview)
2. [Tech Stack](#tech-stack)
3. [Project Structure](#project-structure)
4. [Design Patterns](#design-patterns)
5. [State Management](#state-management)
6. [Routing](#routing)
7. [API Layer](#api-layer)
8. [Performance](#performance)
9. [Best Practices](#best-practices)

---

## 🎯 Overview

Art & Venture Foundation is a modern React application built with TypeScript, featuring a comprehensive design system based on Atomic Design principles.

### Key Architectural Decisions:

- ✅ **TypeScript** - Type safety and better developer experience
- ✅ **Atomic Design** - Scalable component architecture
- ✅ **Design Tokens** - Centralized design decisions
- ✅ **Zustand** - Lightweight state management
- ✅ **Code Splitting** - Optimized bundle sizes
- ✅ **Custom Hooks** - Reusable logic
- ✅ **API Abstraction** - Clean data layer

---

## 🛠️ Tech Stack

### Core:

- **React 19.2.0** - UI library
- **TypeScript 4.9.5** - Type safety
- **Vite 7.1.9** - Build tool & dev server

### Routing:

- **React Router DOM 7.9.4** - Client-side routing

### State Management:

- **Zustand 5.0.8** - Global state
- **React Hooks** - Local state

### Animation:

- **Framer Motion 12.23.22** - Animations & transitions

### Testing:

- **Vitest** - Unit & integration tests
- **React Testing Library** - Component testing

### Styling:

- **CSS Modules** - Scoped styles
- **CSS Custom Properties** - Design tokens

---

## 📁 Project Structure

```
src/
├── design-system/          # Design System (Atomic Design)
│   ├── tokens/             # Design tokens
│   │   ├── colors.ts
│   │   ├── typography.ts
│   │   ├── spacing.ts
│   │   └── breakpoints.ts
│   ├── atoms/              # Atomic components
│   │   ├── Button/
│   │   ├── Input/
│   │   └── Typography/
│   ├── molecules/          # Molecule components
│   │   ├── Card/
│   │   ├── LanguageToggle/
│   │   └── SearchBox/
│   ├── organisms/          # Organism components
│   │   ├── Header/
│   │   └── Footer/
│   └── index.ts
│
├── components/             # Legacy components (to be migrated)
│   ├── Hero/
│   ├── About/
│   ├── ArtCollection/
│   └── ...
│
├── pages/                  # Page components
│   ├── HomePage/
│   ├── CollectionPage/
│   ├── ArtistsPage/
│   └── ...
│
├── hooks/                  # Custom React hooks
│   ├── useMediaQuery.ts
│   ├── useIntersectionObserver.ts
│   └── useLocalStorage.ts
│
├── store/                  # Global state management
│   ├── useAppStore.ts      # Main app store
│   └── cartStore.ts        # Cart store (if needed)
│
├── api/                    # API layer
│   ├── client.ts           # API client
│   ├── artworks.ts         # Artwork endpoints
│   └── index.ts
│
├── config/                 # Configuration
│   └── env.ts              # Environment variables
│
├── utils/                  # Utility functions
│   └── figmaAssets.ts
│
├── App.tsx                 # Root component
├── AppRouter.tsx           # Route configuration
├── index.tsx               # Entry point
└── index.css               # Global styles
```

---

## 🎨 Design Patterns

### 1. Atomic Design Pattern

Components are organized hierarchically:

```
Atoms → Molecules → Organisms → Templates → Pages
```

**Atoms** (Indivisible)

```tsx
<Button variant="primary">Click</Button>
<Typography variant="h1">Title</Typography>
<Input type="text" />
```

**Molecules** (Simple Groups)

```tsx
<Card>
  <Card.Image />
  <Card.Body>
    <Typography />
    <Button />
  </Card.Body>
</Card>
```

**Organisms** (Complex)

```tsx
<Header>
  <Navigation />
  <SearchBox />
  <LanguageToggle />
</Header>
```

**Templates** (Layouts)

```tsx
<MainLayout>
  <Sidebar />
  <Header />
  <Content />
  <Footer />
</MainLayout>
```

**Pages** (Instances)

```tsx
<HomePage>
  <Hero />
  <ArtCollection />
  <NewsEvents />
</HomePage>
```

### 2. Component Composition

Prefer composition over configuration:

```tsx
// ❌ Configuration (Too many props)
<Card
  title="Title"
  description="Desc"
  image="img.jpg"
  showButton={true}
  buttonText="View"
  buttonVariant="primary"
/>

// ✅ Composition (Flexible)
<Card>
  <Card.Image src="img.jpg" />
  <Card.Body>
    <Typography variant="h3">Title</Typography>
    <Typography variant="body-md">Description</Typography>
  </Card.Body>
  <Card.Footer>
    <Button variant="primary">View</Button>
  </Card.Footer>
</Card>
```

### 3. Render Props & Custom Hooks

Extract reusable logic:

```tsx
// Custom Hook
const useArtworks = () => {
  const [artworks, setArtworks] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchArtworks().then(setArtworks);
  }, []);

  return { artworks, loading };
};

// Usage
const ArtworkGrid = () => {
  const { artworks, loading } = useArtworks();

  if (loading) return <Loading />;

  return artworks.map((artwork) => <ArtworkCard {...artwork} />);
};
```

---

## 🗄️ State Management

### Global State (Zustand)

```tsx
// src/store/useAppStore.ts
import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

interface AppState {
  language: "en" | "vi";
  theme: "light" | "dark";
  setLanguage: (lang: "en" | "vi") => void;
  setTheme: (theme: "light" | "dark") => void;
}

export const useAppStore = create<AppState>()(
  devtools(
    persist(
      (set) => ({
        language: "en",
        theme: "light",
        setLanguage: (language) => set({ language }),
        setTheme: (theme) => set({ theme }),
      }),
      { name: "av-app-storage" }
    )
  )
);

// Usage
const Header = () => {
  const { language, setLanguage } = useAppStore();
  return (
    <LanguageToggle currentLanguage={language} onLanguageChange={setLanguage} />
  );
};
```

### Local State (React Hooks)

```tsx
// Component-specific state
const [isOpen, setIsOpen] = useState(false);
const [formData, setFormData] = useState({ name: "", email: "" });
```

### State Selection (Performance)

```tsx
// ❌ Re-renders on any state change
const state = useAppStore();

// ✅ Only re-renders when language changes
const language = useAppStore((state) => state.language);
```

---

## 🔀 Routing

### Code Splitting

```tsx
// AppRouter.tsx
import { lazy, Suspense } from "react";

const HomePage = lazy(() => import("./pages/HomePage"));
const CollectionPage = lazy(() => import("./pages/CollectionPage"));

const AppRouter = () => (
  <Router>
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
      </Routes>
    </Suspense>
  </Router>
);
```

### Route Organization

```tsx
// Main routes
/ → HomePage
/collection → CollectionPage
/artists → ArtistsPage
/artists/:id → ArtistDetailPage
/news → EventsPage
/news/:id → EventDetailPage
/knowledge → KnowledgePage
/knowledge/:id → KnowledgeDetailPage
```

---

## 🌐 API Layer

### API Client

```tsx
// api/client.ts
export class ApiClient {
  async get<T>(endpoint: string): Promise<T> {
    const response = await fetch(`${baseURL}${endpoint}`);
    return response.json();
  }

  async post<T>(endpoint: string, data: any): Promise<T> {
    const response = await fetch(`${baseURL}${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
    });
    return response.json();
  }
}

export const apiClient = new ApiClient();
```

### API Modules

```tsx
// api/artworks.ts
export const artworksAPI = {
  getAll: () => apiClient.get("/artworks"),
  getById: (id) => apiClient.get(`/artworks/${id}`),
  search: (query) => apiClient.get(`/artworks/search?q=${query}`),
};

// Usage
const artworks = await artworksAPI.getAll();
```

### Error Handling

```tsx
try {
  const data = await artworksAPI.getAll();
  setArtworks(data);
} catch (error) {
  if (error.status === 404) {
    // Handle not found
  } else if (error.status === 500) {
    // Handle server error
  }
}
```

---

## ⚡ Performance

### 1. Code Splitting

```tsx
// Lazy load routes
const CollectionPage = lazy(() => import("./pages/CollectionPage"));

// Lazy load heavy components
const Chart = lazy(() => import("./components/Chart"));
```

### 2. Memoization

```tsx
// Memoize expensive calculations
const sortedArtworks = useMemo(
  () => artworks.sort((a, b) => a.year - b.year),
  [artworks]
);

// Memoize components
const ArtworkCard = memo(({ artwork }) => <Card>...</Card>);
```

### 3. Virtual Scrolling

```tsx
// For large lists
import { useVirtualizer } from "@tanstack/react-virtual";

const rowVirtualizer = useVirtualizer({
  count: artworks.length,
  getScrollElement: () => parentRef.current,
  estimateSize: () => 200,
});
```

### 4. Image Optimization

```tsx
<img
  src="artwork.jpg"
  alt="Artwork"
  loading="lazy" // Lazy load
  width="400" // Prevent layout shift
  height="300"
/>
```

### 5. Bundle Analysis

```bash
npm run analyze

# Output:
# index.js: 648.69 kB → 109.70 kB gzipped
# Suggestions:
# - Code split large dependencies
# - Tree shake unused imports
# - Lazy load routes
```

---

## 🎯 Best Practices

### 1. TypeScript

```tsx
// ✅ Define interfaces
interface ArtworkProps {
  id: string;
  title: string;
  artist: string;
  imageUrl: string;
}

// ✅ Use type inference
const [count, setCount] = useState(0); // Inferred as number

// ✅ Avoid 'any'
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  // ...
};
```

### 2. Component Structure

```tsx
// ✅ Good component structure
interface Props {
  title: string;
  onSubmit: (data: FormData) => void;
}

export const MyComponent: React.FC<Props> = ({ title, onSubmit }) => {
  // 1. Hooks at top
  const [state, setState] = useState();
  const { data } = useQuery();

  // 2. Derived values
  const isValid = state.length > 0;

  // 3. Event handlers
  const handleClick = () => {
    // ...
  };

  // 4. Effects
  useEffect(() => {
    // ...
  }, []);

  // 5. Render
  return <div>{/* JSX */}</div>;
};
```

### 3. File Organization

```
ComponentName/
├── index.ts              # Export
├── ComponentName.tsx     # Component
├── ComponentName.css     # Styles
├── ComponentName.test.tsx # Tests
└── types.ts              # TypeScript types (if complex)
```

### 4. Naming Conventions

```tsx
// Components: PascalCase
const UserProfile = () => {};

// Hooks: camelCase with 'use' prefix
const useUserData = () => {};

// Constants: UPPER_SNAKE_CASE
const MAX_ITEMS = 10;

// Functions: camelCase
const calculateTotal = () => {};

// Files: Match component name
UserProfile.tsx;
useUserData.ts;
```

### 5. Import Organization

```tsx
// 1. External dependencies
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 2. Internal dependencies (absolute imports)
import { Button, Typography } from "@/design-system/atoms";
import { useAppStore } from "@/store/useAppStore";

// 3. Relative imports
import { helper } from "./utils";
import "./ComponentName.css";
```

---

## 🔒 Security

### Environment Variables

```typescript
// ✅ Never commit sensitive data
// .env.local (git ignored)
VITE_API_KEY = secret - key;

// ✅ Use config layer
import { env } from "@/config/env";
const apiKey = env.apiKey;
```

### Input Sanitization

```tsx
// ✅ Sanitize user input
import DOMPurify from "dompurify";

const clean = DOMPurify.sanitize(userInput);
```

---

## 📊 Metrics & Monitoring

### Performance Metrics

```tsx
// Web Vitals
import { getCLS, getFID, getFCP, getLCP, getTTFB } from "web-vitals";

getCLS(console.log);
getFID(console.log);
getFCP(console.log);
getLCP(console.log);
getTTFB(console.log);
```

### Error Boundary

```tsx
class ErrorBoundary extends React.Component {
  componentDidCatch(error, errorInfo) {
    // Log to error reporting service
    logErrorToService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorPage />;
    }
    return this.props.children;
  }
}
```

---

## 🚀 Deployment

### Build Process

```bash
# Development
npm run dev

# Type check
npm run type-check

# Build
npm run build

# Preview production build
npm run preview
```

### Deployment Platforms

- **Vercel** - Auto-deploy on git push
- **Netlify** - Alternative CDN
- **AWS S3 + CloudFront** - Custom setup

---

## 📚 Additional Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/)
- [Zustand](https://github.com/pmndrs/zustand)

---

**Last Updated:** October 20, 2025  
**Version:** 1.0.0
