import React, { useState, useRef } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useRecommendations } from '../hooks/useRecommendations';
import { SearchInput } from './search/SearchInput';
import { SearchButton } from './search/SearchButton';
import { SearchRecommendations } from './search/SearchRecommendations';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const { recommendations, loading } = useRecommendations(query);

  useClickOutside(searchRef, () => setShowRecommendations(false));

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', query);
  };

  const handleSelect = (title: string) => {
    setQuery(title);
    setShowRecommendations(false);
  };

  return (
    <div ref={searchRef} className="w-full max-w-3xl relative">
      <form onSubmit={handleSearch}>
        <div className="relative">
          <SearchInput
            query={query}
            onChange={setQuery}
            onFocus={() => setShowRecommendations(true)}
          />
          <SearchButton />
        </div>
      </form>

      {showRecommendations && query.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 max-h-80 overflow-y-auto z-50">
          <SearchRecommendations
            recommendations={recommendations}
            loading={loading}
            onSelect={handleSelect}
          />
        </div>
      )}
    </div>
  );
};