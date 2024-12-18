import React from 'react';

interface VoteButtonsProps {
  upvotes: number;
  snippetId: number;
}

export const VoteButtons = ({ upvotes, snippetId }: VoteButtonsProps) => {
  const handleVote = (type: 'up' | 'down') => {
    // Will implement voting functionality later
    console.log(`Voted ${type} for snippet ${snippetId}`);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => handleVote('up')}
        className="flex items-center gap-1 px-2 py-1 text-sm text-gray-600 dark:text-gray-500 hover:text-green-600 dark:hover:text-green-400 transition-colors"
      >
        <span>▲</span>
        <span>{upvotes}</span>
      </button>
    </div>
  );
};