import { useState } from 'react';
import { toast } from 'react-hot-toast';

interface SnippetData {
  title: string;
  description: string;
  language: string;
  code: string;
  tags: string[];
  filename:string
}

const initialState: SnippetData = {
  title: '',
  description: '',
  language: '',
  code: '',
  tags: [],
  filename:''
};

export const useCreateSnippet = () => {
  const [snippet, setSnippet] = useState<SnippetData>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateMetadata = (field: string, value: string) => {
    setSnippet((prev) => ({ ...prev, [field]: value }));
  };

  const updateCode = (code: string) => {
    setSnippet((prev) => ({ ...prev, code }));
  };

  const updateTags = (tags: string[]) => {
    setSnippet((prev) => ({ ...prev, tags }));
  };

  const updatePrivacy = (isPrivate: boolean) => {
    setSnippet((prev) => ({ ...prev, isPrivate }));
  };

  const updateFilename = (filename:string) => {
    setSnippet((prev) => ({ ...prev, filename }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement API call to save snippet
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Snippet created successfully!');
      setSnippet(initialState);
    } catch (error) {
      toast.error('Failed to create snippet');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    snippet,
    updateMetadata,
    updateCode,
    updateTags,
    updatePrivacy,
    isSubmitting,
    updateFilename,
    handleSubmit,
  };
};