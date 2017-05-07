import { Component, OnInit, Input } from '@angular/core';

import { Article } from '../../models/article.model';

@Component({
  selector: 'app-articles-list-item',
  templateUrl: './articles-list-item.component.html',
  styleUrls: ['./articles-list-item.component.scss']
})
export class ArticlesListItemComponent implements OnInit {
  @Input() article: Article;

  constructor() {}

  ngOnInit() {
  }

}
