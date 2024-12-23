import React from 'react';
import { Badge } from '../ui/Badge';

interface SearchTagsProps {
  query: string;
  tags: string[];
}

export const SearchTags = ({ query, tags }: SearchTagsProps) => {
  if (!query && tags.length === 0) return null;

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {query && (
        <div className="flex items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
            Search:
          </span>
          <Badge variant="primary" className="capitalize">
            {query}
          </Badge>
        </div>
      )}
      
      {tags.length > 0 && (
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
            Tags:
          </span>
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="capitalize">
              {tag}
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};