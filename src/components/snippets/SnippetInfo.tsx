import React from "react";
import { Badge } from "../ui/Badge";
import { getRelativeTime } from "../../utils/date";
import type { Snippet } from "../../types/snippet";
import { VoteButtons } from "./VoteButtons";

interface SnippetInfoProps {
  snippet: Snippet;
}

export const SnippetInfo = ({ snippet }: SnippetInfoProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {snippet.title}
      </h1>

      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
        <div className="flex items-center gap-2">
          <i
            className={`devicon-${snippet.language}-plain colored text-xl`}
          ></i>
          <Badge variant="outline">{snippet.type}</Badge>
        </div>

        <div className="flex items-center gap-4">
          <span>•</span>
          <span>Created {getRelativeTime(snippet.createdAt)}</span>
          <span>•</span>
          <span>{snippet.upvotes} upvotes</span>
        </div>
        <div>
          <VoteButtons upvotes={snippet.upvotes} snippetId={snippet.id}/>
        </div>
      </div>
    </div>
  );
};
