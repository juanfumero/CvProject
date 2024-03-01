import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';



const adminRoutes: Routes = [
    {
      path: '',
      component: HomeComponent,
    //   children: [
    //     {
    //       path: 'ships', component: ShipsComponent,
    //     },
    //     {
    //       path: 'starshipdetail/:id', component: StarshipsDetailComponent
    //     },
    //     {
    //       path: 'menu', component: MenuComponent
    //     },
    //     {
    //       path: 'pantalla', component: PantallaComponent
    //     }
    //   ],  canActivate: [AuthGuard]
    }
  ];


@NgModule({
    imports: [RouterModule.forChild(adminRoutes)],
    exports: [RouterModule]
})
export class curriculumRoutingModule { }
