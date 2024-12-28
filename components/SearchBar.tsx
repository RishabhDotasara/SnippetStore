"use client"
import { useState, useRef, useEffect, FormEvent } from 'react';
import { useClickOutside } from '../hooks/useClickOutside';
import { useRecommendations } from '../hooks/useRecommendations';
import { SearchInput } from './search/SearchInput';
import { SearchButton } from './search/SearchButton';
import { SearchRecommendations } from './search/SearchRecommendations';
import toast from 'react-hot-toast';
import { FastSearchToggle } from './search/FastSearchToggle';
import { useRouter } from 'next/navigation';

export const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [showRecommendations, setShowRecommendations] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const [fastSearch, setFastSearch] = useState(true);
  const {getRecommendations ,recommendations, loading} = useRecommendations(query);
  const router = useRouter()

  useClickOutside(searchRef, () => setShowRecommendations(false));

  //debouncing hook
  useEffect(()=>{
    setShowRecommendations(true);
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
    // console.log('Searching for:', query);
    try 
    {
      // console.log("Fast: ", fastSearch);
      if (!query.trim() || query.length < 2)
      {
        toast.error("Please enter a search query!");
        return;
      }
      router.push(`/search?q=${query}&fast=${fastSearch}&page=1&limit=5`);
      setShowRecommendations(false)

    }
    catch(err)
    {
      toast.error("Error Performing Search, Please try again! ");
    }
  };

  const handleSelect = (link: string) => {
    router.push(link)
    // setQuery(title);
    setShowRecommendations(false);
  };

  const handleFastSearchToggle = () => {
    setFastSearch(true);
    toast("Detailed Search Coming Soon!", {
      icon: 'ℹ️',
    })
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