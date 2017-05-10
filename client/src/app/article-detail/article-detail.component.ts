import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { ArticlesService } from '../services/articles.service';
import { ToolTipService } from '../services/tool-tip.service';
import { ArticleDetailService } from '../services/article-detail.service';

import { Comment } from '../models/comment.model';
import { CommentItem } from '../models/comment-item.model';
import { Article } from '../models/article.model';
import { ToolTipAction } from '../models/tool-tip-action.model';
import { LinkInfo } from '../models/linkInfo.model';
import { SelectedTextInfo } from '../models/selected-text-info.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  private article: Article;
  private linkInfo: LinkInfo;
  private isLinkedCommentExpanded: boolean;
  private currentParaComments: CommentItem[];
  private selectionInfo: SelectedTextInfo;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService,
    private toolTipService: ToolTipService,
    private articleDetailService: ArticleDetailService
  ) {
    // https://github.com/angular/angular/issues/6595
    // TODO: remove this when above issue is resolved.
    router.events.subscribe(s => {
      if (s instanceof NavigationEnd) {
        const tree = router.parseUrl(router.url);
        if (tree.fragment) {
          const element = document.querySelector("#" + tree.fragment);
          if (element) { element.scrollIntoView(element); }
        }

        // adding event to handle showing and hiding tooltip on text selection.
        this.addTextSelectionEvent();
      }
    });

    // Subsribe to action events of tooltip.
    toolTipService.actionClicked$.subscribe((action: ToolTipAction) => {
      this.onToolTipAction(action);
    });
  }

  /**
   * Get article detail from resolved route.
   */
  ngOnInit() {
    this.article = this.route.snapshot.data.article[0];
  }

  /**
   * Add comment in current article. Network related tasks is handled by service.
   */
  private addComment(comment: Comment) {
    this.articleService
      .addComment(comment, this.article._id)
      .then((comments: Comment[]) => {
        this.article.comments = comments;

        setTimeout(() => {
          document.body.scrollTop = document.body.scrollHeight;
        }, 100);
      }); // TODO: show message on error
  }

  /**
   * Check if current paragraph have any comments.
   */
  private isLinkedPara(paraIdx): boolean {
    return this.articleDetailService
                .getParaComments(this.article, paraIdx).length > 0;
  }

  /**
   * Handle click event on link provided for comments besides paragraph. 
   */
  private onCommentLinkClick(paraIdx) {
    this.currentParaComments = this.getParaCommentItems(paraIdx);
    this.isLinkedCommentExpanded = true;
    this.linkInfo = null;
  }

  private linkedCommentSaved(comments: Comment[]) {
    this.article.comments = comments;
    this.hideCommentPopUp();
  }

  private hideCommentPopUp() {
    this.isLinkedCommentExpanded = false;
    this.articleDetailService.unHighlightArticle(this.article);    
  }

  /**
   * Handle tooltip actions.
   */
  private onToolTipAction(action: ToolTipAction) {
    // If more than one actions, use enum
    if (action.name === 'comment') {
      this.linkInfo = this.articleDetailService.extractLinkInfo(this.article, this.selectionInfo);
      this.currentParaComments = this.getParaCommentItems(this.selectionInfo.fromPara);
      this.isLinkedCommentExpanded = true;

      // highlight actions
      this.articleDetailService.highlightSelection(this.article, this.selectionInfo);
    }
  }

  private getParaCommentItems(paraIdx): CommentItem[] {
    const paraComments = this.articleDetailService.getParaComments(this.article, paraIdx);

    return paraComments.map((comment) => {
      let commentItem: CommentItem = {
        author: 'Anonymous',
        commentText: comment.comment
      }

      return commentItem;
    });
  }

  /**
   * Add event which will get current selected text from document.
   */
  private addTextSelectionEvent() {
    document.addEventListener('mouseup', (event) => {
      const selectedText = window.getSelection().toString();

      if (selectedText
          && selectedText.length
          && (event.target as Element).id.startsWith('pl')) {
        setTimeout(() => {
          const selection = window.getSelection();
          const newSelection = selection.toString();

          if (newSelection === selectedText) {
            this.selectionInfo = this.articleDetailService.getSelectionInfo(selection);
            this.toolTipService.showAt([event.x - 27, event.y - 58]);
          }
        }, 100);
      }
    });

    document.addEventListener('click', (event) => {
      this.toolTipService.hide();
    });
  }

  onParaMouseDown(event, paraIdx) {
    this.hideCommentPopUp();
  }
}
