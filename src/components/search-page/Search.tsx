import React, { useEffect, useState } from 'react';
import { useAPI } from '../../hooks/useAPI';
import useQueryParams from '../../hooks/useQueryParams';
import toast from 'react-hot-toast';

import { RecentSnippets } from '../RecentSnippets';
import Loader from '../Loader';
import { SearchFilters } from '../search/SearchFilters';
import { SearchTags } from '../search/SearchTags';
import { SearchContent } from '../search/SearchContent';

export type FilterRecord = {
  languages: string[];
  type: string[];
  sortBy: string;
};

const Search = () => {
  const { allQueryParams } = useQueryParams();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<[] | null>(null);
  const { makeRequest } = useAPI();
  
  const tags = allQueryParams.tags ? allQueryParams.tags.split(',') : [];

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const res = await makeRequest(
        `/search/query?q=${allQueryParams.q}&fast=${allQueryParams.fast}&tags=${allQueryParams.tags}&page=${currentPage}&limit=10`,
        'GET',
        {},
        false
      );
      setSearchResults(res.response);
    } catch (err) {
      toast.error('Failed to fetch search results. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [allQueryParams.q, currentPage]);

  if (loading) {
    return <Loader text="Loading search results" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        <aside className="hidden md:block">
          {/* <SearchFilters /> */}
        </aside>

        {/* Search Results */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <div className="flex w-full gap-8 max-w-3xl">
            <div className="w-full">
              <SearchTags query={allQueryParams.q} tags={tags} />
              <SearchContent results={searchResults} query={allQueryParams.q} />
            </div>
          </div>
          <RecentSnippets />
        </div>
      </div>
    </div>
  );
};



export default Search;