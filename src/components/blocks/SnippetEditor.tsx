import { Input } from '../ui/Input';
import { CodeEditor } from '../snippets/create/CodeEditor';
import { TrashIcon } from '../icons/TrashIcon';
import { BlockSnippet } from '@rishabhdotasara/snippetstore-types';


interface SnippetEditorProps {
  snippet: BlockSnippet;
  onChange: (snippet: BlockSnippet) => void;
  onRemove: () => void;
  language:string;
}

export const SnippetEditor = ({
  snippet,
  onChange,
  onRemove,
  language
}: SnippetEditorProps) => {
  const handleChange = (field: keyof BlockSnippet, value: string) => {
    onChange({ ...snippet, [field]: value });
  };
  const updateFilename = (filename: string) => {
    onChange({ ...snippet, filename });
  }

  return (
    <div className="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
      <div className="flex items-start justify-between gap-4 border-b-2 pb-8">
        <div className="flex-1 space-y-4">
          <Input
            label="Title"
            value={snippet.title}
            onChange={(e) => handleChange('title', e.target.value)}
            placeholder="Enter snippet title"
            required
          />

        </div>

        <button
          type="button"
          onClick={onRemove}
          className="mt-8 p-2 text-gray-400 hover:text-red-500 transition-colors"
          title="Remove snippet"
        >
          <TrashIcon className="w-5 h-5" />
        </button>
      </div>

      <CodeEditor
        code={snippet.code || ""}
        filename={snippet.filename || ""}
        updateFilename={updateFilename}
        language={language}
        onChange={(code) => handleChange('code', code)}
      />
    </div>
  );
};