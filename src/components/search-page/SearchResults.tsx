import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SearchResultsProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  children: React.ReactNode;
}

export function SearchResults({ currentPage, totalPages, onPageChange, children }: SearchResultsProps) {
  const renderPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;
    
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);
    
    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`px-3 py-1 rounded-md ${
            currentPage === i
              ? 'bg-primary-500 text-white'
              : 'text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700'
          }`}
        >
          {i}
        </button>
      );
    }
    return pages;
  };

  return (
    <div className="space-y-6 dark:text-white flex-1">
      {/* Results Content */}
      <div className="space-y-4">
        {children}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => onPageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {currentPage > 3 && (
            <>
              <button
                onClick={() => onPageChange(1)}
                className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                1
              </button>
              {currentPage > 4 && <span className="px-2">...</span>}
            </>
          )}
          
          {renderPageNumbers()}
          
          {currentPage < totalPages - 2 && (
            <>
              {currentPage < totalPages - 3 && <span className="px-2">...</span>}
              <button
                onClick={() => onPageChange(totalPages)}
                className="px-3 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {totalPages}
              </button>
            </>
          )}
          
          <button
            onClick={() => onPageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-1 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}
    </div>
  );
}