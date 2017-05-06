import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { appRoutes } from './routes';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesListItemComponent } from './shared/articles-list-item/articles-list-item.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleDetailComponent,
    ArticlesListItemComponent,
    ArticlesListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
