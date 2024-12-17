export type SnippetType = 'snippet' | 'block';

export interface BaseSnippet {
  id: number;
  title: string;
  language: string;
  upvotes: number;
  version:string;
  type: SnippetType;
  createdAt: Date;
  code?: string;
  filename?: string;
}

export interface SingleSnippet extends BaseSnippet {
  type: 'snippet';
  code: string;
}

export interface SnippetBlock extends BaseSnippet {
  type: 'block';
  snippetCount: number;
  snippets: SingleSnippet[];
}

export type Snippet = SingleSnippet | SnippetBlock;