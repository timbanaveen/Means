import { Routes } from '@angular/router';
import { ArticlesListComponent } from './articles-list/articles-list.component';

export const appRoutes: Routes = [
    {
        path: 'articles',
        component: ArticlesListComponent
    },
    { 
        path: '', 
        redirectTo: '/articles',
        pathMatch: 'full' 
    }
];