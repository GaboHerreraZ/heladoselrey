import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaginasComponent } from './componentes/paginas.component';

const routes: Routes = [
 {
  path: 'inicio',
  component: PaginasComponent,
  children: [
    {
      path: '',
      loadChildren: () => import('./componentes/home/home.module').then(m => m.HomeModule)
    }
  ]
},
{
  path: '',
  redirectTo: '/inicio',
  pathMatch: 'full'
},
{
  path: '**',
  redirectTo: '/inicio',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

