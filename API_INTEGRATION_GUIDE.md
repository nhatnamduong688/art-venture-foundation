# API Integration Guide - Artwork Collection

## ✅ Hoàn thành

Đã tích hợp thành công backend API vào CollectionPage trên nhánh `fix`.

## 🎯 Những gì đã làm

### 1. **Cấu hình Backend URL**

**File**: `src/config/env.ts`

```typescript
// API Configuration
apiUrl: getEnvVar('VITE_API_URL', 'http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com'),
imageBaseUrl: getEnvVar('VITE_IMAGE_BASE_URL', 'http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com'),
```

- `apiUrl`: Base URL cho API calls
- `imageBaseUrl`: Base URL để construct full image URLs

### 2. **Artwork API Service**

**File**: `src/api/artworks.ts`

#### Interfaces theo Backend Response:

```typescript
export interface Artist {
  id: string;
  fullName: string;
  artistCode: string;
  image: string | null;
  bioSummary: string;
  bioSummaryEn: string | null;
}

export interface Artwork {
  id: string;
  title: string;
  titleEn: string | null;
  inventoryNumber: string;
  description: string | null;
  descriptionEn: string | null;
  image: string | null;  // Relative path như: /api/public/file/xxx
  dateCreated: string;
  belongsToAVCollection: boolean;
  avArtCollectionId: string | null;
  artist: Artist;
}

export interface ArtworkApiResponse {
  success: boolean;
  data: {
    data: Artwork[];
    meta: {
      page: number;
      limit: number;
      total: number;
    };
  };
  message: string;
}
```

#### Helper Function - Image URL:

```typescript
export const getImageUrl = (imagePath: string | null): string | null => {
  if (!imagePath) return null;
  
  // If already full URL
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If relative path (like /api/public/file/xxx)
  return `${env.imageBaseUrl}${imagePath}`;
};
```

**Ví dụ:**
- Input: `/api/public/file/7c4e5ca3-1998-439c-968c-b3c406fa2c95`
- Output: `http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/file/7c4e5ca3-1998-439c-968c-b3c406fa2c95`

#### API Methods:

```typescript
export const artworksAPI = {
  // Get all artworks with pagination
  getAll: async (page: number = 1, limit: number = 22): Promise<ArtworkApiResponse>
  
  // Get single artwork by ID
  getById: async (id: string): Promise<Artwork>
  
  // Search artworks
  search: async (query: string, page: number = 1, limit: number = 22): Promise<ArtworkApiResponse>
};
```

### 3. **CollectionPage Integration**

**File**: `src/pages/CollectionPage/index.tsx`

#### State Management:

```typescript
const [artworks, setArtworks] = useState<Artwork[]>([]);
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);
const [currentPage, setCurrentPage] = useState<number>(1);
const [totalItems, setTotalItems] = useState<number>(0);
const limit = 22;
```

#### Fetch Data với useEffect:

```typescript
useEffect(() => {
  const fetchArtworks = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await artworksAPI.getAll(currentPage, limit);
      
      if (response.success && response.data) {
        // Transform API data to local format
        const transformedArtworks: Artwork[] = response.data.data.map((artwork, index) => {
          const sizes = ['large', 'medium', 'medium', 'small', 'medium', 'medium'];
          const size = sizes[index % sizes.length];
          
          return {
            id: artwork.id,
            title: artwork.title,
            artist: artwork.artist.fullName,
            artistAvatar: getImageUrl(artwork.artist.image),
            image: getImageUrl(artwork.image),
            category: 'all',
            size: size
          };
        });
        
        setArtworks(transformedArtworks);
        setTotalItems(response.data.meta.total);
      }
    } catch (err: any) {
      console.error('Error fetching artworks:', err);
      setError(err.message || 'Failed to load artworks');
    } finally {
      setLoading(false);
    }
  };

  fetchArtworks();
}, [currentPage]);
```

#### UI States:

1. **Loading State**: Hiển thị khi đang fetch data
2. **Error State**: Hiển thị khi có lỗi với button Retry
3. **Empty State**: Hiển thị khi không có artwork
4. **Success State**: Hiển thị grid artworks

#### Pagination - Load More:

```typescript
const handleLoadMore = () => {
  if (currentPage * limit < totalItems) {
    setCurrentPage(prev => prev + 1);
  }
};

const hasMore = currentPage * limit < totalItems;
```

Button sẽ hiển thị:
- "VIEW MORE" nếu còn items
- "Showing all {totalItems} artworks" nếu đã hết

#### Xử lý Missing Images:

```typescript
{artwork.image ? (
  <img src={artwork.image} alt={artwork.title} />
) : (
  <div style={{ 
    width: '100%', 
    height: '100%', 
    background: '#e0e0e0', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    color: '#999'
  }}>
    No Image
  </div>
)}
```

## 📊 Backend API Response Example

**Endpoint**: `GET /api/public/artworks?page=1&limit=22`

```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": "3ea05b11-6562-4dfc-a23f-fe43a99554aa",
        "title": "Anh Bộ Đội Cùng Ngư Dân Vá Lưới",
        "titleEn": null,
        "inventoryNumber": "0764-20230522-THO",
        "description": null,
        "descriptionEn": null,
        "image": "/api/public/file/7c4e5ca3-1998-439c-968c-b3c406fa2c95",
        "dateCreated": "1969",
        "belongsToAVCollection": false,
        "avArtCollectionId": null,
        "artist": {
          "id": "aba49eef-1ea9-4da3-92f4-3306d5fe2ffd",
          "fullName": "Trần Huy Oánh",
          "artistCode": "THO",
          "image": null,
          "bioSummary": "Họa sĩ Trần Huy Oánh...",
          "bioSummaryEn": null
        }
      }
    ],
    "meta": {
      "page": 1,
      "limit": 22,
      "total": 63
    }
  },
  "message": "Artworks fetched successfully"
}
```

## 🚀 Deployment

### Nhánh `fix` đã được push lên GitHub

```bash
git push origin fix
```

Vercel sẽ tự động:
1. Detect commit mới trên nhánh `fix`
2. Build project
3. Deploy lên preview URL

### Kiểm tra Deployment:

1. **Vercel Dashboard**: https://vercel.com/dashboard
   - Chọn project → Deployments tab
   - Tìm deployment từ nhánh `fix`

2. **GitHub**: Check Pull Requests
   - Vercel bot sẽ comment URL preview

### Preview URL Format:

```
https://av-frontend-test-git-fix-[hash]-nhatnamduong688s-projects.vercel.app
```

## 🧪 Testing

### Test Scenarios:

1. ✅ **Load Initial Page**: Fetch first 22 artworks
2. ✅ **Load More**: Click button to load next page
3. ✅ **Missing Images**: Show placeholder for artworks without images
4. ✅ **Error Handling**: Show error message with retry button
5. ✅ **Loading State**: Show loading indicator while fetching
6. ✅ **Empty State**: Show message when no artworks

### Manual Test:

```bash
# Start dev server
yarn dev

# Navigate to
http://localhost:5173/collection
```

## 📝 Notes

### ⚠️ Current Limitations:

1. **Category Filter**: Backend chưa có field category, nên filter People/Nature/Sculpture chưa hoạt động (tất cả artworks đều category='all')
2. **Artist Collection Card**: Vẫn dùng mock data vì cần API riêng để lấy featured artists
3. **Image Optimization**: Chưa có image resize/optimization từ backend

### 🔮 Future Improvements:

1. Add category field to backend và update filter logic
2. Create API endpoint for featured artists
3. Add image lazy loading
4. Implement search functionality
5. Add artwork detail page integration
6. Cache API responses
7. Add infinite scroll option

## 🔗 Files Changed

- ✅ `src/config/env.ts` - Added backend URL config
- ✅ `src/api/artworks.ts` - Complete artwork API service
- ✅ `src/pages/CollectionPage/index.tsx` - Integrated API with UI

## 📞 Support

Nếu có vấn đề:
1. Check Console log để xem API errors
2. Verify backend URL còn hoạt động
3. Check network tab trong DevTools
4. Xem API response structure

---

**Created**: Nov 17, 2025  
**Branch**: `fix`  
**Status**: ✅ Completed & Deployed

