# News API Integration Guide

## ✅ Hoàn thành

Đã tích hợp thành công News API vào dự án.

## 🎯 API Endpoint

**Base URL**: `http://localhost:3000` (Development) hoặc CloudFront URL (Production)

**Endpoint**: `GET /api/public/news`

### Query Parameters:
- `page` - Số trang (default: 1)
- `limit` - Số bài viết mỗi trang (default: 12)
- `sortBy` - Sắp xếp theo field (default: 'date')
- `sortOrder` - Thứ tự: 'asc' hoặc 'desc' (default: 'desc')
- `search` - Tìm kiếm theo keyword (optional)
- `category` - Lọc theo danh mục (optional)
- `tag` - Lọc theo tag (optional)

### Ví dụ Request:
```bash
# Get all news (trang 1, 12 items, sắp xếp theo ngày giảm dần)
GET http://localhost:3000/api/public/news?page=1&limit=12&sortBy=date&sortOrder=desc

# Search news
GET http://localhost:3000/api/public/news?search=exhibition&page=1&limit=12

# Filter by category
GET http://localhost:3000/api/public/news?category=events&page=1&limit=12

# Get single news
GET http://localhost:3000/api/public/news/{id}
```

## 📂 Files Created/Modified

### 1. **News API Service**

**File**: `src/api/news.ts`

#### Interfaces:

```typescript
export interface NewsArticle {
  id: string;
  title: string;
  titleEn: string | null;
  content: string;
  contentEn: string | null;
  excerpt: string | null;
  excerptEn: string | null;
  featuredImage: string | null;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  author: string | null;
  authorEn: string | null;
  tags: string[];
  category: string | null;
  categoryEn: string | null;
  slug: string;
  viewCount: number;
  status: 'draft' | 'published' | 'archived';
}

export interface NewsApiResponse {
  success: boolean;
  data: {
    data: NewsArticle[];
    meta: {
      page: number;
      limit: number;
      total: number;
    };
  };
  message: string;
}
```

#### Helper Functions:

```typescript
// Get full image URL
getNewsImageUrl(imagePath: string | null): string | null

// Format date to DD/MM/YYYY
formatNewsDate(dateString: string): string

// Get title with language fallback
getNewsTitle(news: NewsArticle, language: 'vi' | 'en' = 'vi'): string

// Get content with language fallback
getNewsContent(news: NewsArticle, language: 'vi' | 'en' = 'vi'): string

// Get excerpt with language fallback
getNewsExcerpt(news: NewsArticle, language: 'vi' | 'en' = 'vi'): string

// Get author with language fallback
getNewsAuthor(news: NewsArticle, language: 'vi' | 'en' = 'vi'): string

// Get category with language fallback
getNewsCategory(news: NewsArticle, language: 'vi' | 'en' = 'vi'): string | null
```

#### API Methods:

```typescript
export const newsAPI = {
  // Get all news with pagination
  getAll: async (page, limit, sortBy, sortOrder): Promise<NewsApiResponse>
  
  // Get single news by ID
  getById: async (id: string): Promise<NewsArticle>
  
  // Search news
  search: async (query: string, page, limit): Promise<NewsApiResponse>
  
  // Filter by category
  getByCategory: async (category: string, page, limit): Promise<NewsApiResponse>
  
  // Filter by tag
  getByTag: async (tag: string, page, limit): Promise<NewsApiResponse>
}
```

### 2. **NewsPage Integration**

**File**: `src/pages/NewsPage/index.tsx`

#### State Management:

```typescript
const [newsArticles, setNewsArticles] = useState<NewsArticle[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [currentPage, setCurrentPage] = useState<number>(1);
const [totalItems, setTotalItems] = useState<number>(0);
const [searchTerm, setSearchTerm] = useState('');
const limit = 12;
```

#### Features Implemented:

1. **Fetch News từ API**
   - Load initial page với pagination
   - Sort theo date descending

2. **Search Functionality**
   - Search box với debounce
   - Trigger search khi nhấn Enter
   - Reset về trang 1 khi search

3. **Load More**
   - Button "LOAD MORE" để load thêm news
   - Disable khi đang loading
   - Hiển thị tổng số khi đã load hết

4. **UI States**
   - **Loading**: Hiển thị spinner khi fetch data
   - **Error**: Hiển thị error message với button Retry
   - **Empty**: Hiển thị message khi không có kết quả
   - **Success**: Hiển thị danh sách news

5. **Image Handling**
   - Hiển thị featured image từ API
   - Fallback placeholder khi không có image

6. **Date Formatting**
   - Format từ ISO string sang DD/MM/YYYY

7. **Multi-language Support**
   - Sẵn sàng cho Vietnamese/English
   - Fallback khi không có bản dịch

### 3. **Updated Styles**

**File**: `src/pages/NewsPage/NewsPage.css`

Added styles for:
- `.news-item-row__image-placeholder` - Placeholder khi không có image
- `.news-page__loading` - Loading state
- `.news-page__error` - Error state với retry button
- `.news-page__empty` - Empty state
- `.news-page__load-more` - Load more button
- `.news-page__total` - Total count display

### 4. **API Index Export**

**File**: `src/api/index.ts`

```typescript
export * from './news';
```

## 🔄 Data Flow

```
User visits /news
    ↓
useEffect triggered
    ↓
newsAPI.getAll(page, limit, 'date', 'desc')
    ↓
apiClient.get('/api/public/news?...')
    ↓
Backend returns NewsApiResponse
    ↓
Transform & set state
    ↓
Render news list
```

## 📊 API Response Example

```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": "123e4567-e89b-12d3-a456-426614174000",
        "title": "Triển lãm nghệ thuật đương đại",
        "titleEn": "Contemporary Art Exhibition",
        "content": "Nội dung đầy đủ...",
        "contentEn": "Full content...",
        "excerpt": "Tóm tắt ngắn...",
        "excerptEn": "Short excerpt...",
        "featuredImage": "/api/public/file/abc123...",
        "publishedAt": "2024-11-29T10:00:00.000Z",
        "createdAt": "2024-11-28T15:30:00.000Z",
        "updatedAt": "2024-11-29T09:00:00.000Z",
        "author": "Nguyễn Văn A",
        "authorEn": "Nguyen Van A",
        "tags": ["exhibition", "contemporary-art"],
        "category": "events",
        "categoryEn": "Events",
        "slug": "trien-lam-nghe-thuat-duong-dai",
        "viewCount": 150,
        "status": "published"
      }
    ],
    "meta": {
      "page": 1,
      "limit": 12,
      "total": 45
    }
  },
  "message": "News fetched successfully"
}
```

## 🧪 Testing Guide

### Manual Testing:

1. **Start dev server**
```bash
yarn dev
# or
npm run dev
```

2. **Navigate to News page**
```
http://localhost:5173/news
```

3. **Test scenarios:**
   - ✅ Initial load (first 12 news articles)
   - ✅ Load more (click button to load next page)
   - ✅ Search (type keyword and press Enter)
   - ✅ Empty search results
   - ✅ Error handling (stop backend và test)
   - ✅ Missing images (placeholder hiển thị)
   - ✅ Date formatting (DD/MM/YYYY)

### Using Postman:

1. **Import request**
```
GET http://localhost:3000/api/public/news?page=1&limit=12&sortBy=date&sortOrder=desc
```

2. **Test different parameters:**
   - Change `page` to 2, 3...
   - Change `limit` to 6, 24...
   - Add `search` parameter
   - Add `category` parameter

## 🚀 Usage Examples

### Basic Usage:

```typescript
import { newsAPI, getNewsImageUrl, formatNewsDate } from '@/api/news';

// Get all news
const response = await newsAPI.getAll(1, 12, 'date', 'desc');
const articles = response.data.data;

// Get image URL
const imageUrl = getNewsImageUrl(article.featuredImage);

// Format date
const formattedDate = formatNewsDate(article.publishedAt);
```

### Search News:

```typescript
// Search by keyword
const results = await newsAPI.search('exhibition', 1, 12);
console.log(results.data.data); // Matching articles
```

### Get Single Article:

```typescript
// Get by ID
const article = await newsAPI.getById('123e4567-e89b-12d3-a456-426614174000');
console.log(article.title);
```

### Filter by Category:

```typescript
// Get news in specific category
const events = await newsAPI.getByCategory('events', 1, 12);
```

## 📝 Notes & Recommendations

### Current Implementation:

✅ **Working Features:**
- Pagination with load more
- Search functionality
- Image handling with fallback
- Date formatting
- Error handling
- Loading states
- Multi-language ready

### Future Enhancements:

🔮 **Suggested Improvements:**

1. **NewsDetailPage Integration**
   - Fetch single news by ID
   - Display full content
   - Related articles

2. **Advanced Filters**
   - Filter by category
   - Filter by tags
   - Date range filter

3. **Performance**
   - Implement caching
   - Add image lazy loading
   - Infinite scroll option

4. **SEO**
   - Add meta tags
   - OpenGraph tags
   - Structured data

5. **Social Sharing**
   - Share buttons
   - Copy link functionality

6. **Analytics**
   - Track view count
   - Most popular articles

## 🐛 Troubleshooting

### Issue: API returns 404
**Solution**: Kiểm tra backend đang chạy và URL đúng trong `src/config/env.ts`

### Issue: Images không hiển thị
**Solution**: Verify `imageBaseUrl` trong config và path từ API đúng format

### Issue: Search không hoạt động
**Solution**: Kiểm tra backend có support search parameter không

### Issue: Date format lỗi
**Solution**: Verify backend trả về date theo ISO format

## 🔗 Related Files

- ✅ `src/api/news.ts` - News API service
- ✅ `src/api/index.ts` - Export news API
- ✅ `src/pages/NewsPage/index.tsx` - News page with API integration
- ✅ `src/pages/NewsPage/NewsPage.css` - Styles with new states
- ✅ `src/config/env.ts` - API configuration
- ✅ `src/api/client.ts` - HTTP client

## 📞 Support

Nếu có vấn đề:
1. Check browser console cho API errors
2. Check Network tab trong DevTools
3. Verify backend API đang hoạt động
4. Test với Postman để xác định issue ở frontend hay backend

---

**Created**: Nov 29, 2025  
**Status**: ✅ Completed  
**Branch**: `fix`

