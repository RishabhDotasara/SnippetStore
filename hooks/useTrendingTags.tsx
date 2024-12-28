"use client"
import { useState, useEffect } from 'react';
import { useAPI } from './useAPI';
import { TrendingTagsResponse } from '../types/trending';

export const useTrendingTags = () => {
  const [tags, setTags] = useState<TrendingTagsResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const { makeRequest } = useAPI();

  useEffect(() => {
    const fetchTags = async () => {
      try {
        setIsLoading(true);
        const response = await makeRequest(
          "/search/trending",
          'GET',
          {},
          false
        );
        setTags(response);
      } catch (error) {
        console.error('Failed to fetch trending tags:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTags();
  }, []);

  return { tags, isLoading };
};