# News API Integration - Tóm Tắt Nhanh

## ✅ Đã Hoàn Thành

Đã tích hợp API News vào NewsPage với đầy đủ tính năng.

## 📦 Files Đã Tạo/Sửa

1. **`src/api/news.ts`** (NEW) - News API service với các helper functions
2. **`src/api/index.ts`** - Thêm export news API
3. **`src/pages/NewsPage/index.tsx`** - Tích hợp API, thêm search, load more
4. **`src/pages/NewsPage/NewsPage.css`** - Thêm styles cho loading/error/empty states

## 🎯 Tính Năng

### API Endpoint:
```
GET http://localhost:3000/api/public/news?page=1&limit=12&sortBy=date&sortOrder=desc
```

### Frontend Features:
- ✅ **Fetch news từ API** với pagination (12 items/page)
- ✅ **Search** - Nhập từ khóa và nhấn Enter để tìm kiếm
- ✅ **Load More** - Button để load thêm news
- ✅ **Loading State** - Hiển thị spinner khi đang fetch
- ✅ **Error Handling** - Hiển thị lỗi với nút Retry
- ✅ **Empty State** - Hiển thị khi không có kết quả
- ✅ **Image Fallback** - Placeholder khi không có ảnh
- ✅ **Date Formatting** - Format theo DD/MM/YYYY

## 🚀 Quick Start

### 1. Import và sử dụng:
```typescript
import { newsAPI, getNewsImageUrl, formatNewsDate } from '@/api/news';

// Get all news
const response = await newsAPI.getAll(1, 12, 'date', 'desc');

// Search
const results = await newsAPI.search('keyword', 1, 12);

// Get single news
const article = await newsAPI.getById('news-id');
```

### 2. Helper Functions:
```typescript
// Get full image URL
const imageUrl = getNewsImageUrl(article.featuredImage);

// Format date
const date = formatNewsDate(article.publishedAt); // "29/11/2025"

// Get title (multi-language)
const title = getNewsTitle(article, 'vi'); // Fallback to titleEn if needed
```

## 🧪 Test Nhanh

### Postman:
```bash
GET http://localhost:3000/api/public/news?page=1&limit=12&sortBy=date&sortOrder=desc
```

### Browser:
```
1. Mở http://localhost:5173/news
2. Kiểm tra news list hiển thị
3. Test search
4. Test load more
```

## 📊 API Response Structure

```typescript
{
  success: boolean;
  data: {
    data: NewsArticle[];  // Array of news
    meta: {
      page: number;       // Current page
      limit: number;      // Items per page
      total: number;      // Total items
    };
  };
  message: string;
}
```

## 📝 NewsArticle Interface

```typescript
interface NewsArticle {
  id: string;
  title: string;                    // Vietnamese title
  titleEn: string | null;           // English title
  content: string;                  // Full content
  excerpt: string | null;           // Short summary
  featuredImage: string | null;     // Image path
  publishedAt: string;              // ISO date string
  author: string | null;            // Author name
  tags: string[];                   // Array of tags
  category: string | null;          // Category
  // ... more fields
}
```

## 🎨 UI States

| State | Khi nào | Hiển thị gì |
|-------|---------|-------------|
| Loading | Đang fetch data | Loading spinner |
| Error | API lỗi | Error message + Retry button |
| Empty | Không có kết quả | "No news articles found" |
| Success | Có data | Danh sách news + Load More button |

## 🔗 API Methods

| Method | Mục đích | Example |
|--------|----------|---------|
| `newsAPI.getAll()` | Lấy tất cả news | `getAll(1, 12, 'date', 'desc')` |
| `newsAPI.getById()` | Lấy 1 news chi tiết | `getById('123-abc')` |
| `newsAPI.search()` | Tìm kiếm news | `search('exhibition', 1, 12)` |
| `newsAPI.getByCategory()` | Lọc theo category | `getByCategory('events', 1, 12)` |
| `newsAPI.getByTag()` | Lọc theo tag | `getByTag('art', 1, 12)` |

## ⚠️ Lưu Ý

1. **API URL**: Đã config trong `src/config/env.ts`
   - Development: `http://localhost:3000`
   - Production: CloudFront URL

2. **Image URLs**: Tự động construct từ `imageBaseUrl + imagePath`

3. **Multi-language**: Sử dụng helper functions để fallback giữa VI/EN

4. **Pagination**: Mỗi lần load thêm 12 items

5. **Search**: Trigger khi nhấn Enter (không auto-search khi gõ)

## 📖 Docs Đầy Đủ

Xem chi tiết tại:
- `NEWS_API_INTEGRATION_GUIDE.md` - Hướng dẫn đầy đủ
- `TEST_NEWS_API.md` - Checklist testing

## 🐛 Troubleshooting

| Vấn đề | Giải pháp |
|--------|-----------|
| CORS error | Backend enable CORS cho localhost:5173 |
| Images không load | Check `imageBaseUrl` config |
| API 404 | Verify backend đang chạy |
| Empty list | Check backend có data + Network tab |

---

**Created**: Nov 29, 2025  
**Status**: ✅ Ready to Use  
**Branch**: `fix`

