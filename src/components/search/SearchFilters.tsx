import React from 'react';
import { Badge } from '../ui/Badge';

const languages = ['JavaScript', 'TypeScript', 'Python', 'CSS', 'HTML', 'Java', 'C++', 'Ruby'];
const types = ['Snippet', 'Block'];
const sortOptions = ['Most Recent', 'Most Popular', 'Most Viewed'];

export const SearchFilters = () => {
  return (
    <div className="w-64 p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
      <div className="space-y-6">
        {/* Type Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Type</h3>
          <div className="space-y-2">
            {types.map(type => (
              <label key={type} className="flex items-center">
                <input type="checkbox" className="form-checkbox text-primary-500" />
                <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Language Filter */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Language</h3>
          <div className="flex flex-wrap gap-2">
            {languages.map(lang => (
              <Badge
                key={lang}
                variant="outline"
                className="cursor-pointer hover:bg-primary-50 hover:border-primary-200 hover:text-primary-700"
              >
                {lang}
              </Badge>
            ))}
          </div>
        </div>

        {/* Sort Options */}
        <div>
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">Sort By</h3>
          <select className="w-full p-2 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300">
            {sortOptions.map(option => (
              <option key={option} value={option.toLowerCase().replace(' ', '_')}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};