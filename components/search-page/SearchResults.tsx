import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SearchResultsProps {
  currentPage: number;
  pageLimit: number;
  pageResultsLength: number;
  onPageChange: (page: number) => void;
  children: React.ReactNode;
}

export function SearchResults({
  currentPage,
  pageLimit,
  onPageChange,
  pageResultsLength,
  children,
}: SearchResultsProps) {
  return (
    <div className="space-y-6 dark:text-white flex-1">
      {/* Results Content */}
      <div className="space-y-4">{children}</div>

      {/* Pagination Controls */}
      {(
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="flex items-center gap-2 px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            <span>Previous</span>
          </button>

          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={pageResultsLength < pageLimit}
            className="flex items-center gap-2 px-4 py-2 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <span>Next</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}
