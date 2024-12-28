
import { TrendingUpIcon } from '../../../icons/TrendingUpIcon';
import { TrendingDownIcon } from '../../../icons/TrendingDownIcon';


interface StatCardProps {
  title: string;
  value: number;
  trend: number;
}

export const StatCard = ({ title, value, trend }: StatCardProps) => {
  const isPositive = trend > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm flex items-center flex-col">
      <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400">
        {title}
      </h3>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-gray-900 dark:text-white">
          {value}
        </span>
        <span
          className={`flex items-center text-sm ${
            isPositive ? 'text-green-600' : 'text-red-600'
          }`}
        >
          {isPositive ? (
            <TrendingUpIcon className="w-4 h-4" />
          ) : (
            <TrendingDownIcon className="w-4 h-4" />
          )}
          {Math.abs(trend)}
        </span>
      </div>
    </div>
  );
};