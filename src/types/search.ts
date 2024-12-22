import { Snippet } from "./snippet"

export type FastSearchResponse = {
    _id:string,
    _index:string;
    _source:Pick<Snippet, 'title' | 'id' | 'language' | 'type' | 'description'>;
}
