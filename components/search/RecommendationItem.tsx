import { Badge } from "../ui/Badge";
import LanguageIcon from "../icons/LanguageIcon";
import { Snippet } from "@rishabhdotasara/snippetstore-types";

interface RecommendationItemProps {
  item: Snippet;
  onSelect: () => void;
}

export const RecommendationItem = ({
  item,
  onSelect,
}: RecommendationItemProps) => {
  

  return (
  <li
    className="px-4 py-4 space-y-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white cursor-pointer"
    onClick={onSelect}
  >
    <span className="font-medium">{item.title}</span>
    <div className="flex items-center gap-2 mt-1">
      <LanguageIcon language={item.language}/>
      <Badge variant="secondary">{item.type}</Badge>
     
    </div>
  </li>
);}
