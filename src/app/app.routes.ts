import { Routes } from '@angular/router';
import { HomeComponent } from './curriculum/home/home.component';

export const routes: Routes = [    
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
      path: 'home',
      loadChildren: () => import('./curriculum/curriculum.module').then(m => m.CurriculumModule)
    }
  ];
