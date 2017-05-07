import { Injectable } from '@angular/core';

import { ArticlesService } from './articles.service';

import { Comment } from '../models/comment.model';
import { CommentItem } from '../models/comment-item.model';
import { LinkInfo } from '../models/linkInfo.model';

@Injectable()
export class CommentsService {

  constructor(
    private articlesService: ArticlesService
  ) {}

  createCommentItemModel(comment: Comment): CommentItem {
    let commentItem: CommentItem = {
      author: 'Anonymous',
      commentText: comment.comment,
    };

    if (comment.linkInfo) {
      const linkInfo: LinkInfo = comment.linkInfo;
      const article = this.articlesService.getCurrentArticle();
      const articleText = article.content.join('');

      commentItem.linkText = articleText.substr(linkInfo.index, linkInfo.length);
    }

    return commentItem;
  }

}
