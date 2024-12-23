import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TagButtonProps {
  tag: string;
}

export const TagButton = ({ tag }: TagButtonProps) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/search?tags=${tag}`);
  }
  return (
    <button
      className="px-4 py-2 bg-primary-100 text-primary-700 rounded-full 
                hover:bg-primary-200 transition-colors duration-300 
                dark:bg-primary-900/30 dark:text-primary-400 
                dark:hover:bg-primary-900/20"
      onClick={handleNavigate}
    >
      #{tag}
    </button>
  );
};