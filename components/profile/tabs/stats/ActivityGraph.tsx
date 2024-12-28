
// Mock data - in a real app, this would come from props or an API
const activityData = Array.from({ length: 12 }, (_, i) => ({
  month: new Date(2023, i, 1).toLocaleString('default', { month: 'short' }),
  snippets: Math.floor(Math.random() * 20),
  blocks: Math.floor(Math.random() * 5),
}));

export const ActivityGraph = () => {
  const maxValue = Math.max(
    ...activityData.map((d) => d.snippets + d.blocks)
  );

  return (
    <div className="w-full h-64">
      <div className="flex h-full">
        {/* Y-axis */}
        <div className="flex flex-col justify-between text-xs text-gray-500 dark:text-gray-400 pr-2">
          {[maxValue, maxValue * 0.75, maxValue * 0.5, maxValue * 0.25, 0].map(
            (value) => (
              <span key={value}>{Math.round(value)}</span>
            )
          )}
        </div>

        {/* Bars */}
        <div className="flex-1 flex items-end justify-between">
          {activityData.map((data) => (
            <div
              key={data.month}
              className="flex flex-col items-center gap-1 w-full"
            >
              {/* Stacked Bar */}
              <div className="w-8 flex flex-col-reverse">
                <div
                  className="w-full bg-primary-200 dark:bg-primary-800 rounded-sm"
                  style={{
                    height: `${(data.snippets / maxValue) * 100}%`,
                  }}
                />
                <div
                  className="w-full bg-primary-500 dark:bg-primary-600 rounded-sm"
                  style={{
                    height: `${(data.blocks / maxValue) * 100}%`,
                  }}
                />
              </div>
              {/* X-axis label */}
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {data.month}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-4 flex justify-center gap-4 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary-500 dark:bg-primary-600 rounded-sm" />
          <span className="text-gray-600 dark:text-gray-400">Blocks</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-primary-200 dark:bg-primary-800 rounded-sm" />
          <span className="text-gray-600 dark:text-gray-400">Snippets</span>
        </div>
      </div>
    </div>
  );
};