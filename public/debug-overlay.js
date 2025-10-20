/**
 * Figma Overlay Debugger
 * Usage: Paste this script in Chrome DevTools Console
 * Press 'o' to toggle overlay opacity
 * Press 'r' to remove overlay
 */

// Figma screenshot URLs - Replace with actual screenshots
const FIGMA_SCREENSHOTS = {
  '/': 'https://via.placeholder.com/1440x900/f8f8f8/732231?text=Homepage+Desktop-7',
  '/collection': 'https://via.placeholder.com/1440x900/f8f8f8/732231?text=Collection+Desktop-9',
  '/artists': 'https://via.placeholder.com/1440x900/f8f8f8/732231?text=Artists+Desktop-11',
  '/events': 'https://via.placeholder.com/1440x900/f8f8f8/732231?text=Events+Desktop-13',
  '/news': 'https://via.placeholder.com/1440x900/f8f8f8/732231?text=News+Desktop-15'
};

function createFigmaOverlay() {
  // Remove existing overlay if any
  const existing = document.getElementById('figma-overlay-debug');
  if (existing) {
    existing.remove();
    console.log('✅ Removed existing overlay');
    return;
  }

  // Get current path
  const path = window.location.pathname;
  const screenshotUrl = FIGMA_SCREENSHOTS[path];

  if (!screenshotUrl) {
    console.warn('⚠️ No Figma screenshot defined for:', path);
    console.log('Available paths:', Object.keys(FIGMA_SCREENSHOTS));
    return;
  }

  // Create overlay container
  const overlay = document.createElement('div');
  overlay.id = 'figma-overlay-debug';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 999999;
    opacity: 0.5;
    transition: opacity 0.3s ease;
  `;

  // Create image
  const img = document.createElement('img');
  img.src = screenshotUrl;
  img.style.cssText = `
    width: 100%;
    height: 100%;
    object-fit: contain;
    object-position: top center;
  `;

  // Create controls info
  const controls = document.createElement('div');
  controls.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background: rgba(115, 34, 49, 0.95);
    color: white;
    padding: 12px 20px;
    border-radius: 8px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    pointer-events: auto;
    z-index: 1000000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  `;
  controls.innerHTML = `
    <div style="margin-bottom: 8px; font-weight: 600;">Figma Overlay Controls</div>
    <div>Press <kbd style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 3px;">O</kbd> to toggle opacity</div>
    <div>Press <kbd style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 3px;">R</kbd> to remove</div>
  `;

  overlay.appendChild(img);
  document.body.appendChild(overlay);
  document.body.appendChild(controls);

  // Add keyboard controls
  const handleKeyPress = (e) => {
    if (e.key.toLowerCase() === 'o') {
      const currentOpacity = parseFloat(overlay.style.opacity);
      overlay.style.opacity = currentOpacity === 0.5 ? 0 : 0.5;
      console.log('Opacity:', overlay.style.opacity);
    }
    if (e.key.toLowerCase() === 'r') {
      overlay.remove();
      controls.remove();
      document.removeEventListener('keydown', handleKeyPress);
      console.log('✅ Overlay removed');
    }
  };

  document.addEventListener('keydown', handleKeyPress);

  console.log('✅ Figma overlay created!');
  console.log('Press O to toggle, R to remove');
}

// Measurement helper
function measureElement(selector) {
  const el = document.querySelector(selector);
  if (!el) {
    console.warn('Element not found:', selector);
    return;
  }

  const styles = window.getComputedStyle(el);
  const rect = el.getBoundingClientRect();

  console.log('📐 Measurements for:', selector);
  console.log({
    width: `${rect.width}px`,
    height: `${rect.height}px`,
    padding: styles.padding,
    margin: styles.margin,
    fontSize: styles.fontSize,
    fontFamily: styles.fontFamily,
    color: styles.color,
    backgroundColor: styles.backgroundColor
  });
}

// Grid overlay helper
function showGridOverlay(columns = 3, gap = 32) {
  const existing = document.getElementById('grid-overlay-debug');
  if (existing) {
    existing.remove();
    return;
  }

  const grid = document.createElement('div');
  grid.id = 'grid-overlay-debug';
  grid.style.cssText = `
    position: fixed;
    top: 0;
    left: 188px;
    right: 188px;
    height: 100%;
    pointer-events: none;
    z-index: 999998;
    display: grid;
    grid-template-columns: repeat(${columns}, 1fr);
    gap: ${gap}px;
  `;

  for (let i = 0; i < columns; i++) {
    const col = document.createElement('div');
    col.style.cssText = `
      background: rgba(115, 34, 49, 0.1);
      border: 1px dashed rgba(115, 34, 49, 0.3);
    `;
    grid.appendChild(col);
  }

  document.body.appendChild(grid);
  console.log(`✅ Grid overlay (${columns} columns, ${gap}px gap)`);
}

// Export functions
window.FigmaDebug = {
  overlay: createFigmaOverlay,
  measure: measureElement,
  grid: showGridOverlay
};

console.log('🎨 Figma Debug Tools loaded!');
console.log('Usage:');
console.log('  FigmaDebug.overlay()     - Toggle Figma screenshot overlay');
console.log('  FigmaDebug.measure(sel)  - Measure element');
console.log('  FigmaDebug.grid(cols, gap) - Show grid overlay');

