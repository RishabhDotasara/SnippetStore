import React, { useState } from 'react';
import { X, Tags, Info } from 'lucide-react';

import { TagSuggestions } from './TagSuggestions';


import { TAG_OPTIONS } from '@rishabhdotasara/snippetstore-types';
import { Input } from '../../../ui/Input';
import { Badge } from '../../../ui/Badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../../../ui/ToolTip';

// Flatten all tags into a single array
const ALL_TAGS = Object.values(TAG_OPTIONS).flat();

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
  maxTags?: number;
}

export function TagInput({ tags, onChange, maxTags = 3}: TagInputProps) {
  const [input, setInput] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setShowSuggestions(true);
  };

  const addTag = (tag: string) => {
    if (tags.length >= maxTags) return;
    if (!tags.includes(tag)) {
      onChange([...tags, tag]);
    }
    setInput('');
    setShowSuggestions(false);
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter(tag => tag !== tagToRemove));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  return (
    <div className="space-y-4 dark:text-white">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Tags className="h-6 w-6 text-primary-500" />
          <label className="text-lg font-medium text-foreground">
            Tags ({tags.length}/{maxTags})
          </label>
        </div>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <button className="inline-flex items-center justify-center rounded-md h-6 w-6 text-muted-foreground hover:text-primary transition-colors">
                <Info className="h-4 w-4" />
              </button>
            </TooltipTrigger>
            <TooltipContent className="max-w-[300px] bg-white dark:bg-black">
              <div className="space-y-2 text-sm">
                <p>Add up to 3 tags to categorize your snippet:</p>
                <ul className="list-disc pl-4 space-y-1">
                  <li>First Tag refers to the community.</li>
                  <li>Second tag refers to the framework or library.</li>
                  <li>Third tag refers to the language used.</li>
                </ul>
              </div>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <div className="relative space-y-2">
        <div className="flex flex-wrap gap-2 p-2 bg-background rounded-md border border-input dark:border-gray-600 focus-within:border-primary transition-colors min-h-[42px]">
          <div className="flex flex-wrap gap-2 items-center">
            {tags.map(tag => (
              <Badge
                key={tag}
                variant="secondary"
                className="capitalize gap-1 h-6  flex items-center"
              >
                {tag}
                <button
                  onClick={() => removeTag(tag)}
                  className="hover:text-destructive transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
          {tags.length < maxTags && (
            <Input
              type="text"
              value={input}
              onChange={handleInputChange}
              onKeyDown={handleKeyDown}
              onFocus={() => setShowSuggestions(true)}
              placeholder={tags.length === 0 ? "Start typing to add tags..." : "Add another tag..."}
              className="border-0 flex-1 p-0 w-full  h-6 text-sm focus-visible:ring-0 placeholder:text-muted-foreground/60 outline-none bg-transparent"
            />
          )}
        </div>

        {showSuggestions && input && (
          <TagSuggestions
            input={input}
            tags={ALL_TAGS}
            selectedTags={tags}
            onSelect={addTag}
            onClose={() => setShowSuggestions(false)}
          />
        )}
      </div>
    </div>
  );
}