import { Snippet } from "./snippet";

export interface BlockSnippet {
  title: string;
  // language: string;
  code: string;
  filename:string
}

export interface Block {
  title: string;
  description: string;
  snippets: BlockSnippet[];
  tags: string[];
  language:string;
}
