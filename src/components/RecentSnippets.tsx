import React from 'react';
import { SnippetCard } from './snippets/SnippetCard';
import type { Snippet } from '../types/snippet';

// Temporary mock data
const recentSnippets: Snippet[] = [
  {
    id: 1,
    title: 'React useEffect Cleanup',
    language: 'react',
    type: 'snippet',
    upvotes: 42,
    version:"17.0.2",
    createdAt: new Date('2023-10-01'),
    code: '// Code here'
  },
  {
    id: 2,
    title: 'React Component Collection',
    language: 'react',
    type: 'block',
    upvotes: 85,
    version:"17.0.2",
    createdAt: new Date('2023-09-30'),
    snippetCount: 5,
    snippets: []
  },
  {
    id: 3,
    title: 'CSS Grid Layout',
    language: 'css3',
    type: 'snippet',
    upvotes: 28,
    version:"17.0.2",
    createdAt: new Date('2023-09-29'),
    code: '/* Code here */'
  },
];

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