
interface TrendingDownIconProps {
  className?: string;
}

export const TrendingDownIcon = ({ className }: TrendingDownIconProps) => (
  <svg
    className={className}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6"
    />
  </svg>
);