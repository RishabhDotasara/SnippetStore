import { useState } from "react";
import { toast } from "react-hot-toast";

import { useAPI } from "./useAPI";
import {
  BlockSnippet,
  SnippetBlock,
} from "@rishabhdotasara/snippetstore-types";
import { useRouter } from "next/navigation";

const initialSnippet: BlockSnippet = {
  title: "",
  code: "",
  filename: "",
};

const initialState: Omit<SnippetBlock, "id"> = {
  title: "",
  description: "",
  snippets: [],
  tags: [],
  language: "",
  type: "block",
  createdAt: new Date(),
  snippetCount: 0,
  upvotes: 0,
};

export const useCreateBlock = () => {
  const [block, setBlock] = useState<Omit<SnippetBlock, "id">>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { makeRequest } = useAPI();
  const router = useRouter();
  const minTags = 3;

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
    setBlock((prev: any) => ({ ...prev, tags }));
  };

  const updatePrivacy = (isPrivate: boolean) => {
    setBlock((prev) => ({ ...prev, isPrivate }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    if (block.tags.length < minTags) {
      toast.error(`Please add at least ${minTags} tags`);
      setIsSubmitting(false);
      return;
    }
    try {
      // TODO: Implement API call to save block
      const res = await makeRequest("/code/block/create", "POST", block, true);
      toast.success("Block created successfully!");
      setBlock(initialState);
      router.push(`/block/${res.id}`);
    } catch (error) {
      toast.error("Failed to create block");
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
