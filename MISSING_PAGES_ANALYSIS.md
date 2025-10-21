# Missing Pages Analysis

## Phân tích Pages còn thiếu dựa trên Figma Design

_Last Updated: October 20, 2025_

---

## 📊 TỔNG QUAN

Dựa trên Figma file analysis, project có tổng cộng **15 desktop screens/pages**.

### ✅ ĐÃ CÓ: 11/15 Pages

| #   | Page Name            | Route                        | Status        | Figma Node ID                             | Notes                           |
| --- | -------------------- | ---------------------------- | ------------- | ----------------------------------------- | ------------------------------- |
| 1   | **Home**             | `/`                          | ✅ Hoàn chỉnh | `99:275` (Desktop - 7)                    | Main homepage with all sections |
| 2   | **Collection**       | `/collection`                | ✅ Có         | `122:433` (Desktop - 9)                   | Art collection listing          |
| 3   | **Artists**          | `/artists`                   | ✅ Có         | `130:1477` (Desktop - 11)                 | Artists listing with search     |
| 4   | **Events**           | `/events` (was `/news`)      | ✅ Có         | `282:987` (Desktop - 13)                  | Events listing with filters     |
| 5   | **A&V News**         | `/av-news` hoặc `/news-page` | ✅ Có         | `282:1382` (Desktop - 15)                 | News listing page               |
| 6   | **Knowledge**        | `/knowledge`                 | ✅ Có         | `285:1737` (Desktop - 17)                 | Knowledge base main             |
| 7   | **Who We Are**       | `/who-we-are`                | ✅ Có         | `115:417` (Desktop - 8)                   | About page                      |
| 8   | **Event Detail**     | `/events/:id`                | ✅ Có         | `282:1200` (Desktop - 14)                 | Single event detail             |
| 9   | **News Detail**      | `/news/:id`                  | ✅ Có         | `285:1618` (Desktop - 16)                 | Single news article             |
| 10  | **Artist Detail**    | `/artists/:id`               | ✅ Có         | `243:1290` (Desktop - 12)                 | Single artist profile           |
| 11  | **Knowledge Detail** | `/knowledge/:id`             | ✅ Có         | `328:1520`, `328:1648` (Desktop - 18, 19) | Single knowledge article        |

### ❌ THIẾU: 4/15 Pages

| #   | Page Name                    | Expected Route  | Status     | Figma Node ID                       | Description                    |
| --- | ---------------------------- | --------------- | ---------- | ----------------------------------- | ------------------------------ |
| 12  | **Mobile Menu**              | _Overlay/Modal_ | ❌ Chưa có | `4:62` (Desktop - 2)                | Mobile navigation menu overlay |
| 13  | **Modal/Popup - News/Event** | _Modal_         | ❌ Chưa có | `4:477` (Desktop - 3)               | News/Event quick view modal    |
| 14  | **Modal/Popup - Expanded**   | _Modal_         | ❌ Chưa có | `4:1686` (Desktop - 4)              | Expanded content modal         |
| 15  | **Modal/Popup - Small**      | _Modal_         | ❌ Chưa có | `4:1714`, `8:1741` (Desktop - 5, 6) | Small content modal            |

---

## 📋 CHI TIẾT PAGES THIẾU

### 1. Mobile Menu (Desktop - 2)

**Figma Node:** `4:62` - Desktop - 2  
**Type:** Overlay/Modal  
**Route:** N/A (Component/Modal)

**Mô tả:**

- Mobile navigation overlay
- Khi click hamburger menu icon trên mobile
- Có animation slide-in từ bên trái
- Hiển thị full navigation menu

**Components cần tạo:**

```
src/components/business/MobileMenu/
├── MobileMenu.tsx
├── MobileMenu.css
└── index.ts
```

**Features:**

- Close button (X icon)
- All navigation links
- Language toggle
- Responsive design
- Animation (slide-in/out)
- Backdrop overlay

**Implementation Priority:** 🔴 **HIGH** (Critical for mobile UX)

---

### 2. Modal/Popup - News/Event (Desktop - 3)

**Figma Node:** `4:477` - Desktop - 3  
**Type:** Modal/Dialog  
**Route:** N/A (Component/Modal)

**Mô tả:**

- Quick view modal cho News hoặc Event
- Hiển thị thumbnail image (left side)
- Hiển thị title + description (right side)
- CTA buttons (VIEW DETAIL, etc.)

**Components cần tạo:**

```
src/components/business/ContentModal/
├── ContentModal.tsx
├── ContentModal.css
└── index.ts
```

**Props:**

```typescript
interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: "news" | "event" | "artwork";
  imageUrl: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
}
```

**Features:**

- Close button (X icon)
- Image preview (486px width)
- Content area (494px width)
- Responsive layout
- Click outside to close
- ESC key to close

**Implementation Priority:** 🟡 **MEDIUM** (Nice to have UX enhancement)

---

### 3. Modal/Popup - Expanded (Desktop - 4)

**Figma Node:** `4:1686` - Desktop - 4  
**Type:** Modal/Dialog  
**Route:** N/A (Component/Modal)

**Mô tả:**

- Similar to Desktop - 3 but với expanded content
- Longer description text
- Same image + text layout

**Components cần tạo:**

```
src/components/business/ContentModal/
```

_(Có thể reuse ContentModal với variant)_

**Implementation Priority:** 🟡 **MEDIUM**

---

### 4. Modal/Popup - Small (Desktop - 5, 6)

**Figma Node:** `4:1714`, `8:1741` - Desktop - 5, 6  
**Type:** Modal/Dialog  
**Route:** N/A (Component/Modal)

**Mô tả:**

- Smaller modal variant
- Compact content display
- Desktop - 5: "The body"
- Desktop - 6: "The Portrait"

**Components cần tạo:**

```
src/components/business/ContentModal/
```

_(Có thể reuse ContentModal với size variant)_

**Implementation Priority:** 🟢 **LOW** (Optional)

---

## 🎯 IMPLEMENTATION ROADMAP

### Phase 1: Critical (Week 1) 🔴

**1.1. Mobile Menu**

```bash
Priority: HIGH
Effort: 2-3 hours
Impact: Critical for mobile UX

Steps:
1. Create MobileMenu component
2. Add to Header component
3. Implement animations
4. Test responsive behavior
```

**Files to create:**

- `src/components/business/MobileMenu/MobileMenu.tsx`
- `src/components/business/MobileMenu/MobileMenu.css`
- `src/components/business/MobileMenu/index.ts`

**Files to modify:**

- `src/design-system/organisms/Header/Header.tsx` (add mobile menu toggle)
- `src/design-system/organisms/Header/Header.css` (add hamburger icon)
- `src/components/business/index.ts` (export MobileMenu)

---

### Phase 2: Enhancement (Week 2) 🟡

**2.1. Content Modal System**

```bash
Priority: MEDIUM
Effort: 3-4 hours
Impact: Better UX for content preview

Steps:
1. Create ContentModal component with variants
2. Add modal state management
3. Integrate with News, Events, Artworks
4. Test all variants
```

**Files to create:**

- `src/components/business/ContentModal/ContentModal.tsx`
- `src/components/business/ContentModal/ContentModal.css`
- `src/components/business/ContentModal/index.ts`

**Variants:**

```typescript
type ModalSize = "small" | "medium" | "large";
type ModalType = "news" | "event" | "artwork" | "artist";
```

---

### Phase 3: Polish (Future) 🟢

**3.1. Additional Modal Variants**

- Fine-tune animations
- Add keyboard navigation
- Add accessibility features
- Add transition effects

---

## 📊 COMPARISON TABLE

| Feature             | Current            | After Phase 1      | After Phase 2     | After Phase 3 |
| ------------------- | ------------------ | ------------------ | ----------------- | ------------- |
| **Pages Complete**  | 11/15 (73%)        | 11/15 (73%)        | 11/15 (73%)       | 11/15 (73%)   |
| **Components**      | -                  | +1 (MobileMenu)    | +2 (ContentModal) | +2            |
| **Mobile UX**       | ⚠️ No menu         | ✅ Full menu       | ✅ Full menu      | ✅ Perfect    |
| **Content Preview** | ❌ Direct nav only | ❌ Direct nav only | ✅ Modal preview  | ✅ Perfect    |
| **Accessibility**   | ⚠️ Basic           | ⚠️ Basic           | ⚠️ Basic          | ✅ Full A11y  |

---

## 🛠️ TECHNICAL IMPLEMENTATION

### 1. Mobile Menu Component

**File:** `src/components/business/MobileMenu/MobileMenu.tsx`

```typescript
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Icon } from "../../../design-system/atoms";
import { LanguageToggle } from "../../../design-system/molecules";
import "./MobileMenu.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  const navigate = useNavigate();

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Collection", path: "/collection" },
    { label: "Artists", path: "/artists" },
    { label: "Events", path: "/events" },
    { label: "A&V News", path: "/av-news" },
    { label: "Knowledge", path: "/knowledge" },
    { label: "Who we are", path: "/who-we-are" },
    { label: "Shop", path: "/shop" },
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className={`mobile-menu-backdrop ${
          isOpen ? "mobile-menu-backdrop--open" : ""
        }`}
        onClick={onClose}
      />

      {/* Menu */}
      <nav className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        <div className="mobile-menu__header">
          <button
            className="mobile-menu__close"
            onClick={onClose}
            aria-label="Close menu"
          >
            <Icon name="close" size="md" />
          </button>
        </div>

        <ul className="mobile-menu__nav">
          {navItems.map((item) => (
            <li key={item.path} className="mobile-menu__nav-item">
              <button
                onClick={() => handleNavClick(item.path)}
                className="mobile-menu__nav-link"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="mobile-menu__footer">
          <LanguageToggle />
        </div>
      </nav>
    </>
  );
};

export default MobileMenu;
```

**File:** `src/components/business/MobileMenu/MobileMenu.css`

```css
/* Mobile Menu Component */
.mobile-menu-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  pointer-events: none;
  transition: opacity var(--transition-normal);
  z-index: 998;
}

.mobile-menu-backdrop--open {
  opacity: 1;
  pointer-events: all;
}

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 280px;
  height: 100vh;
  background: var(--color-bg-main);
  transform: translateX(-100%);
  transition: transform var(--transition-normal);
  z-index: 999;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
}

.mobile-menu--open {
  transform: translateX(0);
}

.mobile-menu__header {
  padding: var(--spacing-6) var(--spacing-5);
  display: flex;
  justify-content: flex-end;
  border-bottom: 1px solid var(--color-border);
}

.mobile-menu__close {
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--spacing-2);
  color: var(--color-text-primary);
}

.mobile-menu__nav {
  list-style: none;
  padding: var(--spacing-4) 0;
  margin: 0;
  flex: 1;
}

.mobile-menu__nav-item {
  border-bottom: 1px solid var(--color-border);
}

.mobile-menu__nav-link {
  display: block;
  width: 100%;
  padding: var(--spacing-5) var(--spacing-6);
  text-align: left;
  background: none;
  border: none;
  font-size: var(--text-base);
  color: var(--color-text-primary);
  cursor: pointer;
  transition: background-color var(--transition-fast);
}

.mobile-menu__nav-link:hover {
  background-color: rgba(107, 33, 40, 0.05);
}

.mobile-menu__footer {
  padding: var(--spacing-6);
  border-top: 1px solid var(--color-border);
  display: flex;
  justify-content: center;
}

/* Responsive */
@media (min-width: 1025px) {
  .mobile-menu,
  .mobile-menu-backdrop {
    display: none;
  }
}
```

---

### 2. Content Modal Component

**File:** `src/components/business/ContentModal/ContentModal.tsx`

```typescript
import React, { useEffect } from "react";
import { Button, Icon, Typography } from "../../../design-system/atoms";
import "./ContentModal.css";

interface ContentModalProps {
  isOpen: boolean;
  onClose: () => void;
  size?: "small" | "medium" | "large";
  imageUrl: string;
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  onCtaClick?: () => void;
}

const ContentModal: React.FC<ContentModalProps> = ({
  isOpen,
  onClose,
  size = "medium",
  imageUrl,
  title,
  description,
  ctaText = "VIEW DETAIL",
  onCtaClick,
}) => {
  // Handle ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div className="content-modal-backdrop" onClick={onClose} />

      {/* Modal */}
      <div className={`content-modal content-modal--${size}`}>
        <button
          className="content-modal__close"
          onClick={onClose}
          aria-label="Close modal"
        >
          <Icon name="close" size="md" />
        </button>

        <div className="content-modal__container">
          {/* Image */}
          <div className="content-modal__image">
            <img src={imageUrl} alt={title} />
          </div>

          {/* Content */}
          <div className="content-modal__content">
            <Typography variant="h3" as="h2" className="content-modal__title">
              {title}
            </Typography>

            <Typography
              variant="body-md"
              className="content-modal__description"
            >
              {description}
            </Typography>

            {ctaText && (
              <div className="content-modal__actions">
                <Button
                  variant="outline"
                  size="md"
                  onClick={onCtaClick || onClose}
                >
                  {ctaText}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentModal;
```

---

## ✅ NEXT STEPS

### Immediate Actions (This Week):

1. **Review this analysis** với team
2. **Prioritize** pages to implement
3. **Assign** tasks
4. **Start with Phase 1** (Mobile Menu)

### Questions to Answer:

1. **Mobile Menu**: Có cần ngay không? (Mobile traffic %)
2. **Modals**: Có quan trọng không? Or direct navigation tốt hơn?
3. **Timeline**: Khi nào cần hoàn thành?
4. **Resources**: Có đủ time để implement không?

---

## 📚 RELATED DOCUMENTS

- [NEW_PAGE_WORKFLOW.md](./NEW_PAGE_WORKFLOW.md) - Quy trình tạo page mới
- [COMPONENT_REFACTOR_STRATEGY.md](./COMPONENT_REFACTOR_STRATEGY.md) - Component structure
- [DESIGN_SYSTEM_GUIDE.md](./DESIGN_SYSTEM_GUIDE.md) - Design system usage

---

**Generated:** October 20, 2025  
**Last Updated:** October 20, 2025  
**Version:** 1.0.0
