import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';

export const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main', component: MainComponent },
  { 
    path: 'page', 
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  { 
    path: 'page/item', 
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  { path: '**', redirectTo: '/main' }
];