/**
 * 🧪 Grid Calculations Debug Helper
 * 
 * Paste this into Chrome Console while on /collection page
 * to verify grid calculations are correct.
 */

function debugGridCalculations() {
  console.clear();
  console.log('🧪 ===== GRID CALCULATIONS DEBUG =====\n');
  
  // Get viewport info
  const viewport = {
    width: window.innerWidth,
    height: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio
  };
  
  // Determine breakpoint
  let breakpoint = 'Unknown';
  if (viewport.width < 768) breakpoint = 'Mobile (< 768px)';
  else if (viewport.width < 1024) breakpoint = 'Tablet (768-1023px)';
  else if (viewport.width < 1440) breakpoint = 'Desktop (1024-1439px)';
  else if (viewport.width < 1920) breakpoint = 'Wide (1440-1919px)';
  else breakpoint = 'Ultra (≥ 1920px)';
  
  console.log('📱 VIEWPORT INFO');
  console.log('----------------');
  console.log('Width:', viewport.width + 'px');
  console.log('Height:', viewport.height + 'px');
  console.log('Breakpoint:', breakpoint);
  console.log('Device Pixel Ratio:', viewport.devicePixelRatio);
  console.log('');
  
  // Calculate expected column width
  let expectedColumnWidth;
  let paddingInfo;
  
  if (viewport.width < 768) {
    const MOBILE_PADDING = 32;
    expectedColumnWidth = viewport.width - MOBILE_PADDING;
    paddingInfo = '16px × 2 = 32px (1 column)';
  } else if (viewport.width < 1024) {
    const TABLET_PADDING = 80;
    const COLUMN_GAP = 24;
    expectedColumnWidth = (viewport.width - TABLET_PADDING - COLUMN_GAP) / 2;
    paddingInfo = '40px × 2 = 80px (2 columns)';
  } else if (viewport.width < 1440) {
    const DESKTOP_PADDING = 120;
    const COLUMN_GAP = 24;
    expectedColumnWidth = (viewport.width - DESKTOP_PADDING - COLUMN_GAP) / 2;
    paddingInfo = '60px × 2 = 120px (2 columns)';
  } else if (viewport.width < 1920) {
    const WIDE_PADDING = 376;
    const COLUMN_GAP = 24;
    expectedColumnWidth = (viewport.width - WIDE_PADDING - COLUMN_GAP) / 2;
    paddingInfo = '188px × 2 = 376px (2 columns, dynamic width)';
  } else {
    const ULTRA_PADDING = 440;
    const COLUMN_GAP = 24;
    expectedColumnWidth = (viewport.width - ULTRA_PADDING - COLUMN_GAP) / 2;
    paddingInfo = '220px × 2 = 440px (2 columns, dynamic width)';
  }
  
  console.log('📐 EXPECTED CALCULATIONS');
  console.log('------------------------');
  console.log('Padding:', paddingInfo);
  console.log('Column Width:', expectedColumnWidth.toFixed(2) + 'px');
  console.log('');
  
  // Get actual grid info
  const grid = document.querySelector('.collection-page__grid');
  if (!grid) {
    console.error('❌ Grid not found! Make sure you\'re on /collection page.');
    return;
  }
  
  const gridStyle = window.getComputedStyle(grid);
  const actualColumns = gridStyle.gridTemplateColumns;
  const actualColumnGap = gridStyle.columnGap;
  const actualRowHeight = gridStyle.gridAutoRows;
  
  console.log('🎨 ACTUAL CSS GRID');
  console.log('------------------');
  console.log('Grid Columns:', actualColumns);
  console.log('Column Gap:', actualColumnGap);
  console.log('Row Height:', actualRowHeight);
  console.log('');
  
  // Get artwork cards
  const cards = document.querySelectorAll('.artwork-card-grid');
  console.log('🖼️  ARTWORKS INFO');
  console.log('-----------------');
  console.log('Total Cards:', cards.length);
  console.log('');
  
  if (cards.length > 0) {
    console.log('📊 FIRST 5 ARTWORKS ANALYSIS');
    console.log('----------------------------');
    
    cards.forEach((card, index) => {
      if (index >= 5) return; // Only show first 5
      
      const img = card.querySelector('img');
      const rowSpanStyle = card.style.gridRowEnd;
      const rowSpan = rowSpanStyle ? parseInt(rowSpanStyle.replace('span ', '')) : 'N/A';
      
      const cardInfo = {
        index: index,
        title: img?.alt || 'N/A',
        rowSpan: rowSpan,
        expectedHeight: rowSpan !== 'N/A' ? (rowSpan * 10) + 'px' : 'N/A',
        imageLoaded: img?.complete || false,
        imageNaturalWidth: img?.naturalWidth || 'N/A',
        imageNaturalHeight: img?.naturalHeight || 'N/A'
      };
      
      console.log(`\nArtwork ${index}:`);
      console.log('  Title:', cardInfo.title);
      console.log('  Row Span:', cardInfo.rowSpan);
      console.log('  Expected Height:', cardInfo.expectedHeight);
      console.log('  Image Loaded:', cardInfo.imageLoaded ? '✅' : '⏳');
      if (img?.naturalWidth && img?.naturalHeight) {
        const aspectRatio = (img.naturalHeight / img.naturalWidth).toFixed(2);
        console.log('  Aspect Ratio:', aspectRatio);
        console.log('  Natural Size:', `${img.naturalWidth} × ${img.naturalHeight}`);
      }
    });
  } else {
    console.warn('⚠️  No artwork cards found. Images may still be loading...');
  }
  
  console.log('\n');
  console.log('✅ DEBUG COMPLETE');
  console.log('=================================\n');
  
  // Return summary object
  return {
    viewport,
    breakpoint,
    expectedColumnWidth: expectedColumnWidth.toFixed(2) + 'px',
    paddingInfo,
    totalCards: cards.length,
    gridStyle: {
      columns: actualColumns,
      columnGap: actualColumnGap,
      rowHeight: actualRowHeight
    }
  };
}

// Run immediately
console.log('💡 Grid Debug Helper loaded!');
console.log('Run: debugGridCalculations()');
console.log('');

// Auto-run
debugGridCalculations();

