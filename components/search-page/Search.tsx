"use client";
import { useCallback, useEffect, useState } from "react";
import { useAPI } from "../../hooks/useAPI";

import toast from "react-hot-toast";
import Loader from "../Loader";
import { SearchTags } from "../search/SearchTags";
import { SearchContent } from "../search/SearchContent";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { SearchResults } from "./SearchResults";

export type FilterRecord = {
  languages: string[];
  type: string[];
  sortBy: string;
};

type QueryParams = {
  q: string;
  fast: string;
  tags: string;
  page: string;
  limit: string;
};

const Search = () => {
  const router = useRouter();

  const searchParamsInit = useSearchParams();
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [searchResults, setSearchResults] = useState<[] | null>(null);
  const { makeRequest } = useAPI();

  const allQueryParams: QueryParams = {
    q: searchParamsInit.get("q") || "",
    fast: searchParamsInit.get("fast") || "",
    tags: searchParamsInit.get("tags") || "",
    page: searchParamsInit.get("page") || "1",
    limit: searchParamsInit.get("limit") || "5",
  };

  const tags = allQueryParams.tags ? allQueryParams.tags.split(",") : [];

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParamsInit);
      console.log(params.entries().toArray());
      params.set(name, value);
      return params.toString();
    },
    [allQueryParams]
  );

  const setQueryParam = useCallback(
    (name: string, value: string) => {
      router.push(pathname + "?" + createQueryString(name, value));
    },
    [router, pathname, createQueryString]
  );

  const fetchSearchResults = async () => {
    try {
      setLoading(true);
      const res = await makeRequest(
        `/search/query?q=${allQueryParams.q}&fast=${allQueryParams.fast}&tags=${allQueryParams.tags}&page=${allQueryParams.page}&limit=${allQueryParams.limit}`,
        "GET",
        {},
        false
      );
      setSearchResults(res.response);
    } catch (err) {
      toast.error("Failed to fetch search results. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
  }, [allQueryParams.q, allQueryParams.tags, allQueryParams.page]);

  if (loading) {
    return <Loader text="Loading search results" />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 min-h-screen">
      <div className="flex gap-8">
        {/* Filters Sidebar */}
        {/* <aside className="hidden md:block">
          <SearchFilters />
        </aside> */}

        {/* Search Results */}
        <div className="flex-1 flex flex-col items-center justify-center gap-12">
          <div className="flex w-full gap-8 max-w-3xl">
            <div className="w-full">
              <SearchResults
                currentPage={parseInt(allQueryParams.page)}
                pageResultsLength={searchResults?.length || 0}
                pageLimit={parseInt(allQueryParams.limit)}
                onPageChange={(page: any) => {
                  setQueryParam("page", page);
                }}
              >
                <SearchTags
                  query={allQueryParams.q}
                  tags={tags}
                  setQueryParam={setQueryParam}
                />
                <SearchContent
                  results={searchResults}
                  query={allQueryParams.q}
                />
              </SearchResults>
            </div>
          </div>
          {/* <RecentSnippets /> */}
        </div>
      </div>
    </div>
  );
};

export default Search;
