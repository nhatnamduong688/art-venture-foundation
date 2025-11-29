# Testing News API Integration

## 🧪 Quick Test Checklist

### Prerequisites:
- [ ] Backend server đang chạy tại `http://localhost:3000`
- [ ] Frontend dev server đang chạy (`yarn dev`)

### Test Cases:

#### 1. **Basic API Call Test (Postman/Browser)**
```bash
# Test endpoint directly
curl "http://localhost:3000/api/public/news?page=1&limit=12&sortBy=date&sortOrder=desc"
```

Expected response:
```json
{
  "success": true,
  "data": {
    "data": [...],
    "meta": {
      "page": 1,
      "limit": 12,
      "total": <number>
    }
  },
  "message": "News fetched successfully"
}
```

#### 2. **Frontend Integration Test**

1. **Navigate to News Page**
   ```
   http://localhost:5173/news
   ```

2. **Check Initial Load**
   - [ ] Page loads without errors
   - [ ] News articles are displayed
   - [ ] Images are loaded (or placeholder shown)
   - [ ] Dates are formatted as DD/MM/YYYY
   - [ ] "Load More" button visible if there are more than 12 items

3. **Test Search**
   - [ ] Type keyword in search box
   - [ ] Press Enter
   - [ ] Results are filtered
   - [ ] Empty state shows if no results

4. **Test Load More**
   - [ ] Click "Load More" button
   - [ ] More articles are loaded
   - [ ] Button shows "Loading..." during fetch
   - [ ] Button disappears or shows total count when all loaded

5. **Test Error Handling**
   - [ ] Stop backend server
   - [ ] Refresh page
   - [ ] Error message is displayed
   - [ ] "Retry" button works

### Browser Console Check:

Open DevTools Console and look for:
- ✅ No errors
- ✅ API calls to `/api/public/news`
- ✅ Successful responses

### Network Tab Check:

1. Open DevTools → Network tab
2. Filter by XHR/Fetch
3. Look for:
   - [ ] Request to `/api/public/news?page=1&limit=12...`
   - [ ] Status 200 OK
   - [ ] Response contains news data
   - [ ] Images loaded from correct URL

## 📸 Visual Checks:

### Desktop (1440px+):
- [ ] Header with title "A&V News" and search box
- [ ] News items in row layout
- [ ] Each item shows: image, title, description, date, "VIEW DETAIL" link
- [ ] Hover effects work

### Tablet (768px - 1024px):
- [ ] Layout adjusts properly
- [ ] Search box adapts to screen size

### Mobile (< 768px):
- [ ] News items stack vertically
- [ ] Images are full width
- [ ] All content is readable

## 🔧 Common Issues & Solutions:

### Issue 1: CORS Error
```
Access to fetch at 'http://localhost:3000/api/public/news' from origin 'http://localhost:5173' has been blocked by CORS policy
```
**Solution**: Backend cần enable CORS cho `http://localhost:5173`

### Issue 2: API URL Wrong
```
Error: Network error
```
**Solution**: Check `src/config/env.ts` - verify `apiUrl` setting

### Issue 3: Images Don't Load
```
Images show placeholder instead of actual image
```
**Solution**: 
- Check `imageBaseUrl` in config
- Verify image paths từ API response
- Check Network tab for image requests

### Issue 4: Empty News List
```
Shows "No news articles found"
```
**Solution**:
- Check backend có data không
- Check API response trong Network tab
- Verify response structure matches interface

## 📊 Expected Data Flow:

```
Browser
  ↓ (GET /news)
React Router
  ↓
NewsPage Component
  ↓ (useEffect)
newsAPI.getAll()
  ↓ (HTTP GET)
apiClient
  ↓ (fetch)
Backend API (:3000/api/public/news)
  ↓ (JSON Response)
Parse & Set State
  ↓
Render News List
```

## ✅ Success Criteria:

All of the following should work:
- ✅ News list loads from API
- ✅ Images display correctly
- ✅ Dates formatted properly
- ✅ Search functionality works
- ✅ Load more pagination works
- ✅ Error states handled gracefully
- ✅ Loading states show appropriately
- ✅ Links to detail pages work
- ✅ Responsive on all screen sizes
- ✅ No console errors

## 🚀 Next Steps After Testing:

1. **If All Tests Pass:**
   - Commit changes
   - Create PR
   - Deploy to staging

2. **If Tests Fail:**
   - Check error messages
   - Review API response structure
   - Verify backend is running
   - Check browser console
   - Review Network tab

## 📝 Test Report Template:

```
Date: ___________
Tester: ___________

✅ PASS / ❌ FAIL - Initial load
✅ PASS / ❌ FAIL - Search functionality
✅ PASS / ❌ FAIL - Load more
✅ PASS / ❌ FAIL - Error handling
✅ PASS / ❌ FAIL - Image loading
✅ PASS / ❌ FAIL - Date formatting
✅ PASS / ❌ FAIL - Responsive design

Notes: _____________________________
```

---

**Created**: Nov 29, 2025
**Status**: Ready for Testing

