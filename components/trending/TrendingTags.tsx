"use client"
import { TAG_OPTIONS } from "@rishabhdotasara/snippetstore-types";
import { useTrendingTags } from "../../hooks/useTrendingTags";
import { TagCategory } from "./TagCategory";

export const TrendingTags = () => {
  const { tags, isLoading } = useTrendingTags();

  if (isLoading) {
    return (
      <div className="w-full max-w-3xl animate-pulse">
        {[1, 2].map((i) => (
          <div key={i} className="mb-8">
            <div className="h-8 w-48 bg-gray-200 dark:bg-gray-700 rounded mb-4" />
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3, 4].map((j) => (
                <div
                  key={j}
                  className="h-10 w-24 bg-gray-200 dark:bg-gray-700 rounded-full"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }


  const categories = [
    { title: 'Frameworks', tags: tags?.frameworkTags.length != 0 ? tags?.frameworkTags : TAG_OPTIONS.framework },
    { title: 'Languages', tags: tags?.languageTags.length != 0 ? tags?.languageTags : TAG_OPTIONS.language },
  ];

  return (
    <div className="w-full max-w-3xl">
      <div className="space-y-8">
        {categories.map((category) => (
          <TagCategory
            key={category.title}
            title={category.title}
            // @ts-ignore
            tags={category.tags}
          />
        ))}
      </div>
    </div>
  );
};