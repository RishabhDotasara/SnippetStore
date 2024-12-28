'use client'
import { useCreateSnippet } from "../../../hooks/useCreateSnippet";
import { SnippetMetadata } from "./SnippetMetaData";
import { CodeEditor } from "./CodeEditor";
import { TagInput } from "./tag-input/TagInput";
// import { PrivacySettings } from './PrivacySettings';
import { Button } from "../../ui/Button";

export const CreateSnippetForm = () => {
  const {
    snippet,
    updateMetadata,
    updateCode,
    updateTags,
    updateFilename,
    isSubmitting,
    handleSubmit,
  } = useCreateSnippet();

  return (
   
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Create New Snippet
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Share your code snippets with the community
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Metadata Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <SnippetMetadata
              title={snippet.title}
              description={snippet.description}
              language={snippet.language}
              onChange={updateMetadata}
            />
          </div>

          {/* Code Editor Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <CodeEditor
              code={snippet.code}
              filename={snippet.filename}
              updateFilename={updateFilename}
              language={snippet.language}
              onChange={updateCode}
            />
          </div>

          {/* Tags Section */}
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
            <TagInput tags={snippet.tags} onChange={updateTags} />
          </div>

          {/* Privacy Settings */}
          {/* <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <PrivacySettings
          isPrivate={snippet.isPrivate}
          onChange={updatePrivacy}
        />
      </div> */}

          {/* Submit Button */}
          <div className="flex justify-end">
            <Button
              type="submit"
              disabled={isSubmitting}
              isLoading={isSubmitting}
            >
              Create Snippet
            </Button>
          </div>
        </form>
      </div>

  );
};
