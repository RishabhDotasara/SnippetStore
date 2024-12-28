import { Switch } from '../../ui/Switch';

interface PrivacySettingsProps {
  isPrivate: boolean;
  onChange: (isPrivate: boolean) => void;
}

export const PrivacySettings = ({ isPrivate, onChange }: PrivacySettingsProps) => {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Privacy Settings
        </h2>
      </div>

      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-sm font-medium text-gray-900 dark:text-white">
            Private Snippet
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Only you can view this snippet
          </p>
        </div>
        <Switch
          checked={isPrivate}
          onChange={onChange}
        />
      </div>
    </div>
  );
};