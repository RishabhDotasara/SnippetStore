import React from 'react';
import { useCreateSnippet } from '../../../hooks/useCreateSnippet';
import { SnippetMetadata } from './SnippetMetaData';
import { CodeEditor } from './CodeEditor';
import { TagInput } from './TagInput';
// import { PrivacySettings } from './PrivacySettings';
import { Button } from '../../ui/Button';
import { PrivacySettings } from './PrivacySettings';

export const CreateSnippetForm = () => {
  const { 
    snippet, 
    updateMetadata, 
    updateCode, 
    updateTags, 
    updateFilename,
    updatePrivacy,
    isSubmitting,
    handleSubmit 
  } = useCreateSnippet();

  return (
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
        <TagInput
          tags={snippet.tags}
          onChange={updateTags}
        />
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
  );
};