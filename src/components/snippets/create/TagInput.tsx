import React, { useState } from 'react';
import { Badge } from '../../ui/Badge';

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export const TagInput = ({ tags, onChange }: TagInputProps) => {
  const [input, setInput] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const newTag = input.trim();
      if (newTag && !tags.includes(newTag)) {
        onChange([...tags, newTag]);
        setInput('');
      }
    }
  };

  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag) => tag !== tagToRemove));
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 ">
          Tags
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Add up to 5 tags to help others find your snippet
        </p>
      </div>

      <div className="space-y-3">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Add tags (press Enter or comma to add)"
          className="w-full px-4 py-2 border border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-900 dark:text-gray-200"
          disabled={tags.length >= 5}
        />

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="flex items-center gap-1"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="ml-1 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>
            </Badge>
          ))}
        </div>
      </div>
    </div>
  );
};