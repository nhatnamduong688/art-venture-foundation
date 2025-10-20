# 🎨 Storybook Guide

## 🚀 Quick Start

### **1. Start Storybook**

```bash
npm run storybook
```

Server will start at: `http://localhost:6006`

### **2. Open Browser**

Navigate to: **http://localhost:6006**

Alternative: **http://127.0.0.1:6006**

---

## 📚 What's Available

### **Design System Stories**

#### **Atoms** (3 components)

**1. Button** (`Design System > Atoms > Button`)

- ✅ Primary
- ✅ Burgundy
- ✅ With Right Icon
- ✅ With Left Icon
- ✅ Small/Medium/Large
- ✅ Full Width
- ✅ Loading State
- ✅ Disabled
- ✅ All Variants Showcase
- ✅ All Sizes Showcase

**2. Typography** (`Design System > Atoms > Typography`)

- ✅ Display XL/LG
- ✅ Heading 1-6
- ✅ Body Large/Medium/Small
- ✅ Caption
- ✅ Burgundy Color
- ✅ All Variants Showcase
- ✅ All Colors Showcase

**3. Icon** (`Design System > Atoms > Icon`)

- ✅ Default
- ✅ Arrow Right
- ✅ Custom Color
- ✅ All Sizes (XS to XL)
- ✅ All Icons Showcase (19 icons)
- ✅ Navigation Icons
- ✅ Action Icons
- ✅ Social Icons

#### **Molecules** (1 component)

**1. Card** (`Design System > Molecules > Card`)

- ✅ Default
- ✅ With Composition (Header, Body, Footer, Image)
- ✅ Outlined
- ✅ Elevated
- ✅ Hoverable
- ✅ No Padding
- ✅ Image Aspect Ratios (16:9, 4:3, 1:1)
- ✅ All Variants Showcase

---

## 🎯 How to Use Storybook

### **1. Navigation**

- **Sidebar (Left):** Browse stories by component
- **Canvas (Center):** See component preview
- **Addons Panel (Bottom):** Controls, Actions, Docs

### **2. Interactive Controls**

1. Click any story in the sidebar
2. See the component render
3. Use **Controls** tab to change props
4. See live updates in real-time

### **3. View Documentation**

1. Click **Docs** tab (top right)
2. See auto-generated docs from TypeScript
3. View all props and their types
4. Copy code examples

### **4. Test Responsive**

1. Click **Viewport** icon (toolbar)
2. Choose device size
3. See how component looks on different screens

### **5. Check Accessibility**

1. Click **Accessibility** tab (addons panel)
2. See A11y violations
3. Fix issues for better accessibility

---

## 📖 Story Examples

### **Button Story**

```tsx
// Usage in your app
import { Button } from "./design-system/atoms/Button";
import { Icon } from "./design-system/atoms/Icon";

<Button
  variant="burgundy"
  size="md"
  rightIcon={<Icon name="arrow-right" size="lg" />}
>
  View More
</Button>;
```

### **Typography Story**

```tsx
// Usage in your app
import { Typography } from "./design-system/atoms/Typography";

<Typography variant="display-xl" color="burgundy">
  Art & Venture Foundation
</Typography>;
```

### **Card Story**

```tsx
// Usage in your app
import { Card } from "./design-system/molecules/Card";

<Card variant="elevated" padding="lg">
  <Card.Image src="image.jpg" alt="Museum" aspectRatio="16/9" />
  <Card.Header>
    <h3>Title</h3>
  </Card.Header>
  <Card.Body>
    <p>Content</p>
  </Card.Body>
  <Card.Footer>
    <button>Action</button>
  </Card.Footer>
</Card>;
```

---

## 🔧 Troubleshooting

### **Storybook not loading?**

1. **Wait for build**

   - First load takes 10-20 seconds
   - Check terminal for "Storybook started"

2. **Hard refresh**

   - Press `Cmd + Shift + R` (Mac)
   - Press `Ctrl + Shift + R` (Windows)

3. **Try alternative URL**

   - `http://127.0.0.1:6006`
   - `http://localhost:6006`

4. **Check port**

   ```bash
   lsof -i :6006
   ```

5. **Restart Storybook**

   ```bash
   # Kill process
   kill $(lsof -t -i:6006)

   # Start again
   npm run storybook
   ```

### **Stories not showing?**

1. **Check file location**

   - Stories should be in `src/stories/`
   - Named `*.stories.tsx` or `*.stories.ts`

2. **Check imports**

   - Verify component paths are correct
   - Ensure design system exports

3. **Check console**
   - Open browser DevTools (F12)
   - Check for errors in Console tab

### **Build Storybook for Production**

```bash
npm run build-storybook
```

This creates a static build in `storybook-static/` that you can deploy.

---

## 🎨 Adding More Stories

### **Template**

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "../path/to/component";

const meta = {
  title: "Design System/Category/ComponentName",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof YourComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    propName: "value",
  },
};
```

### **Location**

Save stories in:

- `src/stories/design-system/atoms/` - For atoms
- `src/stories/design-system/molecules/` - For molecules
- `src/stories/design-system/organisms/` - For organisms

---

## 📊 Current Status

### **Components with Stories: 4/13**

✅ Button  
✅ Typography  
✅ Icon  
✅ Card  
⏭ Input (TODO)  
⏭ LanguageToggle (TODO)  
⏭ SearchBox (TODO)  
⏭ Header (TODO)  
⏭ Footer (TODO)

### **Stories Created: 30+**

- Button: 10 stories
- Typography: 10 stories
- Icon: 8 stories
- Card: 8 stories

---

## 🚀 Next Steps

1. **Explore existing stories**

   - Open http://localhost:6006
   - Try interactive controls
   - Copy code examples

2. **Add more stories**

   - Input component
   - LanguageToggle
   - SearchBox
   - Header/Footer

3. **Deploy Storybook**

   - Build: `npm run build-storybook`
   - Deploy to Netlify/Vercel
   - Share with team

4. **Use for development**
   - Develop components in isolation
   - Test edge cases
   - Document variations

---

## 📚 Resources

- **Storybook Docs:** https://storybook.js.org/docs
- **React Storybook:** https://storybook.js.org/docs/react
- **Writing Stories:** https://storybook.js.org/docs/react/writing-stories

---

**Status:** ✅ Storybook Running  
**URL:** http://localhost:6006  
**Stories:** 30+ interactive examples  
**Components:** 4/13 documented
