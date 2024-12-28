"use client"
import { cn } from "../../utils/styles";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

interface SnippetTagProps {
  tag: string;
  variant?: "default" | "outline" | "secondary";
  size?: "sm" | "md" | "xl";
  className?: string;
  canRemove?: boolean;
  onRemove?: () => void;
  onClick?: () => void;
}

export const SnippetTag = ({
  tag,
  variant = "default",
  size = "md",
  className,
  canRemove = false,
  onRemove,
  onClick
}: SnippetTagProps) => {
  const router = useRouter();
  const navigate = router.push
  const baseStyles =
    "inline-flex items-center rounded-md transition-colors hover:cursor-pointer gap-2";

  const variants = {
    default:
      "bg-primary-50 text-primary-700 hover:bg-primary-100 dark:bg-primary-900/50 dark:text-primary-400 dark:hover:bg-primary-900/20",
    outline:
      "border border-gray-200 text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-800",
    secondary:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-xs",
    md: "px-3 py-1 text-sm",
    xl: "px-4 py-2 text-base",
  };

  const handleClick = () => {
    const searchUrl = `/search?tags=${encodeURIComponent(tag)}&page=1&limit=5`;
    navigate(searchUrl);
  };

  return (
    <div className={cn(baseStyles, variants[variant], sizes[size], className)}>
      <span
        onClick={onClick ? onClick : handleClick}
      >
        {tag}
      </span>
        {canRemove && (
          <span className="cursor-pointer" onClick={onRemove}>
            <X className="h-4 w-4" />
          </span>
        )}
    </div>
  );
};
