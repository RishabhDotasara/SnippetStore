import { Snippet } from '@rishabhdotasara/snippetstore-types';
import { RecommendationItem } from './RecommendationItem';

interface SearchRecommendationsProps {
  recommendations: Snippet[];
  loading: boolean;
  onSelect: (title: string) => void;
}

export const SearchRecommendations = ({
  recommendations,
  loading,
  onSelect
}: SearchRecommendationsProps) => {
  

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  }

  if (recommendations.length === 0) {
    return <div className="p-4 text-center text-gray-500">No recommendations found</div>;
  }

  return (
    <ul className="py-2">
      {recommendations.map((item, index) => (
        <RecommendationItem
          key={index}
          item={item}
          onSelect={() => onSelect(item.type == "block" ? `/block/${item.id}` : `/snippet/${item.id}`)}
        />
      ))}
    </ul>
  );
};