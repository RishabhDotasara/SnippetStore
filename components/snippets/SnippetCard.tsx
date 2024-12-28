import { Badge } from "../ui/Badge";
import { getRelativeTime } from "../../utils/date";
import { VoteButtons } from "./VoteButtons";
import { Snippet } from "@rishabhdotasara/snippetstore-types";
import { SnippetTag } from "../snippet-tags/TagBadge";
import Link from "next/link";

interface SnippetCardProps {
  snippet: Snippet;
  isRecom?: boolean;
}

export const SnippetCard = ({ snippet, isRecom = false }: SnippetCardProps) => {
  return (
    <div className="group p-4 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <a href="#">
            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100 truncate hover:underline">
              <Link href={`/${snippet.type == "snippet" ? "snippet" : "block"}/${snippet.id}`}>{snippet.title}</Link>
            </h3>
          </a>
          {!isRecom && (
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 line-clamp-3">
                {getRelativeTime(snippet.createdAt)}
              </p>
            </div>
          )}
          <div className="mt-2 flex items-start gap-2 flex-wrap flex-col ">
            {/* <span className="text-sm text-gray-500 dark:text-gray-400">
              {getRelativeTime(`${snippet.createdAt}`)}
            </span> */}
            <div className="flex items-center gap-2">
            <i
              className={`devicon-${snippet.language}-plain colored text-xl`}
            ></i>
            <Badge variant="secondary" className="capitalize">
              {snippet.type}
            </Badge>
            </div>

          </div>
          <div className="flex gap-2 pt-2 dark:text-white">
            Tags:
            {snippet &&
              snippet.tags?.map((tag: string) => {
                return (
                  <SnippetTag key={tag} tag={tag} size="sm" variant="default" />
                );
              })}
          </div>
        </div>

        {!isRecom && (
          <div className="flex items-center text-sm font-medium">
            <VoteButtons
              snippetType={snippet.type}
              snippetId={snippet.id}
              upvotes={42}
              key={snippet.id}
            />
          </div>
        )}
      </div>
    </div>
  );
};
