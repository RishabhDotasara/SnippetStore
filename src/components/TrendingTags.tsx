import React from 'react';

const tags = [
  'javascript', 'react', 'python', 'css', 'html', 
  'typescript', 'node', 'vue', 'angular'
];

export const TrendingTags = () => {
  return (
    <div className="w-full max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 dark:text-white">Trending Tags</h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <button
            key={tag}
            className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full hover:bg-primary-200 transition-colors duration-300"
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};