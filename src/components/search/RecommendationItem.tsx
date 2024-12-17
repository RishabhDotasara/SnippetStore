import React from "react";
import type { Snippet } from "../../types/snippet";
import { Badge } from "../ui/Badge";

interface RecommendationItemProps {
  item: Snippet;
  onSelect: () => void;
}

export const RecommendationItem = ({
  item,
  onSelect,
}: RecommendationItemProps) => (
  <li
    className="px-4 py-4 space-y-2 hover:bg-gray-50 dark:hover:bg-gray-700 dark:text-white cursor-pointer"
    onClick={onSelect}
  >
    <div className="font-medium">{item.title}</div>
    <div className="flex items-center gap-2 mt-1">
      <i className={`devicon-${item.language}-plain colored text-xl`}></i>
      <Badge variant="secondary">{item.type}</Badge>
      {item.version && <Badge variant="primary">v{item.version}</Badge>}
    </div>
  </li>
);
