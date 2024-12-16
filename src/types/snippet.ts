export type SnippetType = 'snippet' | 'block';

export interface BaseSnippet {
  id: number;
  title: string;
  language: string;
  upvotes: number;
  downvotes: number;
  type: SnippetType;
  version:string,
  createdAt: Date;
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