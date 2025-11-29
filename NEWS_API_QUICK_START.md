# 🚀 News API - Quick Start

## ✅ Đã tích hợp xong!

API News đã được tích hợp vào NewsPage với đầy đủ tính năng pagination, search, và load more.

## 📍 Endpoint

```
GET http://localhost:3000/api/public/news?page=1&limit=12&sortBy=date&sortOrder=desc
```

## 🎯 Files Chính

```
src/api/news.ts              → News API service
src/pages/NewsPage/index.tsx → News page với API integration
```

## 💻 Sử dụng

```typescript
import { newsAPI, getNewsImageUrl, formatNewsDate } from '@/api/news';

// Get all news (page 1, 12 items, sorted by date desc)
const response = await newsAPI.getAll(1, 12, 'date', 'desc');
const articles = response.data.data;
const total = response.data.meta.total;

// Search news
const results = await newsAPI.search('exhibition', 1, 12);

// Get single news
const article = await newsAPI.getById('news-id');

// Helper: Get image URL
const imageUrl = getNewsImageUrl(article.featuredImage);

// Helper: Format date
const date = formatNewsDate(article.publishedAt); // "29/11/2025"
```

## 🧪 Test Nhanh

1. **Start backend** (port 3000)
2. **Start frontend**: `yarn dev`
3. **Navigate to**: `http://localhost:5173/news`
4. **Check**: News list hiển thị, search works, load more works

## 📊 Features

- ✅ Fetch news từ API với pagination
- ✅ Search by keyword (nhấn Enter)
- ✅ Load more button
- ✅ Loading/Error/Empty states
- ✅ Image fallback
- ✅ Date formatting (DD/MM/YYYY)
- ✅ Multi-language ready

## 📖 Full Docs

- `NEWS_API_SUMMARY.md` - Tóm tắt đầy đủ
- `NEWS_API_INTEGRATION_GUIDE.md` - Hướng dẫn chi tiết
- `TEST_NEWS_API.md` - Testing checklist

## 🎉 Xong!

Bạn có thể:
1. Test ngay trên `http://localhost:5173/news`
2. Xem docs để hiểu rõ hơn
3. Push code lên Git (đã commit sẵn)
4. Deploy lên Vercel

---

**Commit**: `feat: integrate News API with pagination, search and load more`
**Branch**: `fix`
**Date**: Nov 29, 2025

