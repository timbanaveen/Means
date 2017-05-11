import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/debounceTime';

import { Article } from '../models/article.model';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.scss']
})
export class ArticlesListComponent implements OnInit {
  private originalArticles: Article[];
  private articles: Article[];

  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
    // let subscribers know about value change with debounce of 300ms
    searchService.searchValueChange$
      .debounceTime(300)
      .subscribe((serachValue) => {
        this.filterArticles(serachValue);
      });
  }

  ngOnInit() {
    this.originalArticles = this.articles = this.route.snapshot.data.articles;
  }

  /**
   * Filter articles based on search query.
   */
  filterArticles(searchValue: string) {
    let searchValueLc = searchValue.toLowerCase();

    this.articles = this.originalArticles
      .filter((article: Article) => {
        return (article.author.toLowerCase().includes(searchValueLc)
                || article.title.toLowerCase().includes(searchValueLc)
                || article.content[0].toLowerCase().includes(searchValueLc));
      });
  }

}
