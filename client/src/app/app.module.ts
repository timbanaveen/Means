import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleDetailComponent } from './article-detail/article-detail.component';
import { ArticlesListItemComponent } from './shared/articles-list-item/articles-list-item.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

import { ArticlesService } from './services/articles.service';
import { ArticlesResolver } from './services/articles-resolver.service';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsListItemComponent } from './shared/comments-list-item/comments-list-item.component';
import { CommentsService } from './services/comments.service';
import { ToolTipService } from './services/tool-tip.service';
import { ActionToolTipComponent } from './shared/action-tool-tip/action-tool-tip.component';
import { LinkedCommentComponent } from './linked-comment/linked-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ArticleDetailComponent,
    ArticlesListItemComponent,
    ArticlesListComponent,
    CommentsListComponent,
    CommentsListItemComponent,
    ActionToolTipComponent,
    LinkedCommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ArticlesService,
    ArticlesResolver,
    CommentsService,
    ToolTipService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
