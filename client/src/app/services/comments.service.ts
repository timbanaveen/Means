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

  /**
   * Converts API based model to UI model, which is used for rendering comments.
   */
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
      commentItem.linkUrl = window.location.href.substr(0, window.location.href.length - window.location.hash.length) + 
                            '#pl' + 
                            this.getParaIndex(linkInfo.index);
    }

    return commentItem;
  }

  /**
   * Gets paragraph index from index of text.
   * 
   * Uses linear search, but binary search can also be used.
   */
  getParaIndex(linkIdx): number {
    let paras: string[] = this.articlesService.getCurrentArticle().content;
    let index = 0;

    let lastParaIndex = 0;
    for (let i = 0; i < paras.length; i++) {
      let currentParaIndex = paras[i].length + lastParaIndex - 1;

      if (linkIdx > lastParaIndex 
          && linkIdx <= currentParaIndex) {
        return i;      
      } else {
        lastParaIndex = currentParaIndex;
      }
    }

    return index;
  }

}
