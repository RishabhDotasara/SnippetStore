import { useState } from 'react';

import { Statistics } from './tabs/Statistics';

import { BasicInfo } from './tabs/BasicInfo';
import { User } from 'firebase/auth';


interface ProfileTabsProps {
  user: User;
}

export const ProfileTabs = ({ user }: ProfileTabsProps) => {
  const [activeTab, setActiveTab] = useState<'info' | 'stats'>('stats');

  return (
    <div className='w-full'>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex gap-6">
          {/* <button
            onClick={() => setActiveTab('info')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'info'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Basic Info
          </button> */}
          <button
            onClick={() => setActiveTab('stats')}
            className={`pb-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'stats'
                ? 'border-primary-500 text-primary-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300'
            }`}
          >
            Statistics
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      <div>
        {activeTab === 'info' ? (
          <BasicInfo user={user} />
        ) : (
          <Statistics user={user} />
        )}
      </div>
    </div>
  );
};