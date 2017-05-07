import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Article } from '../models/article.model';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  articles: Article[];

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.articles = this.route.snapshot.data.articles;
  }

}
