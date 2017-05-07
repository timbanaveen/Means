import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article;

  constructor(
    private route: ActivatedRoute,
    private router: Router
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

}
