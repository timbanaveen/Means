import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Article } from '../models/article.model';

@Injectable()
export class ArticlesService {
  private articlesUrl = 'http://localhost:3000/articles';
  private articleUrl = 'http://localhost:3000/article';

  constructor(
    private http: Http
  ) {}

  getArticles(): Promise<Article[]> {
    return this.http.get(this.articlesUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  getArticle(articleId): Promise<Article> {
    return this.http.get(`${this.articleUrl}/${articleId}`)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  extractData(res: Response) {
    let body = res.json();

    return <Article[]> body || {};
  }

  handleError(error: Response | any) {
    let errMsg: string;

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
