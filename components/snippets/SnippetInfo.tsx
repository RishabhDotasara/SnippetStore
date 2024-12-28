import { Badge } from "../ui/Badge";
import { getRelativeTime } from "../../utils/date";
import { VoteButtons } from "./VoteButtons";
import LanguageIcon from "../icons/LanguageIcon";
import { useState } from "react";
import { Snippet } from "@rishabhdotasara/snippetstore-types";
import { SnippetTag } from "../snippet-tags/TagBadge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/ToolTip";
import ToolTip from "../ToolTip";

interface SnippetInfoProps {
  snippet: Snippet;
}

export const SnippetInfo = ({ snippet }: SnippetInfoProps) => {
  const [upvotes, setUpvotes] = useState<number>(snippet.upvotes);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {snippet.title}
      </h1>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <ToolTip
              trigger={<LanguageIcon language={snippet.language}/>}
              content={snippet.language}
            />

            <Badge variant="secondary">{snippet.type}</Badge>
          </div>

          <div className="flex items-center gap-4">
            <span>Created {getRelativeTime(snippet.createdAt)}</span>

            <span>{upvotes} upvotes</span>
          </div>
          <div>
            <VoteButtons upvotes={upvotes} snippetId={snippet.id} canVote snippetType={snippet.type} setUpVotes={setUpvotes}/>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {/* <span className="text-">Tags:</span> */}
          {snippet.tags?.map((tag: any) => (
            <SnippetTag key={tag} tag={tag} size="md" />
          ))}
        </div>
      </div>
    </div>
  );
};
