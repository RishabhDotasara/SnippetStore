import { useState, useEffect } from 'react';
import type { Snippet } from '../types/snippet';

// Mock data for recommendations
const mockRecommendations: Snippet[] = [
  {
    id: 1,
    title: 'React useEffect Cleanup',
    language: 'typescript',
    author: 'johndoe',
    type: 'snippet',
    upvotes: 42,
    downvotes: 3,
    version: '18.0',
    createdAt: new Date(),
    code: '// Code here'
  },
  {
    id: 2,
    title: 'React Component Collection',
    language: 'typescript',
    author: 'reactdev',
    type: 'block',
    upvotes: 85,
    downvotes: 5,
    version: '18.0',
    createdAt: new Date(),
    snippetCount: 5,
    snippets: []
  }
];

export const useRecommendations = (query: string) => {
  const [recommendations, setRecommendations] = useState<Snippet[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (query.length < 2) {
      setRecommendations([]);
      return;
    }

    setLoading(true);
    // Simulate API call
    const timer = setTimeout(() => {
      const filtered = mockRecommendations.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase())
      );
      setRecommendations(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  return { recommendations, loading };
};