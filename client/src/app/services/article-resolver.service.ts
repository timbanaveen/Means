import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';

import { ArticlesService } from './articles.service';
import { Article } from '../models/article.model';

@Injectable()
export class ArticleResolver implements Resolve<Article> {
    constructor(
        private articlesService: ArticlesService,
        private route: Router
    ) {}

    /**
     * Resolve given article
     */
    resolve (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Article> {
        return this.articlesService.getArticle(route.params.id)
                                .then(article => article);
    }
}
