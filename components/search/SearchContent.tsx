
import { Snippet } from '@rishabhdotasara/snippetstore-types';
import { SnippetCard } from '../snippets/SnippetCard';

interface SearchContentProps {
  results: Snippet[] | null;
  query: string;
}

export const SearchContent = ({ results, query }: SearchContentProps) => {

  //we will need to use context api here for the tags


  if (!results || results.length === 0) {
    return (
      <p className="text-gray-500 dark:text-gray-400 text-center">
        No results found.
      </p>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
        Search Results for "{query}"
      </h2>
      
      {results.map((result) => (
        <SnippetCard key={result.id} snippet={result} isRecom />
      ))}
    </div>
  );
};