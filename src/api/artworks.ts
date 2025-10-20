/**
 * API - Artworks
 * Artwork-related API endpoints
 */

import { apiClient } from './client';

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  description: string;
  imageUrl: string;
  category: string;
}

export interface ArtworkResponse {
  data: Artwork[];
  total: number;
  page: number;
  pageSize: number;
}

export const artworksAPI = {
  /**
   * Get all artworks with pagination
   */
  getAll: async (page: number = 1, pageSize: number = 12): Promise<ArtworkResponse> => {
    return apiClient.get<ArtworkResponse>(`/artworks?page=${page}&pageSize=${pageSize}`);
  },

  /**
   * Get single artwork by ID
   */
  getById: async (id: string): Promise<Artwork> => {
    return apiClient.get<Artwork>(`/artworks/${id}`);
  },

  /**
   * Search artworks
   */
  search: async (query: string, page: number = 1): Promise<ArtworkResponse> => {
    return apiClient.get<ArtworkResponse>(`/artworks/search?q=${encodeURIComponent(query)}&page=${page}`);
  },

  /**
   * Get artworks by category
   */
  getByCategory: async (category: string, page: number = 1): Promise<ArtworkResponse> => {
    return apiClient.get<ArtworkResponse>(`/artworks/category/${category}?page=${page}`);
  },
};

export default artworksAPI;

