import React from 'react';
import { TagButton } from './TagButton';


interface TagCategoryProps {
  title: string;
  tags: string[];
}

export const TagCategory = ({ title, tags }: TagCategoryProps) => {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
        Top {title}
      </h2>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagButton key={tag} tag={tag} />
        ))}
      </div>
    </div>
  );
};