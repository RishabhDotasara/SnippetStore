
// Mock data - in a real app, this would come from props or an API
const languageData = [
  { language: 'TypeScript', percentage: 35 },
  { language: 'JavaScript', percentage: 25 },
  { language: 'Python', percentage: 20 },
  { language: 'CSS', percentage: 15 },
  { language: 'React', percentage: 5 },
];

const getLanguageColor = (language: string) => {
  const colors: Record<string, string> = {
    TypeScript: 'bg-blue-500 dark:bg-blue-600',
    JavaScript: 'bg-yellow-500 dark:bg-yellow-600',
    Python: 'bg-green-500 dark:bg-green-600',
    CSS: 'bg-pink-500 dark:bg-pink-600',
    HTML: 'bg-orange-500 dark:bg-orange-600',
  };
  return colors[language] || 'bg-gray-500 dark:bg-gray-600';
};

export const LanguageDistribution = () => {
  return (
    <div className="space-y-4">
      {/* Bar Chart */}
      <div className="space-y-3">
        {languageData.map(({ language, percentage }) => (
          <div key={language} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="font-medium text-gray-700 dark:text-gray-300">
                {language}
              </span>
              <span className="text-gray-500 dark:text-gray-400">
                {percentage}%
              </span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className={`h-full rounded-full ${getLanguageColor(language)}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      {/* Total Count */}
      <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Based on {languageData.reduce((sum, { percentage }) => sum + percentage, 0)} snippets
        </p>
      </div>
    </div>
  );
};