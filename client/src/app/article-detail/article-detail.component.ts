import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.scss']
})
export class ArticleDetailComponent implements OnInit {
  article;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.article = this.route.snapshot.data.article[0];
  }

}
