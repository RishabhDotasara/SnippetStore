import { SearchIcon } from '../icons/SearchIcon';

interface SearchInputProps {
  query: string;
  onChange: (value: string) => void;
  onFocus: () => void;
}

export const SearchInput = ({ query, onChange, onFocus }: SearchInputProps) => (
  <div className="relative">
    <input
      type="search"
      value={query}
      onChange={(e) => onChange(e.target.value)}
      onFocus={onFocus}
      placeholder="Search for snippets..."
      className="w-full px-6 py-4 pl-12 text-lg rounded-full border-2 border-gray-200 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-200 transition-all duration-300 dark:bg-gray-900 dark:border-gray-500 dark:text-white"
    />
    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
      <SearchIcon className="w-5 h-5" />
    </span>
  </div>
);