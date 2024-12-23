import { Badge } from "../ui/Badge";
import { getRelativeTime } from "../../utils/date";
import { VoteButtons } from "./VoteButtons";
import LanguageIcon from "../icons/LanguageIcon";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Snippet } from "@rishabhdotasara/snippetstore-types";

interface SnippetInfoProps {
  snippet: Snippet;
}

export const SnippetInfo = ({ snippet }: SnippetInfoProps) => {
  const navigate = useNavigate()
  const onTagClick = (tag:string)=>{
    navigate(`/search?tag=${tag}`)
  }
  const [upvotes, setUpvotes] = useState<number>(snippet.upvotes)

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        {snippet.title}
      </h1>

      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
          <div className="flex items-center gap-2">
            <LanguageIcon language={snippet.language}/>
            <span  className="text-gray-400">•</span>
            <Badge variant="secondary">{snippet.type}</Badge>
            <span  className="text-gray-400">•</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Created {getRelativeTime(snippet.createdAt)}</span>
            <span className="text-gray-400">•</span>
            <span>{snippet.upvotes} upvotes</span>
          </div>
          <div>
            <VoteButtons upvotes={upvotes} snippetId={snippet.id}/>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">

          {/* <span className="text-">Tags:</span> */}
          {snippet.tags?.map((tag:any) => (
            <Badge 
              key={tag} 
              variant="primary" 
              onClick={()=>onTagClick(tag)}
            >
              #{tag}
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
}