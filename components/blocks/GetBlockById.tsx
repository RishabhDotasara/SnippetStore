import React, { useEffect } from "react";
import { useAPI } from "../../hooks/useAPI";
import toast from "react-hot-toast";

import { SnippetInfo } from "../snippets/SnippetInfo";
import { CodeBlock } from "../CodeBlock/CodeBlock";

import { CodeIcon } from "../icons/CodeIcon";
import {
  BlockSnippet,
  SnippetBlock,
} from "@rishabhdotasara/snippetstore-types";

type getBlockProps = {
  id: string;
};

export default function GetBlockById({ id }: getBlockProps) {
  const [block, setBlock] = React.useState<SnippetBlock | null>(null);
  const { makeRequest } = useAPI();

  const getBlock = async () => {
    try {
      if (!id) {
        toast.error("Invalid Block ID");
        return;
      }

      const block: SnippetBlock = await makeRequest(
        `/code/block/${id}`,
        "GET",
        {},
        false
      );
      
      console.log(block);
      setBlock(block);
    } catch (err) {
      toast.error("Error Fetching BLock, Please try again! ");
    }
  };

  useEffect(() => {
    getBlock();
  }, []);

  if (!block) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-3">
            <CodeIcon className="w-10 h-10 text-gray-400" />
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Loading code block...
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <SnippetInfo snippet={block as unknown as SnippetBlock} />
      {block?.snippets.map((snippet: BlockSnippet, index: number) => (
        <div key={index} className="space-y-3">
          <CodeBlock
            title={snippet.title}
            code={snippet.code}
            language={block.language}
            filename={snippet.filename}
            canCopy={true}
          />
        </div>
      ))}
    </div>
  );
}
