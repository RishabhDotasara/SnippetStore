import { useState } from 'react';
import { toast } from 'react-hot-toast';
import type { Block, BlockSnippet } from '../types/block';
import { useAPI } from './useAPI';

const initialSnippet: BlockSnippet = {
  title: '',
  code: '',
  filename:''
};

const initialState: Block = {
  title: '',
  description: '',
  snippets: [],
  tags: [],
  language:''
};

export const useCreateBlock = () => {
  const [block, setBlock] = useState<Block>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {makeRequest} = useAPI();

  const updateMetadata = (field: string, value: string) => {
    setBlock((prev) => ({ ...prev, [field]: value }));
  };

  const addSnippet = () => {
    setBlock((prev) => ({
      ...prev,
      snippets: [...prev.snippets, { ...initialSnippet }],
    }));
  };

  const updateSnippet = (index: number, snippet: BlockSnippet) => {
    setBlock((prev) => ({
      ...prev,
      snippets: prev.snippets.map((s, i) => (i === index ? snippet : s)),
    }));
  };

  const removeSnippet = (index: number) => {
    setBlock((prev) => ({
      ...prev,
      snippets: prev.snippets.filter((_, i) => i !== index),
    }));
  };

  const updateTags = (tags: string[]) => {
    setBlock((prev) => ({ ...prev, tags }));
  };

  const updatePrivacy = (isPrivate: boolean) => {
    setBlock((prev) => ({ ...prev, isPrivate }));
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // TODO: Implement API call to save block
      const res = await makeRequest("/code/block/create", "POST", block)
      console.log(res)
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success('Block created successfully!');
      setBlock(initialState);
    } catch (error) {
      toast.error('Failed to create block');
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    block,
    updateMetadata,
    addSnippet,
    updateSnippet,
    removeSnippet,
    updateTags,
    updatePrivacy,
    isSubmitting,
    handleSubmit,
  };
};