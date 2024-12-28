export interface TrendingTagsResponse {
    communityTags: string[];
    languageTags: string[];
    frameworkTags: string[];
    message: string;
  }
  
  export interface TagCategory {
    title: string;
    tags: string[];
  }