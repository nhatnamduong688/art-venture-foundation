# 🔝 All Ways to Scroll to Top on Navigation

Tổng hợp các cách để scroll về đầu trang khi navigate trong React Router.

---

## ✅ Option 1: Custom Component with useLocation (CURRENT)

**File**: `ScrollToTopOnNavigate.tsx`

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};
```

**Pros**:
- ✅ Simple và dễ hiểu
- ✅ Works với tất cả React Router versions
- ✅ Full control
- ✅ Instant scroll (không smooth)

**Cons**:
- ❌ Phải tạo custom component
- ❌ Scroll mọi lúc (không có exceptions)

**Usage**:
```typescript
<Router>
  <ScrollToTopOnNavigate />
  <Routes>...</Routes>
</Router>
```

---

## Option 2: Inline trong AppRouter

**File**: `AppRouter.tsx`

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AppRouter = () => {
  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <Routes>...</Routes>
  );
};
```

**Pros**:
- ✅ Không cần file riêng
- ✅ Compact code
- ✅ Same behavior as Option 1

**Cons**:
- ❌ Mix logic vào Router component
- ❌ Ít reusable hơn

---

## Option 3: Smooth Scroll với Delay

**File**: `ScrollToTopOnNavigate.tsx` (enhanced)

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = ({ smooth = false, delay = 0 }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: smooth ? 'smooth' : 'auto'
      });
    };
    
    if (delay > 0) {
      setTimeout(scrollToTop, delay);
    } else {
      scrollToTop();
    }
  }, [pathname, smooth, delay]);
  
  return null;
};
```

**Pros**:
- ✅ Configurable (smooth/instant)
- ✅ Có thể delay (wait for content load)
- ✅ Flexible

**Cons**:
- ❌ More complex
- ❌ Smooth scroll có thể chậm

**Usage**:
```typescript
<ScrollToTopOnNavigate smooth={true} delay={100} />
```

---

## Option 4: Scroll với Exceptions

Scroll to top except for specific routes:

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTopOnNavigate = ({ excludePaths = [] }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Don't scroll for excluded paths
    if (excludePaths.some(path => pathname.startsWith(path))) {
      return;
    }
    
    window.scrollTo(0, 0);
  }, [pathname, excludePaths]);
  
  return null;
};
```

**Usage**:
```typescript
<ScrollToTopOnNavigate excludePaths={['/modal', '/popup']} />
```

**Use Case**:
- Modal routes
- Popup pages
- Overlay content

---

## Option 5: Scroll to Element (Not Top)

Scroll to specific element instead of top:

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToElement = ({ selector = '#main-content' }) => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, selector]);
  
  return null;
};
```

**Usage**:
```typescript
<ScrollToElement selector="#content" />
```

**Use Case**:
- Skip header
- Jump to main content
- Accessibility (skip nav)

---

## Option 6: Hash Link Scroll

Preserve hash scrolling (for anchor links):

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const { pathname, hash } = useLocation();
  
  useEffect(() => {
    if (hash) {
      // Scroll to hash element
      const element = document.getElementById(hash.slice(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    
    // Default: scroll to top
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  
  return null;
};
```

**Supports**:
```
/artists#featured     → scroll to #featured
/artists/:id#bio      → scroll to #bio
/artists              → scroll to top
```

---

## Option 7: Remember Scroll Position

Restore scroll position khi back (like browser behavior):

```typescript
import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollManager = () => {
  const { pathname } = useLocation();
  const scrollPositions = useRef({});
  
  useEffect(() => {
    // Save current position before unmount
    return () => {
      scrollPositions.current[pathname] = window.scrollY;
    };
  }, [pathname]);
  
  useEffect(() => {
    // Restore or scroll to top
    const savedPosition = scrollPositions.current[pathname];
    if (savedPosition !== undefined) {
      window.scrollTo(0, savedPosition);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);
  
  return null;
};
```

**Behavior**:
- Forward navigation → scroll to top
- Back navigation → restore position

---

## Option 8: Conditional per Route

Different scroll behavior per route:

```typescript
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SmartScroll = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    // Artists list: don't scroll (preserve position)
    if (pathname === '/artists') {
      return;
    }
    
    // Detail pages: scroll to top
    if (pathname.startsWith('/artists/')) {
      window.scrollTo(0, 0);
      return;
    }
    
    // Default: scroll to top
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};
```

---

## 📊 Comparison Table

| Option | Complexity | Flexibility | Best For |
|--------|-----------|-------------|----------|
| **1. useLocation (Current)** | ⭐ Simple | ⭐⭐ | General use |
| 2. Inline | ⭐ Simple | ⭐ | Small apps |
| 3. Smooth + Delay | ⭐⭐ Medium | ⭐⭐⭐ | Better UX |
| 4. Exceptions | ⭐⭐ Medium | ⭐⭐⭐ | Modals/Popups |
| 5. Element Scroll | ⭐⭐ Medium | ⭐⭐ | Accessibility |
| 6. Hash Support | ⭐⭐⭐ Complex | ⭐⭐⭐⭐ | Anchor links |
| 7. Remember Position | ⭐⭐⭐⭐ Complex | ⭐⭐⭐⭐ | Browser-like |
| 8. Conditional | ⭐⭐ Medium | ⭐⭐⭐⭐ | Custom logic |

---

## 🎯 Recommendation

### For Your Case (Artists Detail):
**Current solution (Option 1) is PERFECT** ✅

**Why**:
- Simple implementation
- Works immediately
- No complexity needed
- Standard pattern

### If You Want Smooth Scroll:
Use **Option 3** with smooth behavior.

### If You Have Hash Links:
Use **Option 6** to support anchor links.

---

## 🔧 Current Implementation

**Already Implemented**: Option 1 ✅

```typescript
// src/components/common/ScrollToTopOnNavigate.tsx
const ScrollToTopOnNavigate = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// src/AppRouter.tsx
<Router>
  <ScrollToTopOnNavigate />  ← Working!
  <Routes>...</Routes>
</Router>
```

**Status**: ✅ Working perfectly

---

## 🎉 Summary

Bạn **đã có solution tốt nhất** rồi! 

- ✅ Simple
- ✅ Effective
- ✅ Standard pattern
- ✅ No bugs

**Không cần thay đổi gì cả!** 

Các options khác chỉ cho advanced use cases (hash links, remember position, etc.)

---

**Current**: Option 1 - useLocation hook ✅  
**Status**: Perfect for your needs  
**Test**: http://localhost:5173/artists → Click artist → Auto scroll top! 🎉

