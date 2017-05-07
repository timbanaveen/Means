import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

import { ArticlesService } from '../services/articles.service';

import { Comment } from '../models/comment.model';
import { Article } from '../models/article.model';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private articleService: ArticlesService
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

}
