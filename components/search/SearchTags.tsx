import { Badge } from "../ui/Badge";
import { SnippetTag } from "../snippet-tags/TagBadge";

interface SearchTagsProps {
  query: string;
  tags: string[];
  setQueryParam?: (key: string, value: string) => void;
}

export const SearchTags = ({ query, tags, setQueryParam }: SearchTagsProps) => {
  if (!query && tags.length === 0) return null;

  const removeTag = (tag: string) => {
    if (setQueryParam) {
      setQueryParam("tags", tags.filter((t) => t !== tag).join(","));
    }
  };

  return (
    <div className="flex flex-wrap items-center gap-3 mb-6">
      {query && (
        <div className="flex items-center">
          <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
            Search:
          </span>
          <Badge variant="primary" className="capitalize">
            {query}
          </Badge>
        </div>
      )}

      {tags.length > 0 && (
        <div className="flex items-center flex-wrap gap-2">
          <span className="text-sm text-gray-600 dark:text-gray-400 mr-2">
            Tags:
          </span>
          {tags.map((tag) => (
            <SnippetTag
              key={tag}
              tag={tag}
              size="md"
              variant="secondary"
              canRemove
              onRemove={() => {
                removeTag(tag);
              }}
            />
          ))}
        </div>
      )}
    </div>
  );
};
