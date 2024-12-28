import { Zap } from 'lucide-react';
import { Switch } from '../ui/Switch';

interface FastSearchToggleProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export function FastSearchToggle({ enabled, onChange }: FastSearchToggleProps) {
  return (
    <div className="flex items-center gap-2 mt-2  justify-end">
      <Switch
        checked={enabled}
        onChange={onChange}
      />
      <Zap
        size={16}
        className={`${
          enabled ? 'text-primary-500' : 'text-gray-400'
        } transition-colors`}
      />
      <span className="text-sm text-gray-600 dark:text-gray-400">
        Fast Search
      </span>
    </div>
  );
}