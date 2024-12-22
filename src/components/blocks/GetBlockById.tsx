import React, { useEffect } from "react";
import { useAPI } from "../../hooks/useAPI";
import toast, { LoaderIcon } from "react-hot-toast";
import { Snippet } from "../../types/snippet";
import { SnippetInfo } from "../snippets/SnippetInfo";
import { CodeBlock } from "../snippets/CodeBlock";
import { Block, BlockSnippet } from "../../types/block";
import { CodeIcon } from "../icons/CodeIcon";

type getBlockProps = {
  id: string;
  title?: string;
};

export default function GetBlockById({ id, title }: getBlockProps) {
  const [block, setBlock] = React.useState<Block | null>(null);
  const { makeRequest } = useAPI();

  const getBlock = async () => {
    try {
      if (!id) {
        toast.error("Invalid Block ID");
        return;
      }

      const block: Block = await makeRequest(`/code/block/${id}`, "GET", {}, false);
      console.log(block);
      setBlock(block);
    } catch (err) {
      toast.error("Error Fetching Snippet, Please try again! " + err);
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
        <p className="text-gray-500 dark:text-gray-400 text-lg">Loading code block...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
      <SnippetInfo snippet={block as unknown as Snippet} />
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

