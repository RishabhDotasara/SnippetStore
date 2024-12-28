
import GithubIcon from "../icons/GithubIcon";
import { User } from "firebase/auth";

interface ProfileHeaderProps {
  user: User;
}

export const ProfileHeader = ({ user }: ProfileHeaderProps) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm mb-6">
      <div className="flex items-start gap-6 flex-wrap">
        {/* User Info */}
        <div className="flex-1 border-b-2 dark:border-b-gray-600 flex gap-4 pb-8">
          {/* Avatar */}
          <img
            src={user.photoURL || ""}
            alt={user.displayName || "User avatar"}
            className="w-24 h-24 rounded-full"
          />
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.displayName}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">{user.email}</p>

            <div className="mt-4 flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <a
                href={user.providerData[0].providerId}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary-600 transition-colors "
              >
                <GithubIcon className="w-6 h-6" />
                <span className="hidden md:inline-block">GitHub Profile</span>
              </a>
              {/* <span className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                <span>Joined {formatDate(user.metadata.creationTime)}</span>
              </span> */}
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        {/* <div className="flex gap-6 w-full justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.stats.totalSnippets}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Snippets
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.stats.totalBlocks}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Blocks
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-gray-900 dark:text-white">
              {user.stats.totalUpvotes}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              Upvotes
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};
