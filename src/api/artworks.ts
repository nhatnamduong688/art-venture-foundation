/**
 * API - Artworks
 * Artwork-related API endpoints
 */

import { apiClient } from './client';
import { env } from '../config/env';

// Artist interface based on backend response
export interface Artist {
  id: string;
  fullName: string;
  artistCode: string;
  image: string | null;
  bioSummary: string;
  bioSummaryEn: string | null;
}

// Artwork interface based on backend response
export interface Artwork {
  id: string;
  title: string;
  titleEn: string | null;
  inventoryNumber: string;
  description: string | null;
  descriptionEn: string | null;
  image: string | null;
  dateCreated: string;
  belongsToAVCollection: boolean;
  avArtCollectionId: string | null;
  artist: Artist;
}

// Meta information for pagination
export interface ArtworkMeta {
  page: number;
  limit: number;
  total: number;
}

// Backend API response structure
export interface ArtworkApiResponse {
  success: boolean;
  data: {
    data: Artwork[];
    meta: ArtworkMeta;
  };
  message: string;
}

// Helper function to get full image URL
export const getImageUrl = (imagePath: string | null): string | null => {
  if (!imagePath) return null;
  
  // If it's already a full URL, return as is
  if (imagePath.startsWith('http://') || imagePath.startsWith('https://')) {
    return imagePath;
  }
  
  // If it's a relative path (like /api/public/file/xxx), prepend the base URL
  return `${env.imageBaseUrl}${imagePath}`;
};

export const artworksAPI = {
  /**
   * Get all artworks with pagination
   * @param page - Page number (default: 1)
   * @param limit - Number of items per page (default: 22)
   */
  getAll: async (page: number = 1, limit: number = 22): Promise<ArtworkApiResponse> => {
    return apiClient.get<ArtworkApiResponse>(`/api/public/artworks?page=${page}&limit=${limit}`);
  },

  /**
   * Get single artwork by ID
   */
  getById: async (id: string): Promise<Artwork> => {
    const response = await apiClient.get<{ success: boolean; data: Artwork; message: string }>(
      `/api/public/artworks/${id}`
    );
    return response.data;
  },

  /**
   * Search artworks
   */
  search: async (query: string, page: number = 1, limit: number = 22): Promise<ArtworkApiResponse> => {
    return apiClient.get<ArtworkApiResponse>(
      `/api/public/artworks/search?q=${encodeURIComponent(query)}&page=${page}&limit=${limit}`
    );
  },
};

export default artworksAPI;

