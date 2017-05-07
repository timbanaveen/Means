import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Article } from '../models/article.model';

@Injectable()
export class ArticlesService {
  private article: Article;
  private articlesUrl = 'http://localhost:3000/articles';
  private articleUrl = 'http://localhost:3000/article';

  constructor(
    private http: Http
  ) {}

  /**
   * Fetch all articles from Backend.
   */
  getAllArticles(): Promise<Article[]> {
    return this.http.get(this.articlesUrl)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  /**
   * Get article of given id frfom backend.
   */
  getArticle(articleId): Promise<any> {
    return this.http.get(`${this.articleUrl}/${articleId}`)
                    .toPromise()
                    .then((res: Response) => {
                      const article = this.extractData(res);

                      this.article = Object.assign({}, article[0]);
                      return article;
                    })
                    .catch(this.handleError);
  }

  /**
   * Store current article for usage in comments.
   */
  getCurrentArticle(): Article {
    return this.article;
  }

  /**
   * Generic function to extract data from response.
   */
  extractData(res: Response) {
    let body = res.json();

    return body || {};
  }

  /**
   * Generic function to extract error from response.
   */
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
