import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { BookComponent } from './book/book.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { path: 'book', component: BookComponent },
  { 
    path: 'page', 
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  }
];