import React, { useEffect } from "react";
import { CodeBlock } from "../CodeBlock/CodeBlock";

import { SnippetInfo } from "./SnippetInfo";
import { useAPI } from "../../hooks/useAPI";

import { CodeIcon } from "../icons/CodeIcon";
import toast, { LoaderIcon } from "react-hot-toast";
import { Snippet } from "@rishabhdotasara/snippetstore-types";
import Head from "next/head";

type getSnippetProps = {
  id: string;
  title?: string;
};


export default function GetSnippetById({ id }: getSnippetProps) {
  const [snippet, setSnippet] = React.useState<any>(null);
  const { makeRequest } = useAPI();

  const getSnippet = async () => {
    try {
      if (!id) {
        toast.error("Invalid Snippet ID");
        return;
      }

      const snippet: Snippet = await makeRequest(
        `/code/snippet/${id}`,
        "GET",
        {},
        false
      );
      console.log(snippet);
      setSnippet(snippet);
    } catch (err) {
      toast.error("Error Fetching Snippet, Please try again! " + err);
    }
  };

  useEffect(() => {
    getSnippet();
  }, [id]);

  

  if (!snippet) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-t-4 border-blue-500 rounded-full animate-spin"></div>
          <div className="absolute inset-3">
            <CodeIcon className="w-10 h-10 text-gray-400" />
          </div>
        </div>
        <p className="text-gray-500 dark:text-gray-400 text-lg">
          Loading snippet...
        </p>
      </div>
    );
  }

  return (
    // <h1 className="text-2xl font-bold text-gray-500 dark:text-white pb-4">
    // {JSON.stringify(snippet, )}
    // <span>{snippet.code}</span>
    // </h1>
    <>
      {snippet && (
        <>

            <title>{snippet.title}</title>
          <div className="max-w-4xl mx-auto px-4 py-8 space-y-12">
            <SnippetInfo snippet={snippet} />

            <div className="space-y-4">
              <CodeBlock
                title={snippet.title}
                code={snippet.code}
                language={snippet.language}
                filename={snippet.filename}
              />
            </div>
          </div>
        </>
      )}

      {!snippet && <LoaderIcon className="h-12 w-12" />}
    </>
  );
}
