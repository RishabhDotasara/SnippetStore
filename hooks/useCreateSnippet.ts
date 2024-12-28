import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useAPI } from './useAPI';
import { useNavigate } from 'react-router-dom';
import { useRouter } from 'next/navigation';

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
  const {makeRequest} = useAPI();
  const router = useRouter();
  const minTags = 3;
  
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
    if (snippet.tags.length < minTags)
    {
      toast.error("Please enter at least 3 tags!");
      setIsSubmitting(false);
      return;
    }
    try {
      // TODO: Implement API call to save snippet
      // console.log("Snippet Data", snippet);
      const res = await makeRequest("/code/snippet/create", "POST", snippet, true);
      console.log(res)
      router.push(`/snippet/${res.id}`);
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