import { Comment } from './comment.model';

export interface Article {
    _id: string,
    author: string,
    title: string,
    content: string[],
    likes: number,
    createdOn: number,
    comments: Comment[]
}