import { Code2 } from 'lucide-react';

interface CodeHeaderProps {
  title: string;
  filename?: string;
}

export function CodeHeader({ title, filename }: CodeHeaderProps) {
  return (
    <div className="flex items-center justify-between p-4 ">
      <div className="flex items-center gap-2">
        <Code2 className="h-5 w-5 text-muted-foreground text-primary-500" />
        <span className="text-sm font-medium text-foreground">{title}</span>
      </div>
      {filename && (
        <span className="text-xs text-muted-foreground">{filename}</span>
      )}
    </div>
  );
}