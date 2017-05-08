import { Injectable } from '@angular/core';

import { Comment } from '../models/comment.model';
import { Article } from '../models/article.model';

@Injectable()
export class ArticleDetailService {

  constructor() {}

  /**
   * Get all comments which belongs to current paragraph.
   */
  getParaComments(article: Article, paraIdx: number): Comment[] {
    let articleParas: string[] = article.content;
    let prevIndex: number = 0;
    
    let textRanges = articleParas.map((para) => {
      let from = prevIndex;
      let to = prevIndex + para.length - 1;

      prevIndex = to + 1;
      return [from, to];
    }); // should cache / pre-compute this as it will remain same per article.

    let curentTextRange = textRanges[paraIdx];
    return article.comments.filter((comment: Comment) => {
      return (comment.linkInfo 
              && comment.linkInfo.index >= curentTextRange[0]
              && comment.linkInfo.index <= curentTextRange[1]);
    });
  }

}
