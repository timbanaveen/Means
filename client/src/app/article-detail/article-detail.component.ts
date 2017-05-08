import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { ArticlesService } from '../services/articles.service';
import { ToolTipService } from '../services/tool-tip.service';
import { ArticleDetailService } from '../services/article-detail.service';

import { Comment } from '../models/comment.model';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  private article: Article;
  private prevSelection: string;

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
  }

  ngOnInit() {
    this.article = this.route.snapshot.data.article[0];
  }

  private addComment(comment: Comment) {
    this.articleService.addComment(comment, this.article._id)
                        .then((comments: Comment[]) => {
                          this.article.comments = comments;

                          setTimeout(() => {
                            document.body.scrollTop = document.body.scrollHeight;
                          }, 100);
                        }); // TODO: show message on error
  }

  private isLinkedPara(paraIdx): boolean {
    return this.articleDetailService
                .getParaComments(this.article, paraIdx).length > 0;
  }

  private addTextSelectionEvent() {
    document.addEventListener('mouseup', (event) => {
      const selectedText = window.getSelection().toString();

      if (selectedText
          && selectedText.length) {
        setTimeout(() => {
          const newSelection = window.getSelection().toString();

          if (newSelection === selectedText) {
            this.toolTipService.showAt([event.x - 27, event.y - 58]);
          }
        }, 100);
      }
    });

    document.addEventListener('mousedown', (event) => {
      this.toolTipService.hide();
    });
  }

}
