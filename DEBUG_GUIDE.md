# 🐛 **Debug Guide - Art & Venture Foundation**

## 🎯 **Debug Configuration**

### **✅ Current Setup:**

```bash
✅ Minification: DISABLED (minify: false)
✅ Source Maps: ENABLED (sourcemap: true)
✅ Readable Code: Production builds are human-readable
✅ Component Names: Preserved in build
✅ Console Logs: Visible in production
```

---

## 🔧 **F12 Debugging Features**

### **1. 📁 Sources Tab**

```bash
✅ Readable JavaScript: No minification
✅ Source Maps: Original TypeScript/JSX files
✅ Breakpoints: Set breakpoints in original source
✅ Step Debugging: Line-by-line debugging
✅ Variable Inspection: Hover to see values
```

### **2. 🖥️ Console Tab**

```bash
✅ Component Logs: console.log() statements visible
✅ Error Stack Traces: Readable error messages
✅ React DevTools: Install for component inspection
✅ Network Requests: Monitor API calls
```

### **3. 📊 Network Tab**

```bash
✅ Bundle Analysis: See chunk sizes
✅ Asset Loading: Monitor image/font loading
✅ Cache Status: Check asset caching
✅ Performance: Monitor load times
```

---

## 🛠️ **Development vs Production Debugging**

### **Development (yarn dev):**

```bash
🔥 Hot Module Replacement: Instant updates
📝 Detailed Error Overlay: Full stack traces
🎯 React Refresh: Component state preservation
⚡ Fast Rebuild: ~100ms updates
```

### **Production (deployed):**

```bash
📖 Readable Code: Non-minified JavaScript
🗺️ Source Maps: Map to original files
🔍 Component Names: Preserved for debugging
📊 Performance Metrics: Real user data
```

---

## 🎯 **Debugging Techniques**

### **1. Component Debugging**

```javascript
// Add debug logs in components
const MuseumCard = ({ title, description }) => {
  console.log("MuseumCard props:", { title, description });

  useEffect(() => {
    console.log("MuseumCard mounted");
    return () => console.log("MuseumCard unmounted");
  }, []);

  return <div>...</div>;
};
```

### **2. State Debugging**

```javascript
// Debug Zustand store
import { cartStore } from "@store/cartStore";

// In component
const { items } = cartStore();
console.log("Cart items:", items);

// Or add store logging
const cartStore = create((set, get) => ({
  items: [],
  addItem: (item) => {
    console.log("Adding item:", item);
    set((state) => ({ items: [...state.items, item] }));
    console.log("New state:", get().items);
  },
}));
```

### **3. Route Debugging**

```javascript
// Debug React Router
import { useLocation, useNavigate } from "react-router-dom";

const MyComponent = () => {
  const location = useLocation();
  const navigate = useNavigate();

  console.log("Current route:", location.pathname);
  console.log("Route state:", location.state);

  return <div>...</div>;
};
```

### **4. CSS Debugging**

```css
/* Add debug borders */
.debug * {
  border: 1px solid red !important;
}

/* Debug specific component */
.museum-card {
  border: 2px solid blue !important;
  background: rgba(255, 0, 0, 0.1) !important;
}
```

---

## 🔍 **Browser DevTools Setup**

### **1. Install React DevTools**

```bash
# Chrome Extension
https://chrome.google.com/webstore/detail/react-developer-tools/

# Firefox Extension
https://addons.mozilla.org/en-US/firefox/addon/react-devtools/
```

### **2. Useful DevTools Settings**

```bash
F12 → Settings → Preferences:
✅ Disable cache (while DevTools is open)
✅ Enable source maps
✅ Show rulers and guides
✅ Enable CSS source maps
```

### **3. Console Commands**

```javascript
// Access React components (with React DevTools)
$r; // Selected React component
$0; // Selected DOM element

// Debug store (if exposed globally)
window.cartStore?.getState();

// Performance debugging
console.time("render-time");
// ... component render
console.timeEnd("render-time");
```

---

## 📊 **Performance Debugging**

### **1. Lighthouse Audit**

```bash
F12 → Lighthouse → Generate Report
✅ Performance Score
✅ Core Web Vitals
✅ Accessibility Issues
✅ SEO Recommendations
```

### **2. Performance Tab**

```bash
F12 → Performance → Record
✅ Component Render Times
✅ JavaScript Execution
✅ Layout Thrashing
✅ Memory Usage
```

### **3. Memory Tab**

```bash
F12 → Memory → Take Heap Snapshot
✅ Memory Leaks
✅ Component Cleanup
✅ Event Listener Cleanup
```

---

## 🐛 **Common Debug Scenarios**

### **1. Component Not Rendering**

```javascript
// Check props
console.log("Component props:", props);

// Check conditional rendering
const shouldRender = condition;
console.log("Should render:", shouldRender);

// Check imports
console.log("Component imported:", typeof MyComponent);
```

### **2. State Not Updating**

```javascript
// Check state changes
const [state, setState] = useState(initial);
console.log("Current state:", state);

// Debug setState calls
const handleUpdate = (newValue) => {
  console.log("Updating state from:", state, "to:", newValue);
  setState(newValue);
};
```

### **3. Routing Issues**

```javascript
// Check route configuration
console.log("All routes:", routes);

// Debug navigation
const handleNavigate = (path) => {
  console.log("Navigating to:", path);
  navigate(path);
};
```

### **4. CSS Not Applied**

```bash
# Check CSS loading
F12 → Network → Filter: CSS
✅ Verify CSS files loaded
✅ Check for 404 errors
✅ Verify CSS order

# Check CSS specificity
F12 → Elements → Computed Styles
✅ See which styles are applied
✅ Check overridden styles
```

---

## 🔧 **Debug Environment Variables**

### **Add Debug Flags:**

```bash
# .env.local
REACT_APP_DEBUG=true
REACT_APP_LOG_LEVEL=debug
REACT_APP_SHOW_DEBUG_INFO=true
```

### **Use in Components:**

```javascript
const DEBUG = process.env.REACT_APP_DEBUG === "true";

const MyComponent = () => {
  if (DEBUG) {
    console.log("Debug mode enabled");
  }

  return (
    <div>
      {DEBUG && <div className="debug-info">Debug Mode</div>}
      {/* Component content */}
    </div>
  );
};
```

---

## 📱 **Mobile Debugging**

### **1. Chrome DevTools Device Mode**

```bash
F12 → Toggle Device Toolbar (Ctrl+Shift+M)
✅ Test different screen sizes
✅ Simulate touch events
✅ Test network conditions
```

### **2. Remote Debugging**

```bash
# Android Chrome
chrome://inspect/#devices

# iOS Safari
Safari → Develop → Device Name
```

---

## 🎯 **Debug URLs**

### **Live Debugging:**

```bash
🌐 Production: https://art-venture-foundation.vercel.app
🔍 With Debug: Add ?debug=true to any URL
📊 Performance: Use Lighthouse on live site
```

### **Local Debugging:**

```bash
💻 Development: http://localhost:3000
🔥 Hot Reload: Instant feedback
📝 Error Overlay: Detailed error info
```

---

## 🚀 **Quick Debug Commands**

### **Build & Test:**

```bash
# Build with debug info
yarn build

# Serve locally to test production
yarn preview

# Check bundle sizes
yarn analyze
```

### **Git Debug:**

```bash
# Check recent changes
git log --oneline -10

# Compare with previous version
git diff HEAD~1

# Check current status
git status
```

---

## 💡 **Debug Tips**

### **1. Systematic Approach:**

```bash
1. 🎯 Identify the problem area
2. 🔍 Add console.log statements
3. 🛠️ Use breakpoints in DevTools
4. 📊 Check network requests
5. 🎨 Verify CSS styles
6. 🔄 Test in different browsers
```

### **2. Performance Debugging:**

```bash
1. ⚡ Use React.memo for expensive components
2. 🎯 Use useCallback for event handlers
3. 📊 Monitor re-renders with React DevTools
4. 🔍 Check for memory leaks
```

### **3. Production Debugging:**

```bash
1. 📖 Readable code (no minification)
2. 🗺️ Source maps enabled
3. 📊 Vercel analytics for real data
4. 🔍 Error tracking (consider Sentry)
```

---

## 🎉 **Happy Debugging!**

**With minification disabled, you now have:**

- ✅ **Readable JavaScript** in production
- ✅ **Source maps** for original files
- ✅ **Component names** preserved
- ✅ **Console logs** visible
- ✅ **Easy breakpoint debugging**

**Your website is ready for professional debugging!** 🐛🔍
