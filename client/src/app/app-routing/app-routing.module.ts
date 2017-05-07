import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { ArticlesListComponent } from '../articles-list/articles-list.component';
import { ArticlesResolver } from '../services/articles-resolver.service';

const appRoutes: Routes = [
    {
        path: 'articles',
        component: ArticlesListComponent,
        resolve: {
          articles: ArticlesResolver
        }
    },
    { 
        path: '', 
        redirectTo: '/articles',
        pathMatch: 'full' 
    }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    ArticlesResolver
  ]
})
export class AppRoutingModule { }
