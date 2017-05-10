import { Injectable } from '@angular/core';

import { Comment } from '../models/comment.model';
import { Article } from '../models/article.model';
import { LinkInfo } from '../models/linkInfo.model';
import { SelectedTextInfo } from '../models/selected-text-info.model';

@Injectable()
export class ArticleDetailService {

  constructor() {}

  /**
   * Get all comments which belongs to current paragraph.
   */
  getParaComments(article: Article, paraIdx: number): Comment[] {
    let curentTextRange = this.getArticleTextRanges(article)[paraIdx];
    return article.comments.filter((comment: Comment) => {
      return (comment.linkInfo 
              && comment.linkInfo.index >= curentTextRange[0]
              && comment.linkInfo.index <= curentTextRange[1]);
    });
  }

  /**
   * Extracts LinkInfo, from given params.
   * It is considered that fromPara <= toPara
   */
  extractLinkInfo(article: Article, selectionInfo: SelectedTextInfo): LinkInfo {
    const { fromPara, fromOffset, toPara, toOffset } = selectionInfo;
    const textRanges = this.getArticleTextRanges(article);

    let linkInfo: LinkInfo = {
      index: textRanges[fromPara][0] + fromOffset,
      length: fromPara === toPara ?
              toOffset - fromOffset :
              textRanges[toPara][0] - textRanges[fromPara][0] + toOffset - fromOffset
    };

    return linkInfo;
  }

  /**
   * Get selection information.
   */
  getSelectionInfo(selection: Selection): SelectedTextInfo {
    const anchorNode = selection.anchorNode;
    const focusNode = selection.focusNode;
    
    const anchorParaIdx = parseInt((anchorNode.parentNode as Element).id.split('pl')[1]);
    const focusParaIdx = parseInt((focusNode.parentNode as Element).id.split('pl')[1]);

    let fromPara;
    let fromOffset;
    let toPara;
    let toOffset;

    if (anchorParaIdx === focusParaIdx) {
      fromPara = toPara = anchorParaIdx;
      fromOffset = selection.anchorOffset;
      toOffset = selection.focusOffset;
    } else if (anchorParaIdx < focusParaIdx) {
      fromPara = anchorParaIdx;
      toPara = focusParaIdx;
      fromOffset = selection.anchorOffset;
      toOffset = selection.focusOffset;
    } else {
      fromPara = focusParaIdx;
      toPara = anchorParaIdx;
      fromOffset = selection.focusOffset;
      toOffset = selection.anchorOffset;
    }

    const selectionInfo: SelectedTextInfo = {
      fromPara,
      fromOffset,
      toPara,
      toOffset
    };

    return selectionInfo;
  }

  /**
   * wraps select text by highlighter.
   */
  highlightSelection(article: Article, selectionInfo: SelectedTextInfo) {
    const highlightEl = '<span class="text-highlighter"';
    const highlightElClose = '</span>';
    const { fromPara, fromOffset, toPara, toOffset } = selectionInfo;

    if (fromPara === toPara) {
      const currentPara = article.content[fromPara];
      article.content[fromPara] = currentPara.substr(0, fromOffset) +
                                  `${highlightEl}>${currentPara.substr(fromOffset, toOffset - fromOffset)}${highlightElClose}` +
                                  currentPara.substr(toOffset);
    } else {
      const fromParaText = article.content[fromPara];
      article.content[fromPara] = fromParaText.substr(0, fromOffset) +
                                  `${highlightEl}>${fromParaText.substr(fromOffset)}${highlightElClose}`;

      for (let i = fromPara + 1; i < toPara; i++) {
        article.content[i] = `${highlightEl}${article.content[i]}${highlightElClose}`;
      }

      const toParaText = article.content[toPara];
      article.content[toPara] = `${highlightEl}>${toParaText.substr(0, toOffset)}${highlightElClose}` +
                                toParaText.substr(toOffset);
    }
  }

  /**
   * Removes all highlights from article.
   */
  unHighlightArticle(article: Article) {
    const highlightElRe = /<span class="text-highlighter">([\s\S]*)<\/span>/g;
    let paras = article.content;

    paras = paras.map((para) => {
      return para.replace(highlightElRe, '$1');
    });

    article.content = paras;
  }

  private getArticleTextRanges(article: Article) {
    let articleParas: string[] = article.content;
    let prevIndex: number = 0;
    
    let textRanges = articleParas.map((para) => {
      let from = prevIndex;
      let to = prevIndex + para.length - 1;

      prevIndex = to + 1;
      return [from, to];
    }); // should cache / pre-compute this as it will remain same per article.

    return textRanges;
  }
}
