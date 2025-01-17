import { Routes } from '@angular/router';

export const routes: Routes = [    
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
      path: '',
      loadChildren: () => import('./curriculum/curriculum.module').then(m => m.CurriculumModule)
    }
  ];
