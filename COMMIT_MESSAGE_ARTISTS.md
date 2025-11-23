# Git Commit Message

```
feat: integrate Artists API with real backend data

- Create artists API service with 3 methods (getAll, getById, search)
- Integrate real API into ArtistsPage (list view)
  - Fetch artists with pagination support
  - Implement search functionality
  - Add loading, error, and empty states
  - Handle portrait images with placeholder fallback
- Integrate real API into ArtistDetailPage (detail view)
  - Fetch artist details by ID
  - Display full biography and information
  - Populate 6 tabs with real data (bio, education, exhibitions, etc.)
  - Handle missing/null data gracefully
- Update type definitions to match backend response
  - Change Artist interface fields (name → fullName, etc.)
  - Add ArtistDetail interface with all fields
  - Use UUID for artist IDs
- Add helper functions for image URLs and data formatting
- Replace mock data with real API calls (26 real artists)

API Base: http://av-foundation-backend-dev.us-east-1.elasticbeanstalk.com

Files modified:
- src/api/artists.ts (new)
- src/api/artworks.ts (rename Artist → ArtworkArtist)
- src/api/index.ts
- src/pages/ArtistsPage/index.tsx
- src/pages/ArtistDetailPage/index.tsx

Tested with:
✅ TypeScript: no errors
✅ Linter: no errors
✅ API: working correctly
```

---

## Alternative Short Version

```
feat: integrate Artists API with backend

- Add artists API service (getAll, getById, search)
- Replace mock data with real API in ArtistsPage & ArtistDetailPage
- Add loading/error states and handle null data
- Update types to match backend response (26 real artists)
```

---

## Command to Commit

```bash
git add .
git commit -m "feat: integrate Artists API with real backend data"
git push origin fix
```

