
import { Snippet } from '@rishabhdotasara/snippetstore-types';
import { SnippetCard } from './snippets/SnippetCard';


// Temporary mock data
const recentSnippets: Snippet[] = []

export const RecentSnippets = () => {
  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Top Snippets</h2>
      <div className="space-y-3">
        {recentSnippets.map((snippet) => (
          <SnippetCard key={snippet.id} snippet={snippet} />
        ))}
      </div>
      <a href='#' className='hover:underline block text-center pt-4'>View More</a>
    </div>
  );
};