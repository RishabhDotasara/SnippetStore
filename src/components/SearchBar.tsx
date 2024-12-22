import { useState, useRef, useEffect, FormEvent } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useRecommendations } from '../hooks/useRecommendations';
import { SearchInput } from './search/SearchInput';
import { SearchButton } from './search/SearchButton';
import { SearchRecommendations } from './search/SearchRecommendations';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { FastSearchToggle } from './search/FastSearchToggle';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [fastSearch, setFastSearch] = useState(false);
  const {getRecommendations ,recommendations, loading } = useRecommendations(query);
  const navigate = useNavigate()

  useClickOutside(searchRef, () => setShowRecommendations(false));

  //debouncing hook
  useEffect(()=>{
    if (query.trim()){
      const timeoutId = setTimeout(() => {
        console.log('Searching for:', query);
        getRecommendations();
      }, 250);
      return () => clearTimeout(timeoutId);
    }
  },[query])

  const handleSearch = async (e:FormEvent) => {
    e.preventDefault()
    console.log('Searching for:', query);
    try 
    {
      setShowRecommendations(false)
      navigate(`/search?q=${query}&fast=${fastSearch}`);
    }
    catch(err)
    {
      toast.error("Error Performing Search, Please try again! "+ err);
    }
  };

  const handleSelect = (link: string) => {
    navigate(link)
    // setQuery(title);
    setShowRecommendations(false);
  };

  const handleFastSearchToggle = () => {
    setFastSearch(!fastSearch);
  }

  return (
    <div ref={searchRef} className="w-full max-w-3xl relative">

        <form className="relative" onSubmit={handleSearch}>
          <SearchInput
            query={query}
            onChange={setQuery}
            onFocus={() => setShowRecommendations(true)}
          />
          <SearchButton />
        </form>

        <FastSearchToggle 
          enabled={fastSearch}
          onChange={handleFastSearchToggle}

        />

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