
import { PopularSnippets } from './stats/PopularSnippets';
import { LanguageDistribution } from './stats/LanguageDistribution';
import { User } from 'firebase/auth';



interface StatisticsProps {
  user: User;
}

export const Statistics = ({ user }: StatisticsProps) => {
  return (
    <div className="space-y-6">
      {JSON.stringify(user)}
      {/* Overview Stats */}
      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard
          title="Total Snippets"
          value={user.stats.totalSnippets}
          trend={+12}
        />
        <StatCard
          title="Total Blocks"
          value={user.stats.totalBlocks}
          trend={+3}
        />
        <StatCard
          title="Total Upvotes"
          value={user.stats.totalUpvotes}
          trend={+28}
        />
      </div> */}

      {/* Activity Graph */}
      {/* <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Activity
        </h2>
        <ActivityGraph />
      </div> */}

      {/* Popular Snippets */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Most Popular Snippets
        </h2>
        <PopularSnippets />
      </div>

      {/* Language Distribution */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Language and Framework Distribution
        </h2>
        <LanguageDistribution />
      </div>
    </div>
  );
};