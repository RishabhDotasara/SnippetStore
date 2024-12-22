import { RecentSnippets } from "../RecentSnippets";

import useQueryParams from "../../hooks/useQueryParams";
import { useEffect, useState } from "react";
import Loader from "../Loader";
import { SearchResults } from "./SearchResults";
import { SearchFilters } from "../search/SearchFilters";
import toast from "react-hot-toast";
import { useAPI } from "../../hooks/useAPI";
import { Snippet } from "../../types/snippet";
import { SnippetCard } from "../snippets/SnippetCard";

export type FilterRecord = {
  languages: string[];
  type: string[];
  sortBy: string;
};

export default function Search() {
  const { allQueryParams } = useQueryParams();
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState<[] | null>(null);
  const {makeRequest} = useAPI();
  const [filters, setFilters] = useState<FilterRecord>({
    languages: [],
    type: [],
    sortBy: "",
  });

  // This would typically come from your API response
  const totalPages = 10; // Placeholder value

  // useEffect(()=>{
  //   // if (!allQueryParams.filters) return;
  //   setFilters(JSON.parse(allQueryParams.filters));
  // },[])

  // useEffect(() => {
  //   const filterString = `?q=${allQueryParams.q}&filters=${JSON.stringify(
  //     filters
  //   )}`;
  //   console.log(filterString);
  //   //set it to the url
  //   window.history.pushState({}, "", filterString);
  // }, [filters]);

  const fetchSearchResults = async () => {
    try 
    {
      setLoading(true);
      const res = await makeRequest(`/search/query?q=${allQueryParams.q}`, "GET", {}, false);
      console.log(res);
      setSearchResults(res.response);
      setLoading(false)
    }
    catch(err)
    {
      toast.error("Failed to fetch search results. Please try again later.");
      setLoading(false);
    }
  }

  useEffect(()=>{
    fetchSearchResults();
  },[allQueryParams.q])

  if (loading) {
    return <Loader text="Loading search results" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        {/* <aside className="hidden md:block">
          <SearchFilters filters={filters} setFilters={setFilters}/>
        </aside> */}

        {/* Search Results */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12 ">
          <div className="flex  w-full gap-8 max-w-3xl">
          {/* <SearchFilters filters={filters} setFilters={setFilters} /> */}
          <SearchResults
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => {
              setCurrentPage(page);
              // Here you would typically fetch the new page of results
            }}
          >
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
              Search Results for "{allQueryParams.q}"
            </h2>

            {searchResults && searchResults.map((result:Snippet)=>{
              return (
                <SnippetCard key={result.id} snippet={result} isRecom/>
              )
            })}

            {!searchResults || searchResults.length == 0 && (
              <p className="text-gray-500 dark:text-gray-400 text-center">
                No results found. Please try another search query.
              </p>
            )}


          </SearchResults>

          </div>
          <RecentSnippets />
        </div>
      </div>
    </div>
  );
}
