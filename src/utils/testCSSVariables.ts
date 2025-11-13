/**
 * Test CSS Variables - Proof that CSS Variables are DYNAMIC
 * Run this in browser console to see real-time values
 */

export const testCSSVariables = () => {
  console.log('🧪 Testing CSS Variables - Dynamic Breakpoints');
  console.log('================================================');
  
  // Get current value
  const getPaddingLeft = () => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--container-padding-left')
      .trim();
  };
  
  const getPaddingRight = () => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--container-padding-right')
      .trim();
  };
  
  const screenWidth = window.innerWidth;
  const paddingLeft = getPaddingLeft();
  const paddingRight = getPaddingRight();
  
  console.log(`📏 Screen Width: ${screenWidth}px`);
  console.log(`📌 --container-padding-left: ${paddingLeft}`);
  console.log(`📌 --container-padding-right: ${paddingRight}`);
  
  // Expected values
  let expected = '';
  if (screenWidth < 768) {
    expected = '16px (Mobile)';
  } else if (screenWidth < 1024) {
    expected = '20px (Tablet)';
  } else if (screenWidth < 1440) {
    expected = '40px (Desktop)';
  } else {
    expected = '32px (Wide)';
  }
  
  console.log(`✅ Expected: ${expected}`);
  
  // Check if correct
  const isCorrect = (
    (screenWidth < 768 && paddingLeft === '16px') ||
    (screenWidth >= 768 && screenWidth < 1024 && paddingLeft === '20px') ||
    (screenWidth >= 1024 && screenWidth < 1440 && paddingLeft === '40px') ||
    (screenWidth >= 1440 && paddingLeft === '32px')
  );
  
  if (isCorrect) {
    console.log('✅ ĐÚNG: CSS Variable đang hoạt động ĐỘNG!');
  } else {
    console.warn('⚠️ SAI: Có vấn đề với CSS Variables');
  }
  
  console.log('================================================');
  console.log('💡 Resize window và chạy lại testCSSVariables() để xem thay đổi');
  
  return {
    screenWidth,
    paddingLeft,
    paddingRight,
    expected,
    isCorrect
  };
};

// Auto-test on window resize
export const startAutoTest = () => {
  console.log('🚀 Started auto-testing CSS variables on resize');
  
  let lastWidth = window.innerWidth;
  
  window.addEventListener('resize', () => {
    const newWidth = window.innerWidth;
    
    // Only log when crossing breakpoints
    if (
      (lastWidth < 768 && newWidth >= 768) ||
      (lastWidth >= 768 && newWidth < 768) ||
      (lastWidth < 1024 && newWidth >= 1024) ||
      (lastWidth >= 1024 && newWidth < 1024) ||
      (lastWidth < 1440 && newWidth >= 1440) ||
      (lastWidth >= 1440 && newWidth < 1440)
    ) {
      console.log('🔄 Breakpoint changed!');
      testCSSVariables();
    }
    
    lastWidth = newWidth;
  });
};

// Make it available globally for testing
if (typeof window !== 'undefined') {
  (window as any).testCSSVariables = testCSSVariables;
  (window as any).startAutoTest = startAutoTest;
}

export default testCSSVariables;

