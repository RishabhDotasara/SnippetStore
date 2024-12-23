import React from 'react';
import { Select } from '../../ui/Select';
import { Badge } from '../../ui/Badge';
import { TAG_OPTIONS } from '../../../constants/tags';

interface TagInputProps {
  tags: string[];
  onChange: (tags: string[]) => void;
}

export const TagInput = ({ tags, onChange }: TagInputProps) => {
  const handleTagChange = (category: keyof typeof TAG_OPTIONS, value: string) => {
    if (!value) return;

    // Remove any existing tag from this category
    const filteredTags = tags.filter(tag => 
      !TAG_OPTIONS[category].includes(tag as any)
    );
    
    // Add the new tag
    onChange([...filteredTags, value]);
  };

  const getSelectedTag = (category: keyof typeof TAG_OPTIONS) => {
    return tags.find(tag => TAG_OPTIONS[category].includes(tag as any)) || '';
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Tags
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Select one tag from each category to help others find your snippet
        </p>
      </div>

      <div className="grid gap-6">
        {/* Community Tag */}
        <div>
          <Select
            label="Community"
            value={getSelectedTag('community')}
            onChange={(e) => handleTagChange('community', e.target.value)}
            required
          >
            <option value="">Select a community tag</option>
            {TAG_OPTIONS.community.map((tag) => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </Select>
        </div>

        {/* Framework Tag */}
        <div>
          <Select
            label="Framework"
            value={getSelectedTag('framework')}
            onChange={(e) => handleTagChange('framework', e.target.value)}
            required
          >
            <option value="">Select a framework tag</option>
            {TAG_OPTIONS.framework.map((tag) => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </Select>
        </div>

        {/* Language Tag */}
        <div>
          <Select
            label="Language"
            value={getSelectedTag('language')}
            onChange={(e) => handleTagChange('language', e.target.value)}
            required
          >
            <option value="">Select a language tag</option>
            {TAG_OPTIONS.language.map((tag) => (
              <option key={tag} value={tag}>
                {tag.charAt(0).toUpperCase() + tag.slice(1)}
              </option>
            ))}
          </Select>
        </div>
      </div>

      {/* Selected Tags Preview */}
      {tags.length > 0 && (
        <div className="mt-4">
          <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-2 block">
            Selected Tags
          </label>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="capitalize"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};