"use client"
import { useCreateBlock } from "../../hooks/useCreateBlock";
import { TagInput } from "../snippets/create/tag-input/TagInput";
import { Button } from "../ui/Button";
import { BlockMetadata } from "./BlockMetadata";
import { SnippetList } from "./SnippetList";


export const CreateBlockForm = () => {
  const {
    block,
    updateMetadata,
    addSnippet,
    updateSnippet,
    removeSnippet,
    updateTags,
    isSubmitting,
    handleSubmit,
  } = useCreateBlock();

  return (

    <div className="max-w-4xl mx-auto px-4 py-8">
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
        
        
        Create New Block</h1>
      <p className="mt-2 text-gray-600 dark:text-gray-400">
        Group multiple related snippets together in a block
      </p>
    </div>
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Block Metadata */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <BlockMetadata
          title={block.title}
          description={block.description}
          language={block.language}
          onChange={updateMetadata}
        />
      </div>

      {/* Snippets List */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <SnippetList
          snippets={block.snippets}
          language={block.language}
          onAdd={addSnippet}
          onUpdate={updateSnippet}
          onRemove={removeSnippet}
        />
      </div>

      {/* Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <TagInput
          tags={block.tags}
          onChange={updateTags}
        />
      </div>

      {/* Privacy Settings
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
        <PrivacySettings
          isPrivate={block.isPrivate}
          onChange={updatePrivacy}
        />
      </div> */}

      {/* Submit Button */}
      <div className="flex justify-end">
        <Button
          type="submit"
          disabled={isSubmitting || block.snippets.length === 0}
          isLoading={isSubmitting}
        >
          Create Block
        </Button>
      </div>
    </form>
  </div>

  );
};