import React from 'react';
import type { Snippet } from '../../types/snippet';
import { Badge } from '../ui/Badge';
import { getRelativeTime } from '../../utils/date';
import { VoteButtons } from './VoteButtons';

interface SnippetCardProps {
  snippet: Snippet;
  isRecom?:boolean
}

export const SnippetCard = ({ snippet, isRecom=false }: SnippetCardProps) => {
  return (
    <div className="group p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate">
            {snippet.title}
          </h3>
          {!isRecom && <div>
            <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">
              {getRelativeTime(snippet.createdAt)}
            </p>
          </div>}
          <div className="mt-2 flex items-center gap-2 flex-wrap ">
            {/* <span className="text-sm text-gray-500 dark:text-gray-400">
              {getRelativeTime(snippet.createdAt)}
            </span> */}
            <Badge variant="secondary" className="capitalize">
              {snippet.type}
            </Badge>
            <Badge variant="outline" className="capitalize">
              {snippet.language}
            </Badge>
            <Badge variant="primary" className="capitalize">
            v{snippet.version}
            </Badge>
            
            
          </div>
        </div>
        
        {!isRecom &&<div className="flex items-center text-sm font-medium">
          <VoteButtons downvotes={24} snippetId={snippet.id} upvotes={42} key={snippet.id}/>
        </div>}
      </div>
    </div>
  );
};