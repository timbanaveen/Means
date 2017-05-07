import { CommentType } from '../constants/commentType';
import { LinkInfo } from './linkInfo.model';

export interface Comment {
    type: CommentType,
    comment: string,
    linkInfo?: LinkInfo
}