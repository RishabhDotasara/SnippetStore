import { User } from "firebase/auth";


interface BasicInfoProps {
  user: User;
}

export const BasicInfo = ({ user }: BasicInfoProps) => {
  return (
    <div className="space-y-6">
      {/* GitHub Info */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          GitHub Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Username
            </label>
            <p className="mt-1 text-gray-900 dark:text-white">
              {user.displayName}
            </p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Profile URL
            </label>
            <p className="mt-1">
              <a
                href={user.photoURL || ""}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700"
              >
                {user.photoURL}
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Account Info */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Account Information
        </h2>
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Member Since
            </label>
            <p className="mt-1 text-gray-900 dark:text-white">
              {user.metadata.creationTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};