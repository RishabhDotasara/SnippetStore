import { Command } from 'cmdk';
import { Tag } from 'lucide-react';

interface TagSuggestionsProps {
  input: string;
  tags: string[];
  selectedTags: string[];
  onSelect: (tag: string) => void;
  onClose: () => void;
}

export function TagSuggestions({
  input,
  tags,
  selectedTags,
  onSelect,
  onClose,
}: TagSuggestionsProps) {
  const filteredTags = tags
    .filter(tag => 
      tag.toLowerCase().includes(input.toLowerCase()) && 
      !selectedTags.includes(tag)
    )
    .slice(0, 5); // Show only top 5 suggestions

  if (filteredTags.length === 0) return null;

  return (
    <div className="absolute z-50 w-full bg-popover  rounded-md shadow-md">
      <Command>
        <Command.List className='p-2 dark:bg-gray-900 rounded-md bg-white'>
          {filteredTags.map(tag => (
            <Command.Item
              key={tag}
              onSelect={() => {
                onSelect(tag);
                onClose();
              }}
              className="flex items-center gap-2 px-3 py-2 text-sm bg-white  dark:bg-gray-900 cursor-pointer capitalize dark:hover:bg-gray-700 rounded-md hover:bg-gray-100"
            >
              <Tag className="h-3.5 w-3.5" />
              {tag}
            </Command.Item>
          ))}
        </Command.List>
      </Command>
    </div>
  );
}