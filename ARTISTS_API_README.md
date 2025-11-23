# Artists API Integration

Quick guide for integrating Artists API based on actual backend response.

---

## 📦 API Service

**File**: `src/api/artists.ts`

### Import

```typescript
import {
  artistsAPI,
  Artist,
  ArtistDetail,
  getArtistImageUrl,
  getArtistDisplayName,
} from "@/api/artists";
```

### API Methods

#### 1. Get All Artists

```typescript
const response = await artistsAPI.getAll(1, 24);
// response.data.data → Artist[]
// response.data.meta → { page: 1, limit: 24, total: 26 }
```

#### 2. Get Artist Detail

```typescript
const artist = await artistsAPI.getById(id);
// Returns: ArtistDetail with full info
```

#### 3. Search Artists

```typescript
const results = await artistsAPI.search("Alix", 1, 24);
// Returns: ArtistsApiResponse
```

---

## 📊 Data Structure (from actual API)

### Artist (List View)

```typescript
{
  id: string;
  fullName: string; // "Alix Aymé"
  artistCode: string; // "AYM"
  portraitImage: string | null; // Portrait photo
  generation: string; // Generation info
  nationality: string; // "Pháp", "Việt Nam"
  placeOfBirth: string | null;
  currentResidence: string | null;
  artworksCount: number; // Number of artworks
}
```

### ArtistDetail (Detail View)

```typescript
{
  // All fields from Artist +
  bioSummary: string;            // Short bio (Vietnamese)
  bioSummaryEn: string | null;   // Short bio (English)
  biography: string;              // Full biography
  biographyEn: string | null;
  description: string;
  descriptionEn: string | null;

  // Arrays
  education: string[];
  mentors: string[];
  workshops: string[];
  soloExhibitions: string[];
  groupExhibitions: string[];
  internationalExhibitions: string[];
  awards: string[];
  pressLinks: string[];
  booksCatalogues: string[];
  otherEvents: string[];
  interviewsVideos: string[];

  // Additional info
  period: string | null;
  specialization: string | null;
  specializationEn: string | null;
  artistStatement: string | null;
  artistStatementEn: string | null;
  website: string | null;

  // Style & technique
  primaryMaterials: string[];
  techniques: string[];
  styles: string[];
  themes: string[];

  // Social media (array of objects)
  socials: Array<{
    platform: string;
    url: string;
  }>;

  // Files
  files: any[];
}
```

---

## 💻 Usage Examples

### Fetch & Display Artists

```typescript
const [artists, setArtists] = useState<Artist[]>([]);

useEffect(() => {
  artistsAPI
    .getAll(1, 24)
    .then((res) => {
      setArtists(res.data.data);
    })
    .catch((err) => console.error(err));
}, []);

return (
  <div className="artists-grid">
    {artists.map((artist) => (
      <div key={artist.id} className="artist-card">
        {artist.portraitImage ? (
          <img src={getArtistImageUrl(artist.portraitImage)} />
        ) : (
          <div className="placeholder">{artist.fullName.charAt(0)}</div>
        )}
        <h3>{artist.fullName}</h3>
        <p>{artist.nationality}</p>
        <span>{artist.artworksCount} artworks</span>
      </div>
    ))}
  </div>
);
```

### Artist Detail Page

```typescript
const [artist, setArtist] = useState<ArtistDetail | null>(null);
const { id } = useParams();

useEffect(() => {
  artistsAPI
    .getById(id)
    .then((data) => setArtist(data))
    .catch((err) => console.error(err));
}, [id]);

if (!artist) return <div>Loading...</div>;

return (
  <div className="artist-detail">
    <header>
      <img src={getArtistImageUrl(artist.portraitImage)} />
      <h1>{artist.fullName}</h1>
      <p>
        {artist.nationality} • {artist.generation}
      </p>
      <p>{artist.artworksCount} artworks</p>
    </header>

    <section className="biography">
      <h2>Biography</h2>
      <p>{artist.biography || artist.bioSummary}</p>
    </section>

    {artist.education.length > 0 && (
      <section>
        <h2>Education</h2>
        <ul>
          {artist.education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}
        </ul>
      </section>
    )}

    {artist.soloExhibitions.length > 0 && (
      <section>
        <h2>Solo Exhibitions</h2>
        <ul>
          {artist.soloExhibitions.map((ex, i) => (
            <li key={i}>{ex}</li>
          ))}
        </ul>
      </section>
    )}

    {artist.socials.length > 0 && (
      <div className="socials">
        {artist.socials.map((social, i) => (
          <a key={i} href={social.url} target="_blank">
            {social.platform}
          </a>
        ))}
      </div>
    )}
  </div>
);
```

### Search Implementation

```typescript
const [query, setQuery] = useState("");
const [results, setResults] = useState<Artist[]>([]);

const handleSearch = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    const response = await artistsAPI.search(query, 1, 24);
    if (response.success) {
      setResults(response.data.data);
    }
  } catch (err) {
    console.error("Search failed:", err);
  }
};

return (
  <form onSubmit={handleSearch}>
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="Search artists..."
    />
    <button type="submit">Search</button>
  </form>
);
```

---

## 🎨 Helper Functions

### getArtistImageUrl()

```typescript
const url = getArtistImageUrl(artist.portraitImage);
// Input: "/api/public/file/xxx" or null
// Output: "https://domain.com/api/public/file/xxx" or null
```

### getArtistDisplayName()

```typescript
const name = getArtistDisplayName(artist);
// Returns: artist name or "Unknown Artist"
```

### getArtistBio()

```typescript
const bio = getArtistBio(artist, "vi");
// Returns: bioSummary or biography with language fallback
```

### getSocialLink()

```typescript
const facebook = getSocialLink(artist, "facebook");
// Returns: URL or null
```

---

## 🔗 API Endpoints

**Base URL**: `http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com`

| Method | Endpoint                               | Description      |
| ------ | -------------------------------------- | ---------------- |
| GET    | `/api/public/artists?page=1&limit=24`  | List all artists |
| GET    | `/api/public/artists/:id`              | Get artist by ID |
| GET    | `/api/public/artists/search?q=keyword` | Search artists   |

---

## 📝 Real API Response Example

### GET /api/public/artists?page=1&limit=3

```json
{
  "success": true,
  "data": {
    "data": [
      {
        "id": "c63e642b-2108-41f9-8bf3-78f8cddfcc43",
        "fullName": "Alix Aymé",
        "artistCode": "AYM",
        "portraitImage": null,
        "generation": "",
        "nationality": "Pháp",
        "placeOfBirth": null,
        "currentResidence": null,
        "artworksCount": 1
      }
    ],
    "meta": {
      "page": 1,
      "limit": 3,
      "total": 26
    }
  },
  "message": "Artists fetched successfully"
}
```

### GET /api/public/artists/:id

```json
{
  "success": true,
  "data": {
    "id": "c63e642b-2108-41f9-8bf3-78f8cddfcc43",
    "fullName": "Alix Aymé",
    "artistCode": "AYM",
    "portraitImage": null,
    "generation": "",
    "nationality": "Pháp",
    "bioSummary": "Alix Aymé là một nữ họa sĩ người Pháp...",
    "biography": "Full biography text...",
    "education": [],
    "soloExhibitions": [],
    "groupExhibitions": [],
    "awards": [],
    "socials": [],
    "artworksCount": 1
  },
  "message": "Artist fetched successfully"
}
```

---

## ✅ Next Steps

1. Create Artists list page component
2. Create Artist detail page component
3. Add routes to AppRouter
4. Link from collection page (artist names)
5. Test pagination & search
6. Style components

---

**Updated**: November 22, 2025  
**Based on**: Actual backend API response  
**Status**: ✅ Ready to use
