
import { getRelativeTime } from '../../../../utils/date';
import LanguageIcon from '../../../icons/LanguageIcon';

// Mock data - in a real app, this would come from props or an API
const popularSnippets = [
  {
    id: 1,
    title: 'React useEffect Cleanup',
    language: 'typescript',
    upvotes: 156,
    createdAt: new Date('2023-10-01'),
  },
  {
    id: 2,
    title: 'CSS Grid Layout Helper',
    language: 'css3',
    upvotes: 89,
    createdAt: new Date('2023-09-15'),
  },
  {
    id: 3,
    title: 'Python Data Processing',
    language: 'python',
    upvotes: 67,
    createdAt: new Date('2023-09-10'),
  },
];

export const PopularSnippets = () => {
  return (
    <div className="space-y-4">
      {popularSnippets.map((snippet) => (
        <div
          key={snippet.id}
          className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-900 rounded-lg"
        >
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 dark:text-white truncate">
              <a href='#' className='hover:underline'>
              {snippet.title}
              </a>
            </h3>
            <div className="mt-1 flex items-center gap-2">
              <LanguageIcon language={snippet.language} className='text-xl'/>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {getRelativeTime(snippet.createdAt)}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-900 dark:text-white">
            <span>▲</span>
            <span>{snippet.upvotes}</span>
          </div>
        </div>
      ))}
    </div>
  );
};