export interface UserStats {
    totalSnippets: number;
    totalBlocks: number;
    totalUpvotes: number;
  }
  
  export interface User {
    username: string;
    name: string;
    avatarUrl: string;
    githubUrl: string;
    joinedDate: Date;
    stats: UserStats;
  }