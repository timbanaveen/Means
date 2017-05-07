import { Comment } from './comment.model';

export interface Article {
    author: string,
    title: string,
    content: string[],
    likes: number,
    createdOn: number,
    comments: Comment[]
}