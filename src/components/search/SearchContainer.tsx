import { FormEvent } from 'react';
import { SearchInput } from './SearchInput';
import { SearchButton } from './SearchButton';

interface SearchContainerProps {
  query: string;
  onQueryChange: (query: string) => void;
  onFocus: () => void;
  onSubmit: (e: FormEvent) => void;
}

export function SearchContainer({ query, onQueryChange, onFocus, onSubmit }: SearchContainerProps) {
  return (
    <form className="relative" onSubmit={onSubmit}>
      <SearchInput
        query={query}
        onChange={onQueryChange}
        onFocus={onFocus}
      />
      <SearchButton />
    </form>
  );
}