# Postman API Testing Guide

## ✅ API Backend đang hoạt động!

**Base URL**: `http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com`

---

## 📋 **1. GET ALL ARTWORKS**

### Request Details:

```
Method: GET
URL: http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks
```

### Query Parameters:

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `page` | number | No | 1 | Page number |
| `limit` | number | No | 22 | Items per page |

### Headers:

```
Content-Type: application/json
```

**⚠️ NOTE**: Bạn dùng `application/x-www-form-urlencoded` nhưng API này cần `application/json`

### Example URLs:

```
# Get first page with 22 items
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=22

# Get first page with 5 items (for quick testing)
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=5

# Get second page
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=2&limit=22
```

---

## 🎯 **POSTMAN SETUP**

### Step 1: Create New Request

1. Open Postman
2. Click **"New"** → **"HTTP Request"**
3. Name it: `Get All Artworks`

### Step 2: Configure Request

**Method**: Select `GET`

**URL**: 
```
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks
```

**Params** tab:
```
KEY       VALUE
page      1
limit     22
```

**Headers** tab:
```
KEY               VALUE
Content-Type      application/json
```

**Body**: 
- Select: `none` (GET request không cần body)

### Step 3: Send Request

Click **"Send"** button

---

## 📊 **EXPECTED RESPONSE**

### Status Code:
```
200 OK
```

### Response Structure:

```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": "uuid-string",
        "title": "Artwork Title",
        "titleEn": null,
        "inventoryNumber": "XXXX-YYYYMMDD-CODE",
        "description": null,
        "descriptionEn": null,
        "image": "/api/public/file/uuid-string",
        "dateCreated": "1969",
        "belongsToAVCollection": false,
        "avArtCollectionId": null,
        "artist": {
          "id": "uuid-string",
          "fullName": "Artist Name",
          "artistCode": "CODE",
          "image": null,
          "bioSummary": "Artist biography...",
          "bioSummaryEn": null
        }
      }
      // ... more artworks
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

---

## 🖼️ **IMAGE URLs**

Artwork images có dạng relative path. Bạn cần prepend base URL:

### Example:

**From API**:
```json
"image": "/api/public/file/7c4e5ca3-1998-439c-968c-b3c406fa2c95"
```

**Full URL** (để hiển thị):
```
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/file/7c4e5ca3-1998-439c-968c-b3c406fa2c95
```

### Test Image URL in Browser:

Copy full URL và paste vào browser để xem ảnh:
```
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/file/7c4e5ca3-1998-439c-968c-b3c406fa2c95
```

---

## 🧪 **SAMPLE cURL COMMANDS**

### Test với limit=5 (quick test):

```bash
curl -X GET \
  'http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=5' \
  -H 'Content-Type: application/json'
```

### Test với limit=22 (production default):

```bash
curl -X GET \
  'http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=22' \
  -H 'Content-Type: application/json'
```

### Pretty print with jq (if installed):

```bash
curl -X GET \
  'http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=5' \
  -H 'Content-Type: application/json' | jq
```

---

## 📈 **TEST SCENARIOS**

### 1. **First Page**
```
GET /api/public/artworks?page=1&limit=22

Expected:
- Returns 22 artworks
- meta.page = 1
- meta.total = 63
```

### 2. **Second Page**
```
GET /api/public/artworks?page=2&limit=22

Expected:
- Returns 22 artworks
- meta.page = 2
- meta.total = 63
```

### 3. **Last Page**
```
GET /api/public/artworks?page=3&limit=22

Expected:
- Returns 19 artworks (63 - 44 = 19)
- meta.page = 3
- meta.total = 63
```

### 4. **Small Limit (Quick Test)**
```
GET /api/public/artworks?page=1&limit=5

Expected:
- Returns 5 artworks
- meta.page = 1
- meta.limit = 5
- meta.total = 63
```

---

## 🔍 **RESPONSE ANALYSIS**

### Total Count:
```json
"meta": {
  "total": 63  // Tổng số artworks
}
```

### Pagination Calculation:
```
Total artworks: 63
Limit per page: 22

Page 1: items 1-22   (22 artworks)
Page 2: items 23-44  (22 artworks)
Page 3: items 45-63  (19 artworks)
```

### Artwork with Image:
```json
{
  "id": "3ea05b11-6562-4dfc-a23f-fe43a99554aa",
  "title": "Anh Bộ Đội Cùng Ngư Dân Vá Lưới",
  "image": "/api/public/file/7c4e5ca3-1998-439c-968c-b3c406fa2c95",
  "dateCreated": "1969",
  "artist": {
    "fullName": "Trần Huy Oánh"
  }
}
```

### Artwork without Image:
```json
{
  "id": "cd7a882f-5fd7-4a6c-896c-b343c6ebca97",
  "title": "Allegorv Of Writing",
  "image": null,  // No image available
  "dateCreated": "N/A",
  "artist": {
    "fullName": "Unknown"
  }
}
```

---

## ⚠️ **COMMON ISSUES & FIXES**

### Issue 1: Wrong Content-Type

❌ **Wrong**:
```
Content-Type: application/x-www-form-urlencoded
```

✅ **Correct**:
```
Content-Type: application/json
```

### Issue 2: Double Slashes in URL

❌ **Wrong**:
```
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com//api/public/artworks
                                                                  ^^
                                                          (double slash)
```

✅ **Correct**:
```
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks
```

### Issue 3: Body in GET Request

❌ **Wrong**: Adding body to GET request
```
GET request should not have body
```

✅ **Correct**: Use query parameters instead
```
?page=1&limit=22
```

---

## 🎯 **POSTMAN COLLECTION**

You can save this as a Postman collection:

```json
{
  "info": {
    "name": "AV Foundation API",
    "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json"
  },
  "item": [
    {
      "name": "Get All Artworks (Default)",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=22",
          "protocol": "http",
          "host": [
            "av-foundation-backend-dev",
            "us-east-1",
            "elasticbeanstalk",
            "com"
          ],
          "path": [
            "api",
            "public",
            "artworks"
          ],
          "query": [
            {
              "key": "page",
              "value": "1"
            },
            {
              "key": "limit",
              "value": "22"
            }
          ]
        }
      }
    },
    {
      "name": "Get All Artworks (Quick Test - 5 items)",
      "request": {
        "method": "GET",
        "header": [
          {
            "key": "Content-Type",
            "value": "application/json"
          }
        ],
        "url": {
          "raw": "http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=5",
          "protocol": "http",
          "host": [
            "av-foundation-backend-dev",
            "us-east-1",
            "elasticbeanstalk",
            "com"
          ],
          "path": [
            "api",
            "public",
            "artworks"
          ],
          "query": [
            {
              "key": "page",
              "value": "1"
            },
            {
              "key": "limit",
              "value": "5"
            }
          ]
        }
      }
    }
  ]
}
```

---

## 🚀 **QUICK TEST IN POSTMAN**

### Copy & Paste này vào Postman:

**URL**:
```
http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com/api/public/artworks?page=1&limit=5
```

**Headers**:
```
Content-Type: application/json
```

**Method**: `GET`

**Body**: `none`

Click **Send** → Expect `200 OK` với 5 artworks

---

## 📞 **SUPPORT**

Nếu gặp lỗi:

1. Check URL có đúng không (không có double slashes)
2. Check Headers: `Content-Type: application/json`
3. Check Method: `GET` (not POST)
4. Check Body: `none` (GET không cần body)
5. Check backend có online không: ping URL base

---

**Last Updated**: November 17, 2025  
**API Status**: ✅ Online & Working  
**Total Artworks**: 63




