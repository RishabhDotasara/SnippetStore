import { Button } from "../ui/Button";
import { PlusIcon } from "../icons/PlusIcon";
import { SnippetEditor } from "./SnippetEditor";
import { BlockSnippet } from "@rishabhdotasara/snippetstore-types";
import { Code2 } from "lucide-react";

interface SnippetListProps {
  snippets: BlockSnippet[];
  language: string;
  onAdd: () => void;
  onUpdate: (index: number, snippet: BlockSnippet) => void;
  onRemove: (index: number) => void;
}

export const SnippetList = ({
  snippets,
  language,
  onAdd,
  onUpdate,
  onRemove,
}: SnippetListProps) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white flex  items-center gap-2">
          <Code2 className="text-primary-500 h-6 w-6" />
          Snippets
        </h2>
      </div>

      <div className="space-y-6">
        {snippets.map((snippet, index) => (
          <div key={index} className="relative">
            <SnippetEditor
              snippet={snippet}
              language={language}
              onChange={(updatedSnippet: any) =>
                onUpdate(index, updatedSnippet)
              }
              onRemove={() => onRemove(index)}
            />
            {index < snippets.length - 1 && (
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
            )}
          </div>
        ))}

        {snippets.length === 0 && (
          <div className="text-center py-8 bg-gray-50 dark:bg-gray-900 rounded-lg border-2 border-dashed border-gray-200 dark:border-gray-700">
            <p className="text-gray-500 dark:text-gray-400">
              No snippets added yet. Click &quot;Add Snippet&quot; to get started.
            </p>
          </div>
        )}
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={onAdd}
          className="flex items-center gap-2 dark:hover:bg-gray-700 dark:text-white mx-auto"
        >
          <PlusIcon className="w-4 h-4" />
          Add Snippet
        </Button>
      </div>
    </div>
  );
};
