import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppRouter from './AppRouter';
import reportWebVitals from './reportWebVitals';
import { testCSSVariables, startAutoTest } from './utils/testCSSVariables';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Test CSS Variables (Development only)
if (process.env.NODE_ENV === 'development') {
  console.log('🧪 CSS Variables Test Available!');
  console.log('Run: testCSSVariables() in console to test');
  console.log('Run: startAutoTest() to enable auto-testing on resize');
  
  // Run initial test
  setTimeout(() => {
    console.log('\n🔍 Initial CSS Variable Test:');
    testCSSVariables();
  }, 1000);
}
